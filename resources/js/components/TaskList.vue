<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Tasks List</div>

            <div class="card-body">
                <ul class="list-group">
                    <li v-for="task in tasks" class="list-group-item">
                        <div class="row">
                            <div class="col-md-10">
                                {{ task.title }}
                            </div>
                            <div class="col-md-2">
                                <router-link :to="{ name: 'Edit', params: { id: task.id }}" tag="button">foo</router-link>
                                <button type="submit" class="btn btn-danger" @click="deleteTask(task)">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data(){
            return {
                tasks: []
            }
        },
        created() {
            axios.get('./api/task')
            .then(response => {
                this.$store.state.tasks = response.data
                this.tasks = response.data
            });

            Event.$on('taskCreated', (title) => {
                this.tasks.push(title)
            });
            
            console.log('get: ', this.tasks)
        },
        methods: {
            deleteTask: function(task){
                console.log(this.$store.state.tasks);
                let arr = this.$store.state.tasks;
                arr = arr.filter(function(item) { 
                    console.log(item.id +' - '+ task.id);
                    return item.id !== task.id
                })

                this.$store.state.tasks = arr;

                this.tasks = this.$store.state.tasks

                console.log(this.$store.state.tasks);
                axios.delete('./api/task/'+task.id)
                .then(response => {
                //    axios.get('./api/task')
                //     .then(response => this.tasks = response.data);
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>
