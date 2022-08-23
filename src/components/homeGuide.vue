<template>
<!-- 指导 -->
    <ul class="guide">
        <li v-for="(item,index) in message" :key="index">
            <a href="#">
                <h3>{{item.title}}</h3>
                <h4>{{item.describe}}</h4>
                <img :src="item.src1" alt="">
                <img :src="item.src2" alt="">
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name:'homeGuide',
    data(){
        return{
            message:[
                {title:'超值专区',describe:'低至9.9元',src1:'./static/images/img_14.png',src2:'./static/images/img_15.png'},
                {title:'奥莱特卖',describe:'全场2折起',src1:'./static/images/img_16.png',src2:'./static/images/img_17.png'}
            ]
        }
    }
}
</script>

<style scoped>
    /* 指导 */
.guide{
	display: flex;
	justify-content: space-between;
	background: #fff;
	padding: .15rem .15rem .15rem;
}
.guide li{
	background: #f5f5f5;
	margin-bottom: .1rem;
}
.guide li a{
	display: block;
	padding: .075rem;
}
.guide li h3{
	font-size: .16rem;
	font-weight: normal;
}
.guide li h4{
	font-size: .12rem;
	color: #7f7f7f;
	font-weight: normal;
}
.guide li img{
	width: 0.75rem;
	height: 0.75rem;
}
</style>