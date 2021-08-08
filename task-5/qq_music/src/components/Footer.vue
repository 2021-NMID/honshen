<template>
  <div class="content">
    <div class="footer_top">
      <div class="footerarea">
        <Footerdownload></Footerdownload>
      </div>

      <div class="footerarea">
        <Footerproduct></Footerproduct>
      </div>

      <div class="footerarea">
        <Footerlink></Footerlink>
      </div>
    </div>

    <div class="footer-mid">
      <div>开放平台 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TME集团官网</div>
      <div class="footer-mid-bt">QQ音乐开放平台 &nbsp;&nbsp;&nbsp; 腾讯音乐人  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;腾讯音乐</div>
    </div>
  </div>
</template>

<script>
import Footerdownload from './Footerdownload.vue'
import Footerproduct from './Footerproduct.vue'
import Footerlink from './Footerlink.vue'

export default {
  name:'Footer',
  components:{
    Footerdownload,
    Footerproduct,
    Footerlink
  }
}
</script>

<style>
.footer-mid-bt{
  padding-top: 30px;
}
.footer-mid{
  padding-left: 40px;
}
.content{
  padding-inline: 135px;
  background-color: #333;
  display: inline;
  display: flex;
  flex-direction: column;
  height: 500px;
  color: #999
}
.footer_top{
  display: inline;
  display: flex;
  flex-direction: row;
  height: 200px;
}
.footerarea{
  flex: 1;
  height: 200px;
}
</style>