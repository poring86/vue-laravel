<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Tasks List</div>

            <div class="card-body">
                <ul class="list-group">
                    <li v-for="task in tasks" class="list-group-item">
                        {{ task.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tasks: []
            }
        },
        created() {
            axios.get('./api/task')
            .then(response => this.tasks = response.data);

            Event.$on('taskCreated', (title) => {
                this.tasks.push(title)
            });
            
            console.log('get: ', this.tasks)
        }
    }
</script>
