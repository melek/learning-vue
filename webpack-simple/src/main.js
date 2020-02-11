import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverStatusUpdate(status) {
      this.$emit('serverStatusUpdate', status);
    },
    serverViewUpdate(name) {
      this.$emit('serverViewUpdate', name);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
