<template>
    <ul class="service">
        <li><span class="iconfont">&#xe69d;</span><span>网易自营品牌</span></li>
        <li><span class="iconfont">&#xe604;</span><span>30天无忧退货</span></li>
        <li><span class="iconfont">&#xe62e;</span><span>48小时快速退款</span></li>
    </ul>
</template>

<script>
export default {
    name:'homeNavHeader'
}
</script>

<style>
.service{
	display: flex;
	height: .36rem;
	justify-content: space-around;
	align-items: center;
}
.service span:nth-child(1){
	color: #cc6d70;
	font-size: .15rem;
	margin-right: .05rem;
}
.service span:nth-child(2){
	font-size: .12rem;
}
</style>