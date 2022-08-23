<template>
    <!-- banner区域 -->
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
                <van-swipe-item v-for="(imgSrc,index) in swipeMsg" :key="index">
                    <img :src="imgSrc">
                </van-swipe-item>
           
            </van-swipe>
        </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
    name:'homeBanner',
    components:{Swipe, SwipeItem},
    data(){
        return{
            swipeMsg:[
                './static/images/banner_02.png',
                './static/images/banner_03.png',
                './static/images/banner_04.png',
                './static/images/banner_05.png',
                './static/images/banner_06.png',
                './static/images/banner_07.png',
                './static/images/banner_08.png',
            ]
        }
    }
}
</script>

<style scoped>
/* banner区域 : 轮播图*/
.my-swipe .van-swipe-item {
color: #fff;
font-size: 20px;
line-height: 150px;
text-align: center;
background-color: #39a9ed;
}
.van-swipe-item img{
	width: 100vw;
}


</style>