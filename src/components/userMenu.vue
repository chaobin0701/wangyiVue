<template>
    <!-- 底部row -->
    <div class="m-uMenu">
        <ul class="list">
            <li class="item" v-for="(item,index) in userServe" :key="index">
                <a href="#" class="m-uMenuItem">
                    <i class="img u-icon" :class="item.iconClass"></i>
                    <span class="txt">{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'userMenu',
    data(){
        return{
            userServe:[
                {title:'我的订单',iconClass:'u-icon-ulist'},
                {title:'账号管理',iconClass:'u-icon-uidmanage'},
                {title:'我的手机号',iconClass:'u-icon-umyphone'},
                {title:'周六一起拼',iconClass:'u-icon-upin'},
                {title:'售后服务',iconClass:'u-icon-uaftersale'},
                {title:'邀请返利',iconClass:'u-icon-ulead'},
                {title:'优先购',iconClass:'u-icon-upreemption'},
                {title:'积分中心',iconClass:'u-icon-upoints'},
                {title:'会员俱乐部',iconClass:'u-icon-umembershipBenefits'},
                {title:'地址管理',iconClass:'u-icon-uaddress'},
                {title:'支付安全',iconClass:'u-icon-usecurity'},
                {title:'帮助与客服',iconClass:'u-icon-uhelp-kefu'},
                {title:'意见反馈',iconClass:'u-icon-ufeedback'},
                {title:'我的竞拍',iconClass:'u-icon-auction'},
            ]
        }
    }
}
</script>

<style scoped>


/* <!-- 底部row --> */
.m-uMenu{
    box-sizing: border-box;
    width: 100%;
    height: 4.54rem;
    margin-bottom: .15rem;
    background-color: #fff;
}
.m-uMenu .list{
    height: 4.54rem;
}
.m-uMenu .list .item{
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    height: .9rem;
    border-right: 1px solid rgba(0, 0, 0, .15);
    border-bottom: 1px solid rgba(0, 0, 0, .15);
   
}
.m-uMenu .list .item:nth-child(3n){
    border-right:none
}
.m-uMenu .list .item:nth-child(n + 13){
    border-bottom: none;
}
.m-uMenu .list .item .m-uMenuItem{
    padding-top: .225rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.m-uMenu .list .item .m-uMenuItem .txt{

}

/* 底部row 图标处理 */
.m-uMenuItem .u-icon{
    width: .25rem;
    height: .25rem;
    margin-bottom: .08rem;
    background-size: .42rem;
}
.m-uMenuItem .u-icon-ulist{
    /* 订单 */
    background-position: 0 -5.32rem;

}
.m-uMenuItem .u-icon-uidmanage{
    /* 账号管理 */
    background-position: 0 -4.41rem;
}
.m-uMenuItem .u-icon-umyphone{
    /* 我的手机号 */
    background-position: 0 -5.86rem;
}
.m-uMenuItem .u-icon-upin{
    /* 周六一起拼 */
    background-position: 0 -6.14rem;
}
.m-uMenuItem .u-icon-uaftersale{
    /* 售后服务 */
    background-position: 0 -2.62rem;
}
.m-uMenuItem .u-icon-ulead{
    /* 邀请返利 */
    background-position: 0 -5rem;
}
.m-uMenuItem .u-icon-upreemption{
    /* 优先购 */
    background-position: 0 -6.75rem;
}
.m-uMenuItem .u-icon-upoints{
    /* 积分中心 */
    background-position: 0 -6.45rem;
}
.m-uMenuItem .u-icon-umembershipBenefits{
    /* 会员俱乐部 */
    background-position: 0 -5.6rem;
}
.m-uMenuItem .u-icon-uaddress{
    /* 地址管理 */
    background-position: 0 -2.32rem;
}
.m-uMenuItem .u-icon-usecurity{
    /* 支付安全 */
    background-position: 0 -7.34rem;
}
.m-uMenuItem .u-icon-uhelp-kefu{
    /* 帮助与客服 */
    background-position: 0 -3.83rem;
}
.m-uMenuItem .u-icon-ufeedback{
    /* 意见反馈 */
    background-position: 0 -3.22rem;
}
.m-uMenuItem .u-icon-auction{
    /* 我的竞拍 */
    background-position: -.05rem -0.48rem;
}
</style>