<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Edit {{ id }}</div>

            <div class="card-body">
                <form action="./api/task" method="POST" @submit.prevent="addTask()">
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
    export default {
        data(){
            return{
                id: this.$route.params.id
            }
        }
    }
</script>
