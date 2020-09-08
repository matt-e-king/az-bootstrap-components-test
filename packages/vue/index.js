import { registerComponents } from './utils'
import * as components from './src'

const createInstaller = c => (Vue, options) => {
  // do other things that can happen during isntall, e.g:
  // install directives
  // set Vue root levels properties
  // do something with options

  console.log(c)
  registerComponents(Vue, c)
}

// https://vuejs.org/v2/guide/plugins.html
// Vue plugins, at minimum, need to return an object with an install function
// createInstaller is a double arrow function;
// returns another function, creates a closure over imported components
const AzBootstrapVue = { install: createInstaller(components) }
export default AzBootstrapVue

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AzBootstrapVue)
}
