<template>
    <v-layout row wrap class="px-2 py-1">
        <v-flex xs12 sm6 md3 class="pa-2"
                v-for="todo in allTodos"
                :key="todo.id"
                >
            <v-card class="pa-2"
                    @dblclick="onDblClick(todo)"
                    :class="{'indigo white--text':todo.completed}">
                <v-card-text>
                    {{todo.title}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small fab color="error"
                           dark @click="deleteTodo(todo.id)">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "ListTodo",
        data:()=>({

        }),
        methods:{
            ...mapActions(['fetchTodos','deleteTodo','updateTodo']),
            onDblClick(todo) {
                const updTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                };

                this.updateTodo(updTodo);
            },
        },
        computed:{
            ...mapGetters(['allTodos']),
        },
        created(){
            this.fetchTodos();
        }

    }
</script>

<style scoped>
    .is-complete {
        background: #35495e;
        color: #fff;
    }
</style>