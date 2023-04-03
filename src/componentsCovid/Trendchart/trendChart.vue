<template>
    <div class="trendchart">
        <div class="trendTitle">主要城市累计增长幅度</div>
        <div class="trendMap" ref="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.initChart();//绘制图表
    },
    methods: {
        initChart() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.chart);
            // 指定图表的配置项和数据
            var option = {
                title: {
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['北京', '上海'],
                    textStyle:{
                        color:"#CCC"
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2020', '2021', '2022', '2023']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '北京',
                        type: 'line',
                        stack: 'Total',
                        data: [256, 12467, 20234, 28860]
                    },
                    {
                        name: '上海',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 13044, 20345, 65423]
                    },
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

    }

}
</script>

<style>
.trendchart {
    position: absolute;
    top: 340px;
    right: 10px;
    width: 380px;
    height: 180px;
    border-radius: 6%;
    background-color: #0f142a;
}

.trendTitle {
    font-size: 16px;
    margin-top: 5px;
    margin-left: 10px;
    color: #74828b;
}

.trendMap {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 140px;

}
</style>