<template>
     <!-- 用户信息 -->
        <div class="row">
            <div class="left">
                <img :src="message.userInfo.userPicSrc" alt="">
                <div class="info">
                    <p>{{message.userInfo.username}}</p>
                    <span>{{message.userInfo.userCategory}}</span>
                </div>
            </div>
            <div class="right">
                <a href="./erweima.html">
                    <i class="u-icon u-icon-qrCodeInUcenter"></i>
                </a>
                <div class="supermcEntrance">
                    <i class="u-icon u-icon-supermember"></i>
                    <div class="m-supermcEntrance">
                        <div>Pro会员</div>
                        <span>立即试用<i class="u-icon u-icon-arrow"></i></span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'userMessage',
    data(){
        return{
            message:{
                userInfo:{
                    username:"SuperBin",
                    userCategory:'普通用户',
                    userPicSrc:'./static/images/user-head.png'
                }
            }
        }
    }
}
</script>

<style scpoed>
.u-icon{
	background: url(../assets/images/user-icon.png) no-repeat;
}
/* 用户信息 */
 .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 1.35rem;
    background-image: url(../assets/images/user-backimg.jpg);
    background-size: 3.75rem 1.35rem;
}
    /* left */
.row .left{
    width: 2.55rem;
    height: 1.35rem;
    display: flex;
    align-items: center;
    padding-left: .15rem;
}
.row .left img{
    width: .71rem;
    height: .71rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .2rem;
}
.row .left .info p{
    margin-bottom: .05rem;
    line-height: .21rem;
    font-size: .18rem;
    color: #fff;
}
.row .left .info span{
    line-height: .16rem;
    font-size: .14rem;
    color: #fff;
}
    /* right */
.row .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: .94rem;
    width: 1.05rem;
    padding-left: .085rem;
}
.row .right a{
    align-self:flex-end ;
}
 .right .supermcEntrance{
     margin-top: .15rem;
    display: flex;
    background-image: linear-gradient(
        180deg,#574E44 0,#0E0E0E 100%);
    /* padding: .05rem .05rem 0 .05rem ; */
    height: .42rem;
    border-radius: .32rem 0 0 .32rem;
    align-items: center;
    
}
.right .u-icon-qrCodeInUcenter{
    background-size: .42rem;
    display: block;
    background-position: 0 -1.33rem;
    width: .32rem;
    height: .32rem;
   padding-right: .15rem;
}
.right .u-icon-supermember{
    width: .28rem;
    height: .28rem;
    background-size: .33rem;
    display: block;
    background-position: 0 -.35rem;
    margin: 0 .02rem ;
}
.right  .m-supermcEntrance{
    color: #f9e0c0;

    
}
.right  .m-supermcEntrance div{
    font-size: .13rem;
}
.right  .m-supermcEntrance span{
    font-size: .12rem;
    display: flex;
    align-items: center;
}
.right  .m-supermcEntrance .u-icon-arrow{
    width: .09rem;
    height: .09rem;
    background-size: .28rem;
    display: block;
    background-position: 0 -.2rem;
    margin-left: .02rem
}

</style>