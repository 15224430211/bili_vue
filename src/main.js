import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Object.defineProperty(Vue.prototype, '$http', {
//   value: axios
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
