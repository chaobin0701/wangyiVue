<template>
    <div id="home">
        <homeHeader/>
        <homeBanner/>
        <homeNav/>
        <homeNewUser/>
        <homeHot/>
        <homeGuide/>
        <homeFoot/>
   </div>
</template>

<script>
import homeHeader from '../components/homeHeader.vue'
import homeBanner from '../components/homeBanner.vue'
import homeNav from '../components/homeNav.vue'
import homeNewUser from '../components/homeNewUser.vue'
import homeHot from '../components/homeHot.vue'
import homeGuide from '../components/homeGuide.vue'
import homeFoot from '../components/homeFoot.vue'

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    name:'home',
    components:{homeHeader,homeBanner,homeNav,
    homeNewUser,homeHot,homeGuide,homeFoot}
}
</script>

<style scoped>
    #home{

    }
</style>