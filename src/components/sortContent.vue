<template>
<!-- 分类 -->
    <div class="content clearfix">
        <!-- 分类-left -->
        <ul class="cateLeft">
            <li v-for="(item,index) in message.sortTitle" :key="index" :class="item.active?'active':''">{{item.title}}</li>
        </ul>
        <!-- 分类-right -->
        <div class="cateRight">
            <!-- 轮播图 -->
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
                    <van-swipe-item  v-for="(item,index) in message.swiper" :key="index">
                        <img :src="item.src">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 活动推荐 -->
            <ul class="cateRight-list">
                <li v-for="(item,index) in message.sortList" :key="index">
                    <img :src="item.src" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'sortContent',
    data(){
        return{
            message:{
                sortTitle:[
                    {title:'为你推荐',active:true},
                    {title:'居家生活',active:false},
                    {title:'服饰鞋包',active:false},
                    {title:'美食酒水',active:false},
                    {title:'个护清洁',active:false},
                    {title:'母婴亲子',active:false},
                    {title:'运动旅行',active:false},
                    {title:'数码家电',active:false},
                    {title:'严选全球',active:false}
                ],
                swiper:[
                    {src:'./static/images/sateBanner-1.jpg'},
                    {src:'./static/images/sateBanner-1.jpg'},
                    {src:'./static/images/sateBanner-1.jpg'}
                ],
                sortList:[
                    {title:'必买清单',src:'./static/images/sateList-1.jpg'},
                    {title:'新品速递',src:'./static/images/sateList-2.jpg'},
                    {title:'换季清仓',src:'./static/images/sateList-3.jpg'},
                    {title:'礼遇中秋',src:'./static/images/sateList-4.jpg'},

                ]
            }
        }
    }
}
</script>

<style scoped>
/* 内容区域 */
    /* 分类 */
.content{
    /* position: absolute; */
    box-sizing: border-box;
    /* padding: .44rem 0 .48rem  0;
    top: 0; */
}
.content .cateLeft{
    padding:.2rem 0;
    float: left;
    width: .81rem;
    border-right: 1px solid #d9d9d9;
}
.cateLeft li{
    box-sizing: border-box;
    width: 100%;
    height: .25rem;
    margin-top: .2rem;
    text-align: center;
    line-height: .25rem;
    font-size: .14rem;
}
.cateLeft li.active{
    margin-top: 0%;
    color: #AB2B2B;
    border-left: .05rem solid #ab2b2b;
}
    /* 右边内容 */
.content .cateRight{
    height: 100%;
    box-sizing: border-box;
    color: #666;
    margin-left: .81rem;
    padding: .15rem .15rem .1rem;
}

.cateRight .banner{
    width: 2.64rem;
    height: .96rem;
    margin-bottom: .16rem;
    overflow: hidden;
	position: relative;
}
.cateRight .banner .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.cateRight .banner img{
    width: 2.64rem;
}

.banner .circle{
	position: absolute;
	bottom: .08rem;
	width: 100%;
	display: flex;
	justify-content: center;
}
.banner .circle span{
	width: .2rem;
	height: .02rem;
	background: rgba(255, 255, 255, .5);
	margin: 0 .05rem;
}
.banner .circle span.active{
	background: rgba(255, 255, 255, 1);
}

/* 右边底部 */
.cateRight-list{
    width: 2.64rem;
}
.cateRight-list li{
    width: 0.72rem;
    height: 1.08rem;
    float: left;
    margin-right: .17rem;
    display: flex;
    flex-direction: column;
}
.cateRight-list li span{
    text-align: center;
    color: #000;
    margin-top: .03rem;
}
.cateRight-list li:nth-child(3n){
    margin-right: 0;
}

.cateRight-list img{
    width: 0.72rem;
    height: 0.72rem;
}
</style>