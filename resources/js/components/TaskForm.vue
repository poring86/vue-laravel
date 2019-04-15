<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Task Form</div>

            <div class="card-body">
                <form action="/task" method="POST" @submit.prevent="addTask()">
                    <div class="form-group">
                        <input type="text" name="title" v-model="title" placeholder="Task title" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Add Task" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from 'uuid'
    export default {
        data(){
            return {
                title: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            addTask(){
                let arr = this.$store.state.tasks
                console.log(uuid());

                const id = uuid()
                // let last = this.$store.state.tasks.length - 1;
                // console.log(last);
                // let last_id = this.$store.state.tasks[last].id
                // let last_id_increment = last_id + 1;
                // console.log('ultimo:', this.$store.state.tasks[last]);
                // this.$store.state.tasks.push({title: this.title, uuid: id})
                this.$store.state.tasks.splice(0, 0, {title: this.title, id: id})

                // console.log({title: this.title, id: uuid})
                axios.post('/task', {title: this.title, id: id})
                .then(response => {
                    // Event.$emit('taskCreated', {title: this.title})
                    this.title = ''
                })
                .catch(error => console.log(error))
                
                console.log(this.$store.state.tasks);
            }
        }
    }
</script>
