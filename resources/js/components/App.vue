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
                    <li class="nav-item">
                        <router-link tag="a" to="/login" class="nav-link" exact>Login</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">{{ token_access }}</a>
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
                token_access: 'um teste'
            }
        },
        created() {
            this.token_access = this.$store.state.access_token

        },
    }
</script>
