<template>
    <div id="wrap">
        <!-- 搜索区域 -->
        <div class="header">
            <div class="head">
                <div class="searchWrap">
                    <input class="search" placeholder="三同好物"></input>
                </div>
                <p class="text" @click="goBack">取消</p>
            </div>
           

        <!-- 热门搜索 -->
        <div class="hotSearch">
            <p>热门搜索</p>
            <ul class="navList">
                <li class="active">中秋节</li>
                <li class="active">咖啡</li>
                <li>iphone12</li>
                <li>枕头</li>
                <li>湿巾</li>
                <li>口罩</li>
                <li>袜子</li>
                <li>四件套</li>
                <li>纸</li>
                <li>茶</li>
                <li>锅</li>
                <li>纸巾</li>
            </ul>
      </div>
        </div>    
          <!-- shadow --> 
          <div class="shadow">
            
        </div>  
    </div>
</template>

<script>
export default {
    name:'Search',
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
#wrap{
    background: #fff;
}
#wrap .header{
    box-sizing: border-box;
    width: 100vw;
    height: 2.27rem;
}
#wrap .header .head{
    box-sizing: border-box;
    padding: 0 0.15rem;
    width: 3.75rem;
    height: 0.44rem;

    display: flex;
    align-items: center;
}
.header .head .searchWrap{
    display: flex;
    border-radius: .05rem;
    background:rgba(244, 244, 244); 
    height: 0.28rem;
    align-items: center;
}
#wrap .header .searchWrap:before{
    content: " ";
    width: .14rem;
    height: .14rem;
    margin-left: .08rem;
    background-image: url(../assets/images/search.png);
    background-size: .14rem .14rem;
}
#wrap .header .search{
    box-sizing: border-box;
    align-items: center;
    width: 2.8rem;
    height: 0.28rem;
    padding: 0 .1rem;
    background:rgba(244, 244, 244); 
    font-size: .14rem;
    color: rgba(0, 0, 0, .3);
    border: none;
}

#wrap .header .search span{
    font-size: .14rem;
    margin-right: .1rem;
}   
#wrap .header .head .text{
    font-size: 0.14rem;
    margin-left: 0.08rem;
    
}

/* 热门搜索 */
.hotSearch{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 1.83rem;
    padding: 0 .15rem .15rem .15rem;
    margin-bottom: .1rem;
}
.hotSearch p{
    color: #999;
    font-size: .14rem;
    margin-top: .15rem;
}
.hotSearch .navList{
    margin-top: .15rem;
}
.hotSearch .navList li {
    float: left;

    padding: 0 .08rem;
    margin-right: .16rem;
    margin-bottom: .16rem;
    line-height: .23rem;

    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
    font-size: .12rem;
}
.hotSearch .navList li.active{
    border: 1px solid var(--c1);
    color: var(--c1);
}
</style>