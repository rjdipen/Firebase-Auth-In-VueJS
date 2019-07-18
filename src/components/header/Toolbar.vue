<template>
    <nav>
        <v-toolbar app color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                TodoApp
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items  v-for="menu in menus" :key="menu.name">
                <v-btn v-if="isLoggedIn" flat :to="menu.route">
                    {{menu.name}}
                </v-btn>
                <v-divider vertical></v-divider>
            </v-toolbar-items>
            <v-btn v-if="!isLoggedIn" flat to="/register">Register</v-btn>
            <v-btn v-if="!isLoggedIn" flat to="/login">Login</v-btn>

            <v-btn v-if="isLoggedIn" flat @click="logout">
                logout
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "Toolbar",
        data:()=>({
            isLoggedIn: false,
            currentUser: false,
            menus:[
                {name:'TodoApp',icon:'',route:'/'},
                {name:'Blog',icon:'',route:'/blog'},
            ]
        }),
        created() {
            if (firebase.auth().currentUser) {
                this.isLoggedIn = true;
                this.currentUser = firebase.auth().currentUser.email;
            }
        },
        methods: {
            logout: function() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.go({ path: this.$router.path });
                    });
            }
        }
    }
</script>

<style scoped>

</style>