<template>
    <div class="app2">
    <TitleView></TitleView>
    <AqiRank></AqiRank>
    <CauseAnalysis></CauseAnalysis>
    <RightAqi></RightAqi>
    <RightRank></RightRank>
    <LineChart></LineChart>
    <ChinaMap></ChinaMap>
    </div>
</template>

<script>
import TitleView from './TitleView/TitleView.vue'
import AqiRank from './RankAqi/RankAqi.vue'
import CauseAnalysis from './CauseAnalysis/CauseAnalysis.vue'
import RightAqi from './RightAqi/RightAqi.vue'
import RightRank from './RightRank/RightRank.vue'
import LineChart from './LineChart/LineChart.vue'
import ChinaMap from './ChinaAqiMap/China.vue'

// import '../request/request'
export default {
    name: 'App',
    components: {
    TitleView,
    AqiRank,
    CauseAnalysis,
    RightAqi,
    RightRank,
    LineChart,
    ChinaMap
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.app2 {
    height: 740px;
    background-color: black;
}
</style>