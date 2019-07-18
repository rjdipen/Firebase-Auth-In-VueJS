<template>
    <v-layout row justify-center align-center>
        <v-flex xs12 sm12 md8 offseet-md2>
            <v-toolbar color="indigo darken-1" dark>
                <v-toolbar-title>All Blog Post</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small color="indigo lighten-1" dark @click="dialog = !dialog">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-toolbar>
        </v-flex>
        <v-dialog v-model="dialog" width="800px">
            <add-blog ></add-blog>
        </v-dialog>
    </v-layout>

</template>

<script>
    import AddBlog from "./AddBlog";
    export default {
        name: "BlogHeader",
        components: {AddBlog},
        data:()=>({
            dialog:false,
        })
    }
</script>

<style scoped>

</style>