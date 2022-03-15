// import message from 'message.vue';
import message from './message.js';
export default {
  install (Vue) {
    Vue.prototype.$message = message;
  }
};