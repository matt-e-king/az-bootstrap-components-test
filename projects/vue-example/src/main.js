import Vue from 'vue'
import App from './App.vue'
import AzBootstrapVue from '@az-bootstrap-components/vue'
console.log(AzBootstrapVue)
Vue.use(AzBootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
