<template>
  <div class="songrec_content">
      <Songrecuse></Songrecuse>
  </div>
</template>

<script>
import Songrecuse from './Songrecuse.vue'
export default {
    name:'Songrec',
    components:{
        Songrecuse
    }
}
</script>

<style>
.songrec_content{
    height: 500px;
}
</style>