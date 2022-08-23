<template>
  <div class="content">
    <!-- 内容区域 -->
    <div class="nav">
      <div class="background">
        <img :src="message.header.imgSrc" alt="" />
        <p>{{message.header.title}}</p>
        <img :src="message.header.backgroundImgSrc" alt="" />
      </div>
      <div class="list-wrappers">
        <!-- 导航表格区域 -->
        <ul class="list">
          <li v-for="(item,index) in message.navTab" :key="index">
            <img :src="item.imgSrc" alt="" />
            <span>{{item.title}}</span>
            <p>{{item.describe}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsContent_Top",
  data(){
    return{
      message:{
          header:{
            title:'严选好物 用心生活',
            imgSrc:'./static/images/shopping-logo.png',
            backgroundImgSrc:'./static/images/shopping-background.jpg'
          },
          navTab:[
            {title:'好物大赏',describe:'购物先看榜',imgSrc:'./static/images/shopping-list/sp-list1.png'},
            {title:'每月好物',describe:'7月必买清单',imgSrc:'./static/images/shopping-list/sp-list2.png'},
            {title:'超值专区',describe:'新定价直降',imgSrc:'./static/images/shopping-list/sp-list3.gif'},
            {title:'植系空间',describe:'居家绿植指南',imgSrc:'./static/images/shopping-list/sp-list4.png'},
            {title:'选购指南',describe:'破解选择困难',imgSrc:'./static/images/shopping-list/sp-list5.png'},
            {title:'晒单',describe:'入选就有红包',imgSrc:'./static/images/shopping-list/sp-list6.png'},
            {title:'新品体验馆',describe:'开箱测评',imgSrc:'./static/images/shopping-list/sp-list7.png'},
            {title:'睡眠实验室',describe:'专研科技床品',imgSrc:'./static/images/shopping-list/sp-list8.png'},
          ]
      }
    }
  }
};
</script>

<style scoped>
    /* content 内容区域 */
.content .nav{
    position: relative;
    width: 3.75rem;
    height: 2.7rem;
    padding-top: .725rem;
}
.content .nav .background{
    position: absolute;
    top: 0px;
    z-index: -1;

}
.content .nav .background img:nth-child(1){
    position: absolute;
    width: .65rem;
    top: .3rem;
    left: .06rem;
    z-index: 2;
}
.content .nav .background p{
    position: absolute;
    height: .22rem;
    line-height: .22rem;
    font-size: .15rem;
    left: .73rem;
    top: .4rem;
    color: #fff;
}
.content .nav .background img:nth-child(3){
    width: 3.75rem;
}

    /* 列表区域 */
.content .nav .list-wrappers{
    box-sizing: border-box;
    margin: 0 .1rem;

}

.content .nav .list{

    background: #fff;
    border-radius: .16rem;
    height: 2.7rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;   
}
.content .nav .list li{
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content .nav li img{
    width: .6rem;
    height: .6rem;
}
.content .nav li span{
    font-size: .14rem;
    color: rgb(51, 51, 51);
}
.content .nav li p{
    font-size: .12rem;
    color: rgb(153, 153, 153);
}

</style>