<template>
    <div class="PeochartMain">
        <div class="Peotitle">近七年三大病患病数据</div>
        <div class="ProchartsMap" ref="chart"></div>
    </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
    data() {
        return {
            chartData:{}
        }
    },
    mounted() {
        this.initChart();//绘制图表
        axios.post('http://localhost:8081/threeDisease',{
            params:{
                year:this.xAxis[0].data
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
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
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['心脏病', '高血压', '肺病'],
                    textStyle:{
                        color:"#CCC"
                    }

                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '心脏病',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [29325, 29732, 30786, 31870, 32187, 32641, 33816]
                    },
                    {
                        name: '高血压',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [20125, 20891,21073, 21892, 22963, 23074,24512]
                    },
                    {
                        name: '肺病',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [47936,48170,49276, 50126,51287, 52107,53121]
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
.PeochartMain {
    position: absolute;
    top: 90px;
    right: 10px;
    width: 380px;
    height: 220px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Peotitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;

}

.ProchartsMap {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 180px;
}
</style>