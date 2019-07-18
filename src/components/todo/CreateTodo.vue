<template>
    <v-layout row warp align-center>
        <v-flex sm12 xs12 md10 offset-md1>
            <v-card class="pb-0">
                <v-form @submit.prevent="onSubmit">
                    <v-layout row warp>
                        <v-flex xs6 sm6 md8>
                            <v-text-field
                                    solo
                                    placeholder="Title....."
                                    v-model="title"
                                    type="text"
                                    >

                            </v-text-field>
                        </v-flex>
                        <v-flex xs3 sm3 md2>
                            <v-btn type="submit"
                                   color="primary"
                                   dark
                                   solo
                                    >
                                Submit
                                <v-icon>
                                    keyboard_arrow_right
                                </v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs3 sm3 md2>
                            <filter-todo></filter-todo>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions} from "vuex";
    import FilterTodo from "./FilterTodo";
    export default {
        components: {FilterTodo},
        data:()=>({
            title:''
        }),

        methods:{
            ...mapActions(["addTodo"]),
            onSubmit() {
                this.addTodo(this.title);
                this.title='';
            }
        }
    }
</script>

<style scoped>

</style>