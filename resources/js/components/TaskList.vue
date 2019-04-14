<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Tasks List</div>

            <div class="card-body">
                <ul class="list-group">
                    <transition-group name="slide">
                        <li v-for="task in tasks" class="list-group-item" :key="task.uuid">
                            <div class="row">
                                <div class="col-md-10">
                                    {{ task.title }}
                                </div>
                                <div class="col-md-2">
                                    <router-link :to="{ name: 'Edit', params: task}" tag="button" class="btn btn-info">Edit</router-link>
                                    <button type="submit" class="btn btn-danger" @click="deleteTask(task)">Delete</button>
                                </div>
                            </div>
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .fade-enter  /* .fade-leave-active em versões anteriores a 2.1.8 */ {
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .5s;
    }
    .fade-leave-active{
        transition: opacity .5s;
    }
    .fade-leave-to{
        opacity: 0;
    }

    .slide-enter  /* .slide-leave-active em versões anteriores a 2.1.8 */ {
        opacity: 0;
    }
    .slide-enter-active{
        transition: opacity .5s;
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave-active{
        transition: opacity .5s;
        animation: slide-out 1s ease-out forwards;
        position: absolute;
    }
    .slide-leave-to{
        opacity: 0;
    }
    .slide-move{
        transition: transform 1s;
    }
    
    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px)
        }
    }
</style>


<script>
    export default {
        data(){
            return {
                tasks: []
            }
        },
        created() {
            axios.get('/task')
            .then(response => {
                this.$store.state.tasks = response.data
                this.tasks = response.data
            });

            // Event.$on('taskCreated', (title) => {
            //     this.tasks.push(title)
            // });
            
            console.log('get: ', this.tasks)
        },
        methods: {
            deleteTask: function(task){
                console.log(this.$store.state.tasks);
                let arr = this.$store.state.tasks;
                arr = arr.filter(function(item) { 
                    console.log(item.id +' - '+ task.uuid);
                    return item.uuid !== task.uuid
                })

                this.$store.state.tasks = arr;
                this.tasks = this.$store.state.tasks

                // this.tasks.splice(task.uuid, 1)

                // this.$store.state.tasks = this.tasks

                console.log(this.$store.state.tasks);
                axios.delete('/task/'+task.uuid)
                .then(response => {
                //    axios.get('./api/task')
                //     .then(response => this.tasks = response.data);
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>
