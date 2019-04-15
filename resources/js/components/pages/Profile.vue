<template>
    <div class="col-md-8 mt-4">
        <div class="card">
            <div class="card-header">Profile</div>

            <div class="card-body">
                <p>Name: {{ profile.name }}</p>
                <p>Email: {{ profile.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                profile: this.$store.state.user_login
            }
        },
        created(){
            this.profile = this.$store.state.user_login
            console.log('criado')
        },
        methods:{
        }
    }
</script>
