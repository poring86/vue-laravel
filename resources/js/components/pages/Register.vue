<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Register</div>

            <div class="card-body">
                <form action="./api/task" method="POST" @submit.prevent="register()">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" name="name" v-model="name" placeholder="Name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" name="email" v-model="email" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="text" name="password" v-model="password" placeholder="Password" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Register" class="btn btn-info">
                    </div>
                </form>
            </div>
            <button @click="test()">Test</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                email: '',
                password:''
            }
        },
        methods:{
            register(){
                axios.post('/register', {name:this.name, email:this.email, password:this.password})
                .then(response => {
                    // Event.$emit('taskCreated', {title: this.title})
                    this.title = ''
                })
                .catch(error => console.log(error))
            },
            test(){
                axios.get('/index')
                .then(response => {
                    // Event.$emit('taskCreated', {title: this.title})
                    console.log(response)
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>
