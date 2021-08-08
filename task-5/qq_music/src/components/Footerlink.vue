<template>
  <div>
      <p class="footerlink_title">合作链接</p>

      <ul class="footerlink_ul">
        <li class="zxc_li" v-for="(p,index) in downlist" :key="index">
            <div class="footerlink_li">
                <p>{{p.name}}</p>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
    name:'Footerlink',
    data() {
        return {
            downlist:[
                {id:'001',name:'CJ ENM'},
                {id:'002',name:'腾讯视频'},
                {id:'003',name:'手机QQ空间'},
                {id:'004',name:'最新版QQ'},
                {id:'005',name:'腾讯社交广告'},
                {id:'006',name:'电脑管家'},
                {id:'007',name:'QQ浏览器'},
                {id:'008',name:'腾讯微云'},
                {id:'009',name:'腾讯云'},
                {id:'010',name:'企鹅FM'},
                {id:'011',name:'智能电视网'},
                {id:'012',name:'当贝市场'},
            ]
        }
    },
}
</script>

<style>
.footerlink_title{
    padding-left: 40px;
}
.footerlink_ul{
    width: 180px;
}
.zxc_li{
    height: 30px;
}
.footerlink_li{
    text-align: left;
    display: table-cell;
    vertical-align: middle;
    font-size: 10px;
    float: left;
    width: 100px;
}
.footer_img{
    padding-top: 20px;
    height: 50px;
    width: 50px;
}

</style>