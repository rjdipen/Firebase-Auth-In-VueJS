<template>
    <v-select
            @change="filterTodos($event)"
            v-model="value"
            :items="items"
            chips
            label="SortBy"
            solo
    ></v-select>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "FilterTodo",
        data:()=>({
            value:['5','10','50','100','150','200'],
            items:['5','10','50','100','150','200']
        }),
        methods: mapActions(["filterTodos"])
    }
</script>

<style scoped>

</style>