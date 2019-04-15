<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link tag="a" to="/" class="nav-link" exact>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/register" class="nav-link" exact>Register</router-link>
                    </li>
                    <li class="nav-item text-right">
                        <router-link tag="a" to="/login" class="nav-link" exact>Login</router-link>
                    </li>
                    <li class="nav-item text-right">
                        <router-link tag="a" to="/categories" class="nav-link" exact>Categories</router-link>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="user_name">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user_name }}</a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <router-link tag="a" to="/profile" class="dropdown-item" exact>Profile</router-link>
                        <a class="dropdown-item" href="#" @click="logout()">Logout</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
        <div>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user_name: ''
            }
        },
        created() {
            // this.token_access = this.$store.state.access_token
            Event.$on('login', () => {
                console.log('usuario:', this.$store.state.user_login);
                this.user_name = this.$store.state.user_login.name
            });

        },
        methods:{
            logout(){
                axios.defaults.headers.common['Authorization'] = '';
                // axios.get('/logout')
                // .then(response => {
                //     // Event.$emit('taskCreated', {title: this.title})
                //     axios.defaults.headers.common['Authorization'] = ''
                // })
                // .catch(error => console.log(error))
            }
        }
    }
</script>
