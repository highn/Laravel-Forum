import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from '../login/Login'
import Logout from '../login/Logout'
import Signup from '../login/Signup'
import Forum from '../forum/Forum'

const routes = [
    //{ path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name:'forum' }
  ]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})


export default router