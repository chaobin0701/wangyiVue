<template>
    <ul class="home-nav-list-item">
        <li v-for="(msg,index) in navListMsg" :key="index">
            <a href="#">
                <img :src="msg.src">
                <span>{{msg.title}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name:'home-nav-list-item',
    props:['navListMsg']
}
</script>

<style scoped>
.home-nav-list-item li{
    display: inline-block;
    margin: .05rem .09rem;
}
.home-nav-list-item li a{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.home-nav-list-item li img{
    width: 0.55rem;
    margin-bottom: .05rem;
}
</style>