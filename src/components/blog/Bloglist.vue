<template>
    <v-layout>
        <v-flex xs12 sm12 md8 offset-md2 elevation-5>
            <v-layout row>
            <v-flex class="pt-2 px-3">
                <v-text-field
                        placeholder="Search....."
                        v-model="search"
                        type="text">
                </v-text-field>
            </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-list three-line v-for="blog in searchPost" :key="blog.id" class="py-0">
                <v-list-tile>
                    <v-list-tile-action>
                        <span v-text="blog.id"></span>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="v-list--subheader" >{{blog.title}}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <div class="text-md-right">
                            <v-btn fab color="blue" dark small class="v-btn--right" @click="dialog = !dialog">
                                <v-icon dark>edit</v-icon>
                            </v-btn>

                            <v-btn fab color="red" dark small @click="deleteBlog(blog.id)">
                                <v-icon dark >delete</v-icon>
                            </v-btn>
                        </div>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>
        </v-flex>
        <v-dialog v-model="dialog" width="800px">
            <edit-blog/>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    import EditBlog from "./EditBlog";
    export default {
        name: "Bloglist",
        components: {EditBlog},

        data:()=>({
            dialog:false,
            search:''
        }),
        methods:{
            ...mapActions(['fatchBlog','deleteBlog'])
        },
        computed:{
            ...mapGetters(['allBlog']),
            searchPost(){
                return this.allBlog.filter( blog =>{
                    return blog.title.match(this.search)
                })
            }
        },
        created(){
            this.fatchBlog();
        },

    }
</script>

<style scoped>

</style>