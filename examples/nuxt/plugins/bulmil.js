import Vue from 'vue'

import { applyPolyfills, defineCustomElements } from 'bulmil/dist/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/bm-\w*/]

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window)
})
