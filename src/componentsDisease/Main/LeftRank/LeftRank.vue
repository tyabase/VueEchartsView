<template>
    <div class="box">
        <div class="titleSmall">我国高发疾病排名模块</div>
        <div class="chartRank"><dv-capsule-chart :config="RankBox" style="width:100%;height:100%" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            RankBox: {
                data: [
                {
                        name: '肺病',
                        value: 53121
                    },
                    {
                        name: '心脏病',
                        value: 33816
                    },
                    {
                        name: '高血压',
                        value: 24512
                    },
                    {
                        name: '糖尿病',
                        value: 9240
                    },
                    {
                        name: '痴呆症',
                        value: 1507
                    },
                    {
                        name: '中风',
                        value: 1494
                    },
                    {
                        name: '肺癌',
                        value: 82.8
                    },
                    {
                        name: '胃癌',
                        value: 48
                    },
                    {
                        name: '肝癌',
                        value: 39.9
                    },
                    {
                        name: '食管癌',
                        value: 31
                    },
                ],
                colors: ['#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe'],
                unit: '万人',
                showValue: true
            }
        }
    }
}
</script>

<style>
.box{
    margin: 10px;
    width: 300px;
    height: 304px;
    border-radius: 5%;
}
.titleSmall{
    padding-top: 5px;
    padding-left: 12px;
    height: 30px;
    width: 100%;
    color:#74828b;
    font-size: 16px;
}
.chartRank{
    margin: 5px;
    height:250px;
}
</style>