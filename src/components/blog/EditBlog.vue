<template>
    <v-layout row>
        <v-flex xs12 sm12 md12class="mb-3">
            <v-form @submit.prevent="editPost">
                <v-card>
                    <v-card-title class=" indigo white--text">
                        <span class="subheading">Edit Blog Post</span>
                    </v-card-title>
                    <v-card-text class="pb-0" >
                        <v-text-field
                                height="56"
                                outline
                                label="Post Title"
                                v-model="blog.title"
                                type="text">

                        </v-text-field>
                    </v-card-text>

                    <v-card-actions class="pt-0 px-3">
                        <v-btn type="submit" color="primary" dark >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "EditBlog",
        data:()=>({
            blog:{
                title:''
            }
        }),
        methods:{
            ...mapActions(["updateBlogPost"]),
            editPost(blog) {
                const updatePost = {
                    id: blog.id,
                    title: blog.title,
                };

                this.updateBlogPost(updatePost);
            }
        }
    }
</script>

<style scoped>

</style>