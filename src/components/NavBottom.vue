<template>
    <!-- 底部导航栏 -->
        <nav class="footerNav">  
            <NavItem v-for="item in navMsg" :key="item.title" 
            :navMessage='item'
            ></NavItem>
        </nav>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
    name:'NavBottom',
    components:{
        NavItem
    },
    data(){
        return{
            navMsg:[ //底部数据
                {href:'/Home',title:'首页',icon:'&#xe639;'},
                {href:'/CateList',title:'分类',icon:'&#xe612;'},
                {href:'/Shopping',title:'值得买',icon:'&#xe690;'},
                {href:'/Cart',title:'购物车',icon:'&#xe680;'},
                {href:'/User',title:'个人',icon:'&#xe617;'}
            ]
        }
    },
    

}
</script>

<style scpoed>
    /* 底层导航栏 */
    .footerNav{
        width: 100vw;
        height: .5rem;
        box-sizing: border-box;
        background: #fff;
        border-top: 1px solid #d9d9d9;
        position: fixed;
        bottom: 0;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .footerNav a{
        text-align: center;
    }
    .footerNav a span{
        display: block;
        font-size: .06rem;
    }
    .footerNav a span.iconfont{
        font-size: .09rem;
    }
    .footerNav a.active{
        color: var(--c1);
    }
    .router-link-active{
        color: var(--c1);

    }

</style>>

