import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Special = () => import('views/special/Special')
const Big = () => import('views/big/Big')
const My = () => import('views/my/My')
const Welcome = () => import('views/welcome/Welcome')

const Users = () => import('components/login/users/Users')
const Goods = () => import('components/login/goods/Goods')
const Reports = () => import('components/login/reports/Reports')
const Rights = () => import('components/login/rights/Rights')
const Orders = () => import('components/login/orders/Orders')
const Roles = () => import('components/login/roles/Roles')
const Categories = () => import('components/login/categories/Categories')
const Params = () => import('components/login/params/Params')

Vue.use(VueRouter)

//使用replace的方法解决冗余导航问题
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return RouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/big',
    component: Big,
    children: [
      {
        path: '/home',
        component: Home,
        children: [{
          path: '',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path: '/goods',
          component: Goods
        },
        {
          path: '/reports',
          component: Reports
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/orders',
          component: Orders
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/categories',
          component: Categories
        },
        {
          path: '/params',
          component: Params
        },
        ]
      },
      {
        path: '/shopcart',
        component: Shopcart
      },

      {
        path: '/category',
        component: Category
      },
      {
        path: '/special',
        component: Special
      },
      {
        path: '/my',
        component: My
      }
    ]
  },

  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由导航守卫导航权限
router.beforeEach((to, Form, next) => {
  // to 将要访问的路径
  // form 从哪个路径跳转而来
  // next 是一个函数 ，表示放行
  // next()  放行next("/home")
  if (to.path == '/profile') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/profile');
  next();

})
export default router
