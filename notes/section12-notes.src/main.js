import Vue from 'vue'
import App from './App.vue'

// Directives have 5 hooks.
  // * bind(el, binding, vnode)
  // * inserted(el, binding, vnode)
  // * update(el, binding, vnode, oldVnode)
  // * componentUpdated(el, binding, vnode, oldVnode)
  // * unbind(el, binding, vnode)
  // bind() and update() are used most often.

Vue.directive('highlight', { // v-highlight
  bind(el, binding, vnode) {
    // el.style = "color:white;background-color:green;"
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout( function() {
      if(binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }}, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
