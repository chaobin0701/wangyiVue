<template>
<!-- foot -->
    <footer class="foot">
        <div class="btn">
            <a href="#">下载APP</a> <a href="#">电脑版</a>
        </div>
        <p>{{message.copyright}}</p>
        <p>{{message.licence}}</p>
    </footer>
</template>

<script>
export default {
    name:'homeFoot',
	data(){
		return{
			message:{
				copyright:'网易公司版权所有 © 1997-2021',
				licence:'食品经营许可证：JY13301080111719'
			}
		}
	}
}
</script>

<style scoped>
/* foot */
.foot{
	background: #414141;
	margin: .1rem 0 .5rem 0 ;
	padding: .27rem 0 .14rem 0;
	text-align: center;
}
.foot .btn{
	margin-bottom: .18rem;
	display: flex;
	justify-content: center;
}
.foot .btn a{
	width: 0.86rem;
	height: .31rem;
	line-height: .31rem;
	border: 1px solid #999;
	color: #fff;
	font-size: .12rem;
	border-radius: .02rem;
	margin: 0 .1rem;
}
.foot p{
	font-size: .10rem;
	line-height: .16rem;
	color: #999;
}
</style>