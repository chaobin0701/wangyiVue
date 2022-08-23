<template>
    <div>
        <goodsHeader/>
        <goodsContentTop/>
        <goodsContentBottom/>
    </div>
</template>

<script>
import goodsHeader from '../components/goodsHeader.vue'
import goodsContentTop from '../components/goodsContent_Top.vue'
import goodsContentBottom from '../components/goodsContent_Bottom.vue'
export default {
    name:'shopping',
    components:{goodsHeader,goodsContentTop,goodsContentBottom}
}
</script>

<style>

</style>