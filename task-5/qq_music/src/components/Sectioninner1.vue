<template>
    <div class="content1">
        <div class="qqmusic_title"><a aria-current="page" href="/"><img src="//y.qq.com/mediastyle/yqq/img/logo.png" alt="QQ音乐" class="qqmusic_logo"></a></div>

        <div class="nav">
            <p class="nav_item1">音乐馆</p>
            <p class="nav_item1">我的音乐</p>
            <p class="nav_item1">客户端</p>
            <p class="nav_item1">开放平台</p>
            <p class="nav_item1">VIP</p>
        </div>

        <div class="select"><input class="sec" placeholder="搜索音乐，歌单，MV，用户"></div>

        <div class="func">
            <p class="login">登录</p>
            <p class="vip">开通VIP</p>
            <p class="money">充值</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.content1{
    display: inline;
    display: flex;
    flex-direction: row;
    padding-inline: 135px;
}
.qqmusic_title{
    flex:2;
    text-align: center;
    margin-top: 20px;
}
.nav{
    flex:4;
    display: flex;
    flex-direction: row;
    height: 80px;
}
.nav_item1{
    flex: 1;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
.select{
    flex: 2;
    text-align: center;
    line-height: 80px;
}
.sec{
    height: 40px;
    border: 1px solid #c9c9c9;
    width: 100%;
    text-align: center;
}
.func{
    flex: 3;
    display: flex;
    flex-direction: row;
    height: 80px;
    text-align: center;
    line-height: 80px;
    padding-inline: 40px;
}
.login{
    flex: 1;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
.vip{
    flex: 3;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
.money{
    flex: 2;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
</style>