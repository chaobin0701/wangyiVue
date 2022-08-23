<template>
    <div class="cateList">
        <!-- 商品列表界面 -->
        <sortSearch/>
        <sortContent/>
    </div>
</template>

<script>
import sortSearch from '../components/sortSearch.vue'
import sortContent from '../components/sortContent.vue'
export default {
    name:'CateList',
    components:{sortSearch,sortContent}
}
</script>

<style>
    .cateList{
        /* position: relative; */
    }
</style>