<template>
  <div>
    <h2 class="title">{{title}}</h2>
    <h4>{{$route.params.goodsId}}</h4>
    <h4>{{$route.params.userId}}</h4>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      title: '商品列表页面'
    };
  }
};
</script>

<style scoped>
  .title{
    color:red;
  }
</style>
