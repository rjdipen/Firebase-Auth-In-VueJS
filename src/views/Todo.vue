<template>
  <v-layout justify-center align-center row class="py-5">
      <v-flex sm12 xs12 md12>
          <create-todo/>
          <list-todo/>
      </v-flex>
  </v-layout>
</template>

<script>

  import CreateTodo from "../components/todo/CreateTodo";
  import ListTodo from "../components/todo/ListTodo";
  export default {
      name:"Todo",
    components: {
        ListTodo,
        CreateTodo
    }
  }
</script>
