<template>
  <div>
      <p class="footerdownload_title">下载QQ音乐客户端</p>

      <ul>
        <li v-for="(p,index) in downlist" :key="index">
            <div class="footerdownload_li">
                <img class="footer_img" :src="p.url">
                <p>{{p.name}}</p>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
import con1 from "../assets/windows.png";
import con2 from "../assets/mac.png";
import con3 from "../assets/android.png";
import con4 from "../assets/apple.png";

export default {
    name:'Footerdownload',
    data() {
        return {
            downlist:[
                {id:'001',name:'PC版',url:con1},
                {id:'002',name:'Mac版',url:con2},
                {id:'003',name:'Android版',url:con3},
                {id:'004',name:'iPhone版',url:con4}
            ]
        }
    },
}
</script>

<style>
.footerdownload_title{
    padding-left: 40px;
}
.footerdownload_li{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    font-size: 10px;
}
.footer_img{
    padding-top: 20px;
    height: 50px;
    width: 50px;
}
ul {
    list-style:none;
}
li{
    float: left;
    height: 70px;
    width: 70px;
}
</style>