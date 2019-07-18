import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'
import blog from './module/blog'
import todo from './module/todo'

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  // state: {
  //
  // },
  // mutations: {
  //
  // },
  // actions: {
  //
  // },
  modules:{
      blog,
      todo

  }
});
