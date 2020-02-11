import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Divider from './components/Divider.vue'
import ServerApp from './components/ServerApp.vue'

Vue.component('ldg-header', Header);
Vue.component('ldg-footer', Footer);
Vue.component('ldg-divider', Divider);
Vue.component('ldg-serverapp', ServerApp);

new Vue({
  el: '#app',
  render: h => h(App)
})
