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


// export default router







import axios from "axios";
import MockAdapter from "axios-mock-adapter";
 
// import { LoginUsers } from './data/user'
import { users } from "../mock/data/user";
 
export default {
  router,
  init() {
    let mock = new MockAdapter(axios);
 
    // mock success request  模拟成功请求
    mock.onGet("/success").reply(200, {
      msg: "success"
    });
    // mock error request  模拟失败请求
    mock.onGet("/error").reply(500, {
      msg: "failure"
    });
 
    // login 模拟登录接口
    mock.onPost("/user/login").reply(config => {
      // 解析axios传过来的数据
      let { username, password } = JSON.parse(config.data);
      return new Promise((resolve) => {
        // 先创建一个用户为空对象
        let user = null;
        setTimeout(() => {
          // 判断模拟的假数据中是否有和传过来的数据匹配的
          let hasUser = users.some(person => {
            // 如果存在这样的数据
            if (person.username === username && person.password === password) {
              user = JSON.parse(JSON.stringify(person));
              user.password = undefined;
              return true;
            } else {
              //  如果没有这个person
              return false;
            }
          });
          // 如果有那么一个人
          if (hasUser) {
            resolve([200, { code: 200, msg: "登录成功", user }]);
          } else {
            // 如果没有这么一个人
            resolve([200, { code: 500, msg: "账号错误" }]);
          }
        }, 500);
      });
    });
  }
};
