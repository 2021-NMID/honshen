<template>
  <div>
      <p class="footerproduct_title">合作链接</p>

      <ul>
        <li v-for="(p,index) in produtlist" :key="index">
            <div class="footerproduct_li">
                <img class="footer_img" :src="p.url">
                <p>{{p.name}}</p>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
import con from "../assets/product.png";


export default {
    name:'Footerproduct',
    data() {
        return {
            produtlist:[
                {id:'001',name:'全民K歌',url:con},
                {id:'002',name:'Super',url:con},
                {id:'003',name:'QPlay',url:con},
                {id:'004',name:'直播伴侣',url:con}
            ]
        }
    },
}
</script>

<style>
.footerproduct_title{
    padding-left: 40px;
}
.footerproduct_li{
    font-size: 10px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.footer_img{
    padding-top: 20px;
    height: 540px;
    width: 50px;
}
</style>