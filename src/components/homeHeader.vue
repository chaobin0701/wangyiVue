<template>
	<div class="header-wrap">
     <!-- 顶部区域 -->
        <header class="header">
            <!-- 顶部区域 包括:logo 搜索框 登陆按钮 --> 
            <div class="head">
                <h1><a href="#"><img src="../assets/images/logo.png" alt=""></a></h1>
                <div class="search" @click="toSearch">
                    <span class="iconfont"> &#xe70c;</span>搜索商品, 共57086款好物
                </div>
                <button>登陆</button>
            </div>
            <!-- 顶部区域 包括:顶部推荐栏 -->
            <div class="channel" :class="ShowChannel">
                <div class="title">全部频道</div>
                <div class="scrollWrap">
                    <div class="inner">
                        <a href="#" class="avtive">推荐</a>
                        <a href="#" >居家生活</a>
                        <a href="#">服饰箱包</a>
                        <a href="#">美食酒水</a>
                        <a href="#">个护清洁</a>
                        <a href="#">母婴亲子</a>
                        <a href="#">运动旅行</a>
                        <a href="#">数码家电</a>
                        <a href="#">严选全球</a>
                    </div>
                </div>
                <div class="more">
                    <div>
                        <span class="iconfont" @click="isShowChannel = !isShowChannel"> &#xe54a;</span>
                    </div>
                </div>
            </div>
        </header>
		<!-- shadow --> 
		<div class="hideShadow" :class="isShowShadow"></div>
	</div>
</template>

<script>
export default {
    name:'homeHeader',
	data(){
		return{
			isShowChannel:false
		}
	},
	methods:{
		toSearch(){
			this.$router.push('./Search')
		}
	},
	computed:{
		ShowChannel(){
			return this.isShowChannel ? 'blockChannel':''
		},
		isShowShadow(){
			return this.isShowChannel ? 'showShadow':''
		}
	}
}
</script>

<style scoped>
    /* 顶部区域 包括:logo 搜索框 登陆按钮 */
.header{
	width: 100vw;
	background: #fff;
	/* fixed和z-index 保证header在最上层 || 设置left和top 保证向下滑不会划出屏幕 */
	position: fixed;
	left: 0;
	top: 0;
	z-index: 2;
}
.head{
	height: .43rem;
	display: flex;
	justify-content: space-between;	 /* x轴对齐方式，两端对齐 */
	align-items: center;	/* y轴对齐 */
	padding: 0 .15rem;
}
.head img {
	height: .2rem;
}
.head .search{
	height: .28rem;
	line-height: .28rem;
	background: #dedede;
	border-radius: .04rem;
	font-size: .14rem;
	color: #666;
	text-align: center;
	flex: 1 1 auto; /* 扩展 收缩 宽度*/
	margin: 0  .09rem;
}
.head .search .iconfont{
	font-size: .15rem;
	margin-right: .05rem;
}
.head button{
	font-size: .12rem;
	color: var(--c1);
	border: 1px solid var(--c1);
	background: #fff;
	border-radius: .04rem;
}
.header-wrap{
	height: .75rem;
}
/* 顶部区域 包括:顶部推荐栏 */

.channel{
	height: .32rem;
	position: relative;
}
.channel .title{
	display: none;
}
.channel .scrollWrap{
	width: 2.95rem;
	padding-left: .15rem;
	box-sizing: border-box;
}
.channel .inner{
	font-size: .14rem;
	white-space: nowrap; /* 不换行 */
	float: left;
}
.channel .inner a{
	display: inline-block;
	height: .32rem;
	line-height: .32rem;
	box-sizing: border-box;
	padding: 0 .08rem;
	margin-left: .06rem;
}
.channel .inner a.active{
	color: var(--c1);
	margin-left: 0;
	border-bottom: .02rem solid var(--c1);
}
.channel .more{
	width: 0.8rem;
	position: absolute;
	right: 0;
	top: 0;

	display: flex;
}
.channel .more div{
	width: .5rem;
	height: .3rem;
	background: #fff;
	text-align: center;
}
.channel .more::before{
	content: '';
	width: .3rem;
	height: .3rem;
	background: linear-gradient(90deg , rgba(255,255,255,0),#fff);
}
.channel .more span.iconfont{
	font-size: .28rem;
	color: #b2b2b2;
	display: inline-block;
	transition: .3s transform;
}

/* 设置more被点击之后的样式 */
.blockChannel .title{
	display: block;
	height: .3rem;
	line-height: .3rem;
	font-size: .14rem;
	padding-left: .15rem;
}
.blockChannel .scrollWrap{
	width: 100vw;
	padding: .12rem .15rem 0;
}
.blockChannel .inner{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.blockChannel .inner a{
	width: 0.75rem;
	height: .28rem;
	line-height: .28rem;
	border: 1px solid #ccc;

	font-size: .12rem;
	color: #333;
	text-align: center;
	border-radius: .02rem;
	margin: 0 0 .2rem 0;
}
.blockChannel .inner a.active{
	border: 1px solid var(--c1);
	color: var(--c1);
}
.blockChannel .more span.iconfont{
	transform: rotate(180deg);
}
/* shadow */

.hideShadow{
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, .5);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1;
	display: none;
}
.showShadow{
	display: block;
}
</style>