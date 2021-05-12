import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/shopcart',
    component: Shopcart
  },

  {
    path: '/category',
    component: Category
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
