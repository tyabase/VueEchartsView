<template>
    <div class="Peochart">
        <div class="Peotitle">主要城市空气污染物含量雷达图</div>
        <div class="Procharts" ref="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from "axios";
export default {
    data() {
        return {
            myChart:null,//echarts实例
            chartData1:null,//第三方api返回的数据
            chartData2:null
        }
    },
    mounted() {
        this.myChart  = echarts.init(this.$refs.chart);
        axios.get('https://apis.tianapi.com/aqi/index?key=efd2ef207db9ab5aea07c484a8fae2ce&area=上海')
        .then(response => {
            console.log(response.data);
            //解析数据
            this.chartData1 = response.data;
            //渲染图表
            this.renderChart();
        });
        axios.get('https://apis.tianapi.com/aqi/index?key=efd2ef207db9ab5aea07c484a8fae2ce&area=北京')
        .then(response => {
            console.log(response.data);
            //解析数据
            this.chartData2 = response.data;
            //渲染图表
            this.renderChart();
        });
    },
    methods: {
        renderChart() {
            // 基于准备好的dom，初始化echarts实例

            // 指定图表的配置项和数据
            var option = {
                title: {
                },
                legend: {
                    top:'4%',
                    left: 'left',
                    data: ['上海', '北京'],
                    textStyle:{
                        color:"#CCC"
                    }
                },
                radar: {
                    center:[190,106],
                    // shape: 'circle',
                    indicator: [
                        { name: 'SO2', max: 200 },
                        { name: 'NO2', max: 200 },
                        { name: 'O3', max: 200 },
                        { name: 'PM2.5', max: 200 },
                        { name: 'PM10', max: 200 },
                        { name: 'CO', max: 200 }
                    ]
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [this.chartData1.result.so2, this.chartData1.result.no2, this.chartData1.result.o3, this.chartData1.result.so2, this.chartData1.result.pm2_5, this.chartData1.result.pm10],
                                name: '上海'
                            },
                            {
                                value: [this.chartData2.result.so2, this.chartData2.result.no2, this.chartData2.result.o3, this.chartData2.result.so2, this.chartData2.result.pm2_5, this.chartData2.result.pm10],
                                name: '北京'
                            }
                        ]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);
        }

    }

}
</script>


<style>
.Peochart {
    position: absolute;
    top: 90px;
    right: 10px;
    width: 380px;
    height: 240px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Peotitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    color:#74828b;

}

.Procharts {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 210px;
}
</style>