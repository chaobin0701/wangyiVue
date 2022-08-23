<template>
    <router-link :to="href">
           <span class="iconfont">{{'&#xe639;'}}</span>
        <span>{{title}}</span>
    </router-link>
</template>

<script>
export default {
    name:'NavItem',
    props:['navMessage'],
    data(){
        return{
            href:'',
            title:'',
            icon:''
        }
    },
    created(){
        let {href,title,icon} = this.navMessage
        this.href = href
        this.title = title
        this.icon = icon
    }

}
</script>

<style>

</style>