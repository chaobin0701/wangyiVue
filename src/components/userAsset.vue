<template>
    <!-- 我的资产 -->
    <div class="m-myAsset">
        <h2 class="tt">我的资产</h2>

        <div class="assetList">
            <div class="assetItem">
                <p class="assetCount">
                    <span class="unit">￥</span>
                    <span class="value">
                        <span>{{asset.userBalance}}</span>
                        <span class="redDot"></span>
                    </span>
                </p>
                <p class="assetName">余额</p>
            </div>
            <div class="assetItem">
                <p class="assetCount">
                    <span class="value">{{asset.hobao}}</span>
                    <div class="redPacketTip">即将过期</div>
                </p>
                <p class="assetName">红包</p> 
            </div>
            <div class="assetItem">
                <p class="assetCount">
                    <span  class="value">{{asset.coupon}}</span>
                </p>
                <p class="assetName">优惠券</p> 
            </div>
            <div class="assetItem">
                <p class="assetCount">
                    <span  class="value">
                        <span class="unit">￥</span>
                        <span>{{asset.subsidy}}</span>
                    </span>
                </p>
                <p class="assetName">津贴</p> 
            </div>
            <div class="assetItem">
                <p class="assetCount">
                    <span class="value">{{asset.giftCard}}</span>
                </p>
                <p class="assetName">礼品卡</p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'userAsset',
    data(){
        return{
            asset:{
                userBalance:'0',
                hobao:'2',
                coupon:'5',
                subsidy:'100',
                giftCard:'0'
            }
        }
    }
}
</script>

<style scoped>
.u-icon{
    background: url(../assets/images/user-icon.png) no-repeat;
}
/* 我的资产 m-myAsset */
.m-myAsset{
    box-sizing: border-box;
    width: 100%;
    height: 1.43rem;
    background-color: #fff;
    border-bottom: .1rem solid #F4F4F4;
}
.m-myAsset .tt{
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    height: .53rem;
    color: #333;
    border-bottom: .01rem solid #D9D9D9;
    padding-left: .15rem;
    line-height: .53rem;
    font-weight: 500;
    font-size: .14rem;
}

.m-myAsset .assetList{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .8rem;
}
.assetList .assetItem{
    display: flex;
    width: 20%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.assetList .assetCount{
    position: relative;
}
.assetList .redPacketTip{
    width: .55rem;
    height: .14rem;
    position: absolute;
    padding-left: .02rem;
    padding-right: .02rem;
    line-height: .14rem;
    font-size: .09rem;
    color: #FFF;
    background: linear-gradient(
    270deg,#FF8462 0,#F74134 100%);
    top: .1rem;
    left: 1.18rem;
    border-radius: .06rem .06rem .06rem 0;
}
.assetList .unit{
    font-weight: bold;
    margin-right: .02rem;
    font-size: .12rem;
    line-height: .18rem;
}
.assetList .value{
    line-height: .18rem;
    font-weight: bold;
    font-size: .16rem;
}
.assetList .value .redDot{
    position: absolute;
    display: block;
    top: 0rem;
    left: .47rem;
    width: .07rem;
    height: .07rem;
    border-radius: 50%;
    background-color: red;
}
</style>