import Vue from 'vue'
import App from './App.vue'

// import entire UI library
// import AzBootstrapVue from '@az-bootstrap-components/vue'
// console.log(AzBootstrapVue)
// Vue.use(AzBootstrapVue)

// manual treeshaking
import {
  ButtonPlugin,
  CardPlugin,
  // DropdownPlugin
} from '@az-bootstrap-components/vue/esm'
// Vue.use(DropdownPlugin)
Vue.use(ButtonPlugin)
Vue.use(CardPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
