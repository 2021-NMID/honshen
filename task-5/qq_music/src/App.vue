<template>
  <div id="app">
    <Header></Header>
    <Songrec></Songrec>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Songrec from './components/Songrec.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Songrec
  }
}
</script>

<style>
#app, body, html{
  height: 100%;
}
body{
  min-width: 1000px;
  overflow-y: scroll;
  background-color: #fafafa;
}
p{
  white-space:nowrap;
}
</style>
