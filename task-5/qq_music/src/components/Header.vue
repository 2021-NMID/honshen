<template>
  <div class="con">
    <Sectioninner1 class="sec1"></Sectioninner1>
    <Sectioninner2 class="sec2"></Sectioninner2>
  </div>
</template>

<script>
import Sectioninner1 from './Sectioninner1.vue'
import Sectioninner2 from './Sectioninner2.vue'

export default {
    name:'Header',
    components:{
        Sectioninner1,
        Sectioninner2
    }
}
</script>

<style>
.con{
    background-color: #fff;
}
.sec1{
    display: flex;
    flex-direction: row;
    height: 80px;
}
.sec2{
    display: flex;
    flex-direction: row;
    height: 40px;
}
</style>