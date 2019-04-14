<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Edit {{ uuid }}</div>

            <div class="card-body">
                <form method="PUT" @submit.prevent="updateTask()">
                    <div class="form-group">
                        <input type="text" name="title" v-model="title" placeholder="Task title" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Edit task" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title:this.$route.params.title,
                uuid: this.$route.params.uuid
            }
        },
        methods: {
            updateTask: function(){
                console.log('Updating')
                axios.put('/task/'+this.uuid, {title: this.title, uuid: this.uuid, method:'PUT'})
                .then(response => {
                    // Event.$emit('taskCreated', {title: this.title})
                    this.title = ''
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>
