<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Login</div>

            <div class="card-body">
                <form action="./api/task" method="POST" @submit.prevent="login()">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" name="email" v-model="email" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" name="password" v-model="password" placeholder="Password" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Login" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email: '',
                password:''
            }
        },
        methods:{
            login(){
                axios.post('../oauth/token', {
                    grant_type : 'password',
                    client_id : '2',
                    client_secret : '776z4w0JDvBuGRevdQ1jGzDsS9DQ9tWejjvAhckJ',
                    username : this.email,
                    password : this.password
                })
                .then(response => {
                    console.log(response.data.access_token)
                    this.$store.state.access_token = response.data.access_token
                    this.$store.state.refresh_token = response.data.refresh_token
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+response.data.access_token

                    axios.get('/index')
                    .then(response => {
                        // Event.$emit('taskCreated', {title: this.title})
                        console.log('response:', response)
                        this.$store.state.user_login = response.data
                        Event.$emit('login')
                    })
                    .catch(error => console.log(error))
                    
                    

                   
                })
                .catch(error => console.log(error))
            },
        }
    }
</script>
