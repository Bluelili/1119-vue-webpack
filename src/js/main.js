// 导入第三方包
import Vue from "vue";
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
import Common from "../component/common";
import "mui/dist/css/mui.css";
import axios from "axios";
import VueRouter from "vue-router";

// 导入App.vue根组件
import AppComponent from "../component/App.vue";
// 导入路由配置
import routerConfig from "../router" //会自动找到index.js文件


// 启用插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);

// 添加axios到Vue原型中
Vue.prototype.axios = axios;

// 渲染根组件，启动项目
var vm = new Vue({
  el:'#app',
  render(createNode){
    return createNode(AppComponent);
  },
  router:new VueRouter(routerConfig);
})
