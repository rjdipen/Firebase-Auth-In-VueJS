<template>
  <v-app>
      <toolbar/>
    <v-content>
          <router-view></router-view>
    </v-content>
      <v-footer></v-footer>
  </v-app>
</template>

<script>
import Toolbar from "./components/header/Toolbar";
export default {
  name: 'App',
  components: {
      Toolbar,
    },
  data () {
    return {
    }
  }
}
</script>
