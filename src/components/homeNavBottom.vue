<template>
   <div>
        <div class="ad1">
            <a href="#"><img :src="navBottom.ad1_src" alt=""></a>
        </div>

        <div class="ad2">
            <a href="#"><img :src="navBottom.ad2_src[0]" alt=""></a>
            <a href="#"><img :src="navBottom.ad2_src[1]" alt=""></a>
        </div>
   </div>
</template>

<script>
export default {
    name:'homeNavBottom',
    props:['navBottom']
}
</script>

<style scoped>
 /* 中间内容区域 命名为ad1 和 ad2 */

.ad1{
	background: #fff;
}
.ad1 img{
	width: 100vw;
}
.ad2{
	display: flex;
	justify-content: space-between;
	margin: .1rem .1rem .2rem ;
}
.ad2 img{
	width: 1.75rem;
}
</style>