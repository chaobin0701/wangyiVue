<template>
  <div>
    <div class="header">
      <router-link to="./home"  class="homepage iconfont">&#xe639;</router-link>
      <p>值得买</p>
      <div class="right">
      <router-link to="./search"  class="search iconfont">&#xe70c;</router-link>
      <router-link to="./cart" class="shoppingCart iconfont">&#xe680;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsHeader",
};
</script>

<style scoped>
.header{
    display: flex;
    box-sizing: border-box;
    padding: 0 .12rem;
    height: .5rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
}
.header .iconfont{
    font-size: .20rem;
}
.header .iconfont:nth-child(2){
    font-size: .22rem;
    margin-left: .15rem;
}
.header p{
    margin-left: .2rem;
    font-size: .18rem ;
}

</style>