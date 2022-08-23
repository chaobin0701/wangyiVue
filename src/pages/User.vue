<template>
    <div id="user">
        <userMessage/>
        <userAsset/>
        <userMenu/>
        <userQuit/>
    </div>
</template>

<script>
import userMessage from '../components/userMessage.vue'
import userAsset from '../components/userAsset.vue'
import userMenu from '../components/userMenu.vue'
import userQuit from '../components/userQuit.vue'
export default {
    name:'User',
    components:{
        userMessage,userAsset,userMenu,userQuit
    }
}
</script>

<style>

</style>