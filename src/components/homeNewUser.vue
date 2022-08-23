<template>
    <!-- 新人专享礼区域 -->
    <div class="newPeople">
        <h3><span>{{newPeople.title}}</span></h3>
        <div class="content">
            <a href="#" class="left">
                <h4>{{newPeople.leftContent.title}}</h4>
                <div class="img" :style="{backgroundImage:`url(${newPeople.leftContent.imgSrc})`}"></div>
            </a>
            <div class="right">
                <a href="#" v-for="(item,index) in newPeople.rightContent" :key="index"
				:style="{background:`${item.backgroundColor} url(${item.imgSrc}) no-repeat right bottom/1rem 1rem`}"
				>
                    <h4>{{item.title}}</h4>
                    <p>{{item.describe}}</p>
                    <div class="discount">
                        <div>¥{{item.originalPrice}}</div>
                        <div>¥{{item.salePrice}}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'homeNewUser',
	data(){
		return{
			newPeople:{
				title:'新人专享礼',
				leftContent:{
					title:'新人专享礼包',
					imgSrc:'./static/images/img_01@1x.png'
				},
				rightContent:[
					{
						title:'福利社',
						imgSrc:'./static/images/img_02.png',
						describe:'今日特价',
						originalPrice:'9.9',
						salePrice:'8.9',
						backgroundColor:'#fbe2d3'
					},{
						title:'新人拼团',
						imgSrc:'./static/images/img_03.png',
						describe:'一元起抱怨',
						originalPrice:'9.9',
						salePrice:'8.9',
						backgroundColor:'#ffecc2'
					},
				]
			}
		}
	}
}
</script>

<style scoped>
    /* 新人专享礼区域 */
.newPeople{
	background: #fff;
	margin: .1rem 0;
}
.newPeople h3{
	height: .45rem;
	line-height: .45rem;
	font-size: .16rem;
	text-align: center;
	font-weight: normal;
}
.newPeople h3 span{
	position: relative;
}
.newPeople h3 span::before , .newPeople h3 span::after{
	content: '';
	width: .12rem;
	height: .02rem;
	position: absolute;
	top: 50%;
	margin-top:  -.01rem;
	background: #333;
}
.newPeople h3 span::before{
	left: -0.2rem;
}
.newPeople h3 span::after{
	right: -0.2rem;
}
.newPeople .content{
	display: flex;
	justify-content: space-between;
	padding: 0 .15rem .15rem;
}
.newPeople .left{
	width: 1.67rem;
	height: 2.17rem;
	background: #f9e9cf;
}
.newPeople .left h4{
	font-size: .16rem;
	font-weight: normal;
	padding: .15rem 0 .19rem .15rem;
}
.newPeople .left .img{
	width: 1.29rem;
	height: 1.28rem;
	margin: 0 auto;
	/* 以背景形式的图片适配方法 */
	/* background-image: url(../assets/images/img_01@1x.png); */
	/* background-image: -webkit-image-set(url(../assets/images/img_01@1x.png) 2x, url(../assets/images/img_01@2x.png) 3x); */
	background-size: cover;
}
.newPeople .right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
	/* 对右边区域的文字进行定位、样式修改 */
.newPeople .right a{
	width: 1.67rem;
	height: 1.07rem;
	border-radius: .02rem;
	box-sizing: border-box;
	padding: .1rem;
	position: relative;
}
.newPeople .right a:nth-child(1){
	/* background: #fbe2d3 url(../assets/images/img_02.png) no-repeat right bottom/1rem 1rem; */
}
.newPeople .right a h4{
	font-size: .16rem;
	font-weight: normal;
	margin-bottom: .025rem;
}
.newPeople .right a p{
	color: #7f7f7f;
	font-size: .12rem;
}
.newPeople .right a .discount{
	width: .4rem;
	height: .4rem;
	position: absolute;
	right: .1rem;
	top: .1rem;
	background: #f59524;
	border-radius: 50%;
	box-sizing: border-box;
	padding-top: .05rem;

	color: #fff;
	text-align: center;
	font-size: .12rem;
}
.newPeople .right a .discount div:last-child{
	text-decoration: line-through;
}
.newPeople .right a:nth-child(2){
	/* background: #ffecc2 url(../assets/images/img_03.png) no-repeat right bottom/1rem 1rem; */
}
.newPeople .right a:nth-child(2) p{
	font-size: .11rem;
	color: #fff;
	text-align: center;
	line-height: .15rem;

	background: #cbb693;
	display: inline-block;
	border-radius: .02rem;
	padding: 0 .05rem
}

</style>