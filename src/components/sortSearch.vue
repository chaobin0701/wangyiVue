<template>
    <!-- 搜索 -->
    <div class="header">
        <div class="search" @click="toSearch">
            <i class="iconfont"> &#xe70c;</i>
            <span>搜索商品，共{{searchNumber}}款好物</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'sortSearch',
    data(){
        return{
            searchNumber:112236
        }
    },
    methods:{
        toSearch(){
            this.$router.push('./Search')
        }
    }
}
</script>

<style scoped>
.header{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .15rem;
    height: 0.44rem;
    width: 3.75rem;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
}
.header .search{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: .28rem;
    background-color: rgb(237, 237, 237);
    border-radius: .05rem;
}
.header .search span{
    color: #666;
    font-size: .14rem;
}
.header .search .iconfont{
    width: .14rem;
    height: .14rem;
    line-height: .14rem;
    text-align: center;
    font-size: .14rem;
    color: #666;
    margin-right: .05rem;
}
</style>