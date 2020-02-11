import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverStatusUpdate(serverIndex, status) {
      this.$emit('serverStatusUpdate', serverIndex, status);
    },
    serverViewUpdate(serverIndex, server) {
      this.$emit('serverViewUpdate', serverIndex, server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
