<template>
    <v-layout row align-center fill-height justify-center>
        <v-flex md3 elevation-15>
            <v-card >
                <v-layout align-center justify-center class="py-4">
                    <v-avatar size="100px" tile class="py-5">
                        <img  src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                    </v-avatar>
                </v-layout>

                <v-toolbar dark color="primary">
                    <v-toolbar-title class="text-md-center text-uppercase">
                        Create Account
                    </v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-form action="" @submit.prevent="register">
                        <v-text-field
                                outline
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email">
                        </v-text-field>

                        <v-text-field
                                outline
                                name="password"
                                label="Password"
                                type="password"
                                v-model="password">
                        </v-text-field>

                        <v-btn block large type="submit" dark color="primary">Register</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "Register",
        data:()=>({
            email:'',
            password:''
        }),
        methods:{
            register() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                             //console.log(user);
                            alert(`Account Created for ${user.email}`);
                            this.$router.push({ path: '/' });
                        },
                        err => {
                            alert(err.message);
                        }
                    );
            }
        }
    }
</script>

<style scoped>

</style>