<template>
    <div class="LineChart">
        <div class="Linetitle">近七年空气主要污染物含量变化趋势图</div>
        <div class="Linecharts" ref="chart"></div>
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
                    data: ['SO2', 'NO2', 'O3', 'PM2.5', 'PM10'],
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
                    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'SO2',
                        type: 'line',
                        stack: 'Total',
                        data: [11, 9, 9, 8, 7, 9, 10]
                    },
                    {
                        name: 'NO2',
                        type: 'line',
                        stack: 'Total',
                        data: [16, 14, 14, 12, 13, 14, 15]
                    },
                    {
                        name: '03',
                        type: 'line',
                        stack: 'Total',
                        data: [27, 26, 25, 25, 24, 26, 28]
                    },
                    {
                        name: 'PM2.5',
                        type: 'line',
                        stack: 'Total',
                        data: [47, 45, 45, 43, 41, 43, 46]
                    },
                    {
                        name: 'PM10',
                        type: 'line',
                        stack: 'Total',
                        data: [55, 53, 51, 49, 48, 50, 52]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

    }

}
</script>


<style>
.LineChart {
    position: absolute;
    top: 510px;
    right: 10px;
    width: 380px;
    height: 180px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Linetitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    color: #74828b;

}

.Linecharts {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 150px;
}
</style>