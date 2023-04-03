<template>
  <div id="app">
   <!-- <ShowView></ShowView>-->
    <router-view/>
    <el-button class="home" type="primary" @click="gohome()" icon="el-icon-s-home" circle></el-button>
    <el-button class="button1" type="primary" @click="jump1()">疫情总结</el-button>
    <el-button class="button2" type="primary" @click="jump2()">高发疾病</el-button>
    <el-button class="button3" type="primary" @click="jump3()">空气质量</el-button>
  </div>
</template>

<script>
//import ShowView from './componentsMain/ShowView.vue';
export default {
  name: 'App',
  components: {
   // ShowView,
  },
  methods: {
        gohome(){
            this.$router.push('/')
        },
        jump1(){
            this.$router.push('/covidview')
        },
        jump2(){
            this.$router.push('/preview')
        },
        jump3(){
            this.$router.push('/showview')
        },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  height: 100%;
  width: 100%;
}

.home{
  position: absolute;
  top: 20px;
  left: 20px;
}
.button1{
  position: absolute;
  top: 20px;
  left: 60px;
}
.button2{
  position: absolute;
  top: 20px;
  left: 170px;
}
.button3{
  position: absolute;
  top: 20px;
  left: 280px;
}
</style>
