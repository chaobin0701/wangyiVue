import Vue from "vue";
import Router from "vue-router";

// 引入路由组件
import Home from "../pages/Home.vue"  //主页
import CateList from "../pages/CateList.vue"; // 分类
import Shopping from "../pages/Shopping.vue"; //值得买
import Cart from "../pages/Cart.vue" // 购物车
import User from "../pages/User.vue"; // 用户界面
import Search from "../pages/Search.vue"; // 搜索界面



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },{
      path: "/Home",
      name: "Home",
      component: Home,
    },{
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },{
      path: "/CateList",
      name: "CateList",
      component: CateList,
    },{
      path: "/User",
      name: "User",
      component: User,
    },{
      path: "/Shopping",
      name: "Shopping",
      component: Shopping,
    },{
      path: "/Search",
      name: "Search",
      component: Search,
    }
  ],
});
