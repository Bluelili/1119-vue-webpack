<template>
<article>
  <!--轮播图，因为要动态拿数据，所以要发送请求进行渲染-->
  <mt-swipe :auto="10000">
            <mt-swipe-item v-for="item in lunbos" v-bind::key="item.id">
                <router-link v-bind:href="item.url">
                    <img v-bind:src="item.img">
                </router-link>
            </mt-swipe-item>
  </mt-swipe>
</article>

  <!--六宫格-->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">首页</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/list">
                    <span class="mui-icon mui-icon-chat"></span>
                    <div class="mui-media-body">热点新闻</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/list">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">关于我们</div>
                </router-link>
            </li>
        </ul>
</template>

<script>
  export default{
    // 这里就不用写模板了，因为上面的template就是模板，其他和写组件时的规则一样
    data() {
      return {
        lunbos:[] //将拿到的数据暴露出去，给模板进行渲染
      }
    },
    methods:{
      // 轮播图--请求数据
      getLunbo(){
        this.axios.get("http://vue.studyit.io/api/getlunbo")
        .then(resp => this.lunbos = resp.data.message) 
        //用resp.data来接收返回的数据；把拿到的数据赋给data中的变量lunbos
      }
    },
    组件初始化完毕，生命周期函数created，一上来就自动调用接口，接收数据进行渲染
    created(){
      this.getLunbo();
    }
  }
</script>

<style lang="less" scoped>
@height:260px;
article {
  height:@height;
  img {
    height:@height;
  }
}
</style>