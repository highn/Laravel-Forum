<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field v-model="form.email" type="email" label="email" required></v-text-field>
            <v-text-field v-model="form.password" type="password" label="password" required></v-text-field>
            <v-btn color="green" type="submit">Login</v-btn>
            <router-link to="/signup" color="green"><v-btn flat >Signup</v-btn></router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email:null,
                    password:null
                }
            }
        },
        created(){
            if (User.loggedIn()){
                this.$router.push({ name: 'forum' })
            }
        },
        methods: {
            login() {
                User.login(this.form)
                //this.$router.push({ name: 'forum' })
            }
        }
    }
</script>
<style>

</style>