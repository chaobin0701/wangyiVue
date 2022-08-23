<template>
<div>
    <!-- nav区域 -->
    <nav class="nav">
        <!-- 顶部区域 -->
        <navHeader/>
        <!-- 列表区域 -->
        <navListItem :navListMsg="navList"/>
        <!-- 中间内容区域 命名为ad1 和 ad2 -->
        <navBottom :navBottom="navBottom" />
    </nav>
    </div>
</template>

<script>
import navHeader from './homeNavHeader.vue'
import navListItem from './homeNavListItem.vue'
import navBottom from './homeNavBottom.vue'

export default {
    name:'homeNav',
    components:{navListItem,navHeader,navBottom},
    data(){
        return{
            navList:[ // 列表区域数据
                {src:'./static/images/nav_01.png',title:'新品首发'},
                {src:'./static/images/nav_02.png',title:'居家生活'},
                {src:'./static/images/nav_03.png',title:'服饰鞋包'},
                {src:'./static/images/nav_04.png',title:'美食酒水'},
                {src:'./static/images/nav_05.png',title:'个护清洁'},
                {src:'./static/images/nav_06.png',title:'母婴亲子'},
                {src:'./static/images/nav_07.png',title:'运动旅行'},
                {src:'./static/images/nav_08.png',title:'数码家电'},
                {src:'./static/images/nav_09.png',title:'全球特色'},
                {src:'./static/images/nav_10.gif',title:'好货抄底'}
            ],
            navBottom:{ // 底部数据 
                ad1_src:'./static/images/ad.gif',
                ad2_src:['./static/images/ad_01.png','./static/images/ad_02.png']
            }   
        }
    }
}
</script>

<style scoped>
/* <!-- nav区域 --> */
.nav{
	background: #fff;
}
</style>