<template>
    <v-container>
        <blog-header/>
        <bloglist/>
    </v-container>
</template>
<script>
    import BlogHeader from "../components/blog/BlogHeader";
    import Bloglist from "../components/blog/Bloglist";


    export default {
        name:"Blog",
        components: { BlogHeader,Bloglist},

    }
</script>
<style>

</style>
