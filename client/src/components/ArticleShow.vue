<!--Blog文章展示-->
<template>
  <div>
    {{a}}}
  </div>
</template>

<script>
  import request from '../api/index'
  const getArticleShow = request.getArticleShow;
  export default {
    name: "ArticleShow",
    data(){
      return {
        a: ''
      }
    },
    mounted() {
      getArticleShow(this.$route.params.id)
        .then((res)=>{
          console.log(res.data.data);
          this.a = res;
        })
    }
  }
</script>

<style scoped lang="less">

</style>