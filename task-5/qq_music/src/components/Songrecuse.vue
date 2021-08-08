<template>
  <!-- <div class="al">
    <ul class="songrecuse">
        <li class="songrecuse_li" v-for="(s,index1) in songlist" :key="index1">
            <ul class="songrecuse_li_item">
                <li class="songrecuse_li_item_li" v-for="(ss,index2) in s" :key="index2">
                    <img class="songrecuse_img" :src="ss.url">
                    <p>{{ss.title}}</p>
                    <p>播放量：{{ss.bofangliang}}</p>
                </li>
            </ul>
        </li>
    </ul>
  </div> -->
  <div class="al">
      <p class="songrecuse_title">歌单推荐</p>
      <div class="songrecuse_nav">
          
      </div>
      <div>
          <img class="left_button" :src="img_lf" @click="previous">
          <img class="right_button" :src="img_ri" @click="next">
      </div>
      <ul class="songrecuse">
          <li class="songrecuse_li" v-for="(s,index) in songlist[curindex]" :key="index">
            <img class="songrecuse_img" :src="s.url">
            <p>{{s.title}}</p>
            <p>播放量：{{s.bofangliang}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import con from '../assets/600.png'
import right from '../assets/上下左右Triangle1 (2).png'
import left from '../assets/上下左右Triangle1 (4).png'

export default {
    name:'Songrecuse',
    data() {
        return {
            curindex:0,
            img_lf:left,
            img_ri:right,
            songlist:[
                [
                    {id:'001',title:'XXXXXX',bofangliang:'123万',url:con},
                    {id:'002',title:'XXXXXX',bofangliang:'3万',url:con},
                    {id:'003',title:'XXXXXX',bofangliang:'13万',url:con},
                    {id:'004',title:'XXXXXX',bofangliang:'753万',url:con},
                    {id:'005',title:'XXXXXX',bofangliang:'77.3万',url:con},
                ],
                [
                    {id:'006',title:'XXXXXX',bofangliang:'19.6万',url:con},
                    {id:'007',title:'XXXXXX',bofangliang:'5万',url:con},
                    {id:'008',title:'XXXXXX',bofangliang:'6万',url:con},
                    {id:'009',title:'XXXXXX',bofangliang:'7万',url:con},
                    {id:'010',title:'XXXXXX',bofangliang:'123万',url:con},
                ],
                [
                    {id:'011',title:'XXXXXX',bofangliang:'1323万',url:con},
                    {id:'012',title:'XXXXXX',bofangliang:'199万',url:con},
                    {id:'013',title:'XXXXXX',bofangliang:'1500万',url:con},
                ]
            ],
        }
    },
    methods: {
        previous(){
            this.curindex--
            if(this.curindex==-1){
                this.curindex=2
            }
        },
        next(){
            this.curindex++
            if(this.curindex==3){
                this.curindex=0
            }
        }
    },
}
</script>

<style>
.al{
    width: auto;
}
.songrecuse_title{
    text-align: center;
    margin-left: 100px;
    font-size: 40px;
}
.songrecuse{
    list-style: none;
    margin-left: 50px;
}
.songrecuse_li{
    text-align: center;
    float: left;
    display: inline;
    list-style-type: none;
    margin: 90px;
}
.songrecuse_img{
    width: 180px;
    height: 180px;
}
.left_button{
    width: 40px;
    height: 40px;
    float: left;
    margin-top: 170px;
}
.right_button{
    width: 40px;
    height: 40px;
    float: right;
    margin-top: 170px;
}
</style>