<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Category List</div>

            <div class="card-body">
                <ul class="list-group">
                    <transition-group name="slide">
                        <li v-for="category in categories" class="list-group-item" :key="category.id">
                            <div class="row">
                                <div class="col-md-10">
                                    {{ category.title }}
                                </div>
                                <div class="col-md-2">
                                    <router-link :to="{ name: 'Edit', params: task}" tag="button" class="btn btn-info">Edit</router-link>
                                    <button type="submit" class="btn btn-danger" @click="deleteCategory(category)">Delete</button>
                                </div>
                            </div>
                        </li>
                    </transition-group>
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
            axios.get('/category')
            .then(response => {
                this.$store.state.categories = response.data
                this.categories = response.data
            });

            // Event.$on('taskCreated', (title) => {
            //     this.tasks.push(title)
            // });
            
            console.log('get: ', this.categories)
        },
        methods: {
            deleteCategory: function(categories){
                console.log(this.$store.state.categories);
                let arr = this.$store.state.categories;
                arr = arr.filter(function(item) { 
                    console.log(item.id +' - '+ category.uuid);
                    return item.uuid !== category.uuid
                })

                this.$store.state.category = arr;
                this.categories = this.$store.state.categories

                // this.tasks.splice(task.uuid, 1)

                // this.$store.state.tasks = this.tasks

                console.log(this.$store.state.category);
                axios.delete('/category/'+category.id)
                .then(response => {
                //    axios.get('./api/task')
                //     .then(response => this.tasks = response.data);
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>
