<template>
  <!-- 底部内容区域 -->
  <div class="m-wrappers">
    <!-- 左边瀑布流 -->
    <div class="m-lookColumn" >
      <div class="m-innerWrapper" v-for="(item,index) in message.article" :key="index">
        <img :src="item.ImgSrc" alt="" />
        <span class="title">{{item.title}}</span>
        <div class="m-lookDetail">
          <div class="m-userInfo">
            <img :src="item.userPic" alt="" />
            <span class="name">好物大赏</span>
          </div>
          <div class="m-upArea">
            <img :src="item.iconSrc" alt="" />
            <span class="watch">{{item.watchNumber}}K</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边瀑布流 -->
    <div class="m-lookColumn">
      <div class="m-lookColumn">
    <div class="m-innerWrapper" v-for="(item,index) in message.article" :key="index">
        <img :src="item.ImgSrc" alt="" />
        <span class="title">{{item.title}}</span>
        <div class="m-lookDetail">
          <div class="m-userInfo">
            <img :src="item.userPic" alt="" />
            <span class="name">好物大赏</span>
          </div>
          <div class="m-upArea">
            <img :src="item.iconSrc" alt="" />
            <span class="watch">{{item.watchNumber}}K</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsContent_Bottom",
  data(){
    return{
      message:{
        article:[
          {id:1,
          ImgSrc:'./static/images/sp-imgContent-1.jpg',
          title:'十一出游榜',
          userPic:'./static/images/sp-head.png',
          iconSrc:'./static/images/sp-watch.png',
          watchNumber:'520'},
          {id:1,ImgSrc:'./static/images/sp-imgContent-1.jpg',title:'十一出游榜',userPic:'./static/images/sp-head.png',iconSrc:'./static/images/sp-watch.png',watchNumber:'520'},
          {id:1,ImgSrc:'./static/images/sp-imgContent-1.jpg',title:'十一出游榜',userPic:'./static/images/sp-head.png',iconSrc:'./static/images/sp-watch.png',watchNumber:'520'},
          {id:1,ImgSrc:'./static/images/sp-imgContent-1.jpg',title:'十一出游榜',userPic:'./static/images/sp-head.png',iconSrc:'./static/images/sp-watch.png',watchNumber:'520'},
          {id:1,ImgSrc:'./static/images/sp-imgContent-1.jpg',title:'十一出游榜',userPic:'./static/images/sp-head.png',iconSrc:'./static/images/sp-watch.png',watchNumber:'520'},
        ]
      }
    }
  }
};
</script>

<style scoped>

/* 瀑布流区域 */
.m-wrappers{
    display: flex;
    justify-content: space-around;
    margin-top: .15rem;
    margin-bottom: .5rem;
}
.m-wrappers .m-lookColumn{
    width: 1.725rem;
    box-sizing: border-box;
}
.m-lookColumn .m-innerWrapper{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: .2rem;
    border-radius: .16rem;
    background-color: #fff;
}
.m-lookColumn .m-innerWrapper img{
    border-radius: .16rem  .16rem 0  0;
}
.m-lookColumn .m-innerWrapper .title{
    display: -webkit-box;
    padding: .09rem  .08rem 0;
    color: #333;
    font-size: .14rem;
    line-height: .2rem;
    flex-wrap: wrap;
    overflow: hidden;
    text-align: left;
    /* 限制两行 且 超出部分用...替代 */
    -webkit-line-clamp:2; 
    -webkit-box-orient:vertical; 
    white-space:normal;
}
.m-innerWrapper .m-lookDetail{
    display: flex;
    box-sizing: border-box;
    padding: .085rem .08rem .12rem;
    justify-content: space-between;
}
/* 用户左边区域 */
.m-lookDetail .m-userInfo{
    display: flex;
    align-items: center;
}
.m-lookDetail .m-userInfo img{
    width: .24rem;
    height: .24rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.05rem;
}
.m-lookDetail .m-userInfo .name{
    font-size: .11rem;
    color: #7f7f7f;
}
.m-lookDetail .m-upArea{
    display: flex;
}
/* 用户右边区域 */
.m-lookDetail .m-upArea{
    display: flex;
    align-items: center;
}
.m-lookDetail .m-upArea img{
    width: .16rem;
    height: .16rem;
}
.m-lookDetail .m-upArea .watch{
    font-size: .11rem;
    color: #7f7f7f;
}

</style>