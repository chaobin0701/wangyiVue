<template>
  <div id="wrap">
    <!--  -->
    <div class="header">
      <h1>购物车</h1>
      <span>领劵</span>
    </div>
    <!--  -->
    <div class="m-header">
      <div>
        <i></i>
        <span>30天不能退货</span>
      </div>
      <div>
        <i></i>
        <span>48小时禁止退款</span>
      </div>
      <div>
        <i></i>
        <span>满99万元免邮费</span>
      </div>
    </div>
    <!--  -->
    <div class="content">
      <img src="../assets/images/shoppingCrat.jpg" alt="" />
      <span>别看了 什么都不能添加</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'cart'
};
</script>

<style scoped>
#wrap{
    position: relative;
    height: 100%;
}
/* header */
.header{
    height: 0.46rem;
    box-sizing: border-box;
    padding: 0 .15rem;
    text-align: center;
    display: flex;
    background-color: #fff;
    line-height: .22rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
}
.header h1{
    font-size: .18rem;
    font-weight: unset;
}
.header span{
    position: relative;
    font-size: .10rem;   
    width: .37rem;
    height: .2rem;
    color: #fff;
    background-color: #FC625F;
}
.header span::before{
    position: absolute;
    width: .08rem;
    height: .08rem;
    top: 50%;
    left: -.04rem;
    margin-top: -.04rem;
    border-radius: .08rem;
    background-color: #FFF;
    content: '';
}
.header span::after{
    right: -.04rem;
    position: absolute;
    width: .08rem;
    height: .08rem;
    top: 50%;
    margin-top: -.04rem;
    border-radius: .08rem;
    background-color: #FFF;
    content: '';
}
    /* m-header */
.m-header{
    display: flex;
    height: .4rem;
    justify-content: space-between;
    padding: 0 .165rem;
    background-color: rgb(238, 238, 238);
}
.m-header div{
    display: flex;
    align-items: center;

}
.m-header div  i{
    display: block;
    width:  .05rem;
    height: .05rem;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #666;
    margin-right: .02rem;
}
.m-header div span{
    font-size: .12rem;
    color: #666;
}

/* content */
.content{
    top: 0;
    margin: 1rem 0;
    width: 3.75rem;
    background-color: #EEEEEE;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content img{
    width: 1.37rem;
    height: 1.37rem;

}
.content span{
    font-size: .14rem;
    color: #7f7f7f;
    
}
</style>