<template>
    <!-- 类目热销榜 -->
    <div class="hot">
        <h3>{{hotMessage.title}}</h3>
        <div>
            <a href="#" v-for="(item,index) in hotMessage.hot_1" :key="index">
                <span>{{item.title}}</span>
                <img :src="item.src" alt="">
            </a>
        </div>
        <ul>
            <li  v-for="(item,index) in hotMessage.hot_2" :key="index">
                <a href="#">
                    <span>{{item.title}}</span>
                    <img :src="item.src" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'homeHot',
    data(){
        return{
            hotMessage:{
                title:"类目热销榜",
                hot_1:[
                    {title:'热销榜',src:'./static/images/img_04.png'},
                    {title:'热销榜',src:'./static/images/img_05.png'}
                ],
                hot_2:[
                    {title:'居家生活榜',src:'./static/images/img_06.png'},
                    {title:'美食酒水榜',src:'./static/images/img_07.png'},
                    {title:'服饰鞋包榜',src:'./static/images/img_08.png'},
                    {title:'个护清洁榜',src:'./static/images/img_09.png'},
                    {title:'数码家电榜',src:'./static/images/img_10.png'},
                    {title:'严选全球榜',src:'./static/images/img_11.png'},
                    {title:'母婴亲子榜',src:'./static/images/img_12.png'},
                    {title:'运动旅行榜',src:'./static/images/img_13.png'}
                ]
            }
        }
    }
}
</script>

<style scoped>
/* 类目热销榜 */
.hot{
	background: #fff;
	margin: .1rem 0 ;
	padding: 0 .15rem .12rem;
}
.hot h3{
	font-size: .16rem;
	line-height: .5rem;
	font-weight: normal;
}
.hot div{
	display: flex;
	justify-content: space-between;
}
.hot div a{
	width: 1.7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.hot div a:nth-child(1){
	background: #f9f3e4;
}
.hot div a img{
	width: 1rem;
	height: 1rem;
}
.hot div a span{
	font-size: .14rem;
	margin-left: .13rem;
	position: relative;
	top: -.08rem;
}
.hot div a span::before{
	content: '';
	width: .24rem;
	height: .02rem;
	position: absolute;
	left: 0;
	bottom: -.1rem;

	background: #333;
}
.hot div a:nth-child(2){
	background: #edeff6;
}
.hot ul{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.hot li{
	background: #f5f5f5;
	border-radius: .02rem;
	margin-top: .05rem;
}
.hot li a{
	display: block;
	width: 0.82rem;
	height: 0.9rem;
	text-align: center;
	padding-top: .05rem;
	box-sizing: border-box;
}
.hot li  img{
	width: 0.6rem;
	height: 0.6rem;
}
.hot li span{
	font-size: .12rem;
}
</style>