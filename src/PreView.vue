<template>
  <div class="app">
    <Main></Main>
    <LeftRank></LeftRank>
    <BarChart></BarChart>
    <RightBar></RightBar>
    <RightMiddle></RightMiddle>
    <RightDown></RightDown>
    <MiddleMap></MiddleMap>
  </div>
</template>
    
<script>
import Main from './componentsDisease/Main/Main.vue';
import LeftRank from './componentsDisease/Main/LeftRank/LeftRank.vue'
import BarChart from './componentsDisease/Main/LeftDown/BarChart.vue'
import RightBar from './componentsDisease/RightBar/RightBar.vue'
import RightMiddle from './componentsDisease/RightMiddle/RightMiddleBar.vue'
import RightDown from './componentsDisease/RightDown/RightDown'
import MiddleMap from './componentsDisease/Main/MiddleMap/MiddleMap.vue'
export default {
  name: 'PreView',
  components: {
    Main,
    LeftRank,
    BarChart,
    RightBar,
    RightMiddle,
    RightDown,
    MiddleMap
  }
}
</script>
    
<style>
* {
  margin: 0;
  padding: 0;
}

.app {
  height: 720px;
  background-color: black;
}

.BMap_cpyCtrl {
  display: none;
}

.anchorBL {
  display: none;
}
</style>
    