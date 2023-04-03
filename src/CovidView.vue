<template>
    <div id="app">
   <MainView></MainView>
   <LeftRankView></LeftRankView>
   <PieChartView></PieChartView>
   <PeoInfChart></PeoInfChart>
   <TrendChart></TrendChart>
   <RankRight></RankRight>
   <ChinaMap></ChinaMap>
    </div>
  </template>
  
  <script>
  import MainView from './componentsCovid/HeaderView.vue/MainView.vue'; 
  import LeftRankView from './componentsCovid/LeftRankView.vue/LeftRankView.vue';
  import PieChartView from './componentsCovid/PieChartView/PieChartView.vue';
  import PeoInfChart from './componentsCovid/PeoInfcCharts/PeoInfCharts.vue';
  import TrendChart from './componentsCovid/Trendchart/trendChart.vue';
  import RankRight from './componentsCovid/RankRight/RankRight.vue';
  import ChinaMap from './componentsCovid/ChinaMap/ChinaMap.vue';
  export default {
    name: 'CovidView',
    components: {
      MainView,
      LeftRankView,
      PieChartView,
      PeoInfChart,
      TrendChart,
      RankRight,
      ChinaMap
    }
  }
  </script>
  
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    background-color: black;
    padding-bottom: 10px;
    height: 100%;
  }
  
  </style>
  