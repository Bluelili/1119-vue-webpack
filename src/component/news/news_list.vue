<template>
  <ul>
    <li v-for="item in newsList" v-bind::key="item.id">
      <router-link v-bind="{ to:`/news/detail/${item.id}` }">
        <p>{{ item.zhaiyao }}</p>
      </router-link>
    </li>
  </ul> 
</template>

<script>
  export default{
    // 模板上面有了所以不用再写
    data(){
      return {
        newsList:[];
      }
    },
    methods：{
      // 获取新闻列表
      getNewsList(){
        this.axios.get('')
        .then(resp => this.newsList = resp.data.message)
      }
    },
    // 数据初始化后，生命周期函数created自动调用函数获取数据进行渲染
    created(){
      return getNewsList();
    }
  }
</script>

<style scoped>

</style>