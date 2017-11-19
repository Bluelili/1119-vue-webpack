// 引入被路由的组件
import HomeComponent from "../component/home/home.vue";
import NewsListComponent from "../component/news/news_list.vue";
import NewsDetailComponent from "../component/news/news_detail.vue";

// 进行配置，并把整个路由配置对象导出
export default {
  routes:[
    // 首页路由配置
    {path:"/",redirect: "/index"}, //这是路由重定向
    {name:"i",path:"/index",component:HomeComponent},

    {name:"nl",path:"/news/list",component:NewsListComponent},
    {name:"nd",path:"/news/detail/:id",component:NewsDetailComponent},
  ]
};