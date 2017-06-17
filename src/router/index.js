import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/todolist/:username/:id',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/',
      name: 'Index',
      component: Login
    }
  ]
})
