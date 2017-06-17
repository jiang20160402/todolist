// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('inventory-token')
  if (to.path === '/' || to.path === '/register') {
    if (token !== 'null' && token !== null) {
      next('/todolist')
    }
    next()
  } else {
    if (token !== 'null' && token !== null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    } else {
      next('/')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
