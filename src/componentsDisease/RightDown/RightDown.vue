<template>
    <div class="PeoDown">
        <div class="Peotitle">我国人民平均寿命趋势分析图</div>
        <div class="Procharts" ref="chart" style="height: 180px;"></div>
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                    }
                },
                legend: {
                    data: ['男', '女', '平均'],
                    textStyle:{
                        color:"#CCC"
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '年龄',
                        min: 0,
                        max: 150,
                        interval: 30,
                        axisLabel: {
                            formatter: '{value} 岁'
                        }
                    }
                ],
                series: [
                    {
                        name: '男',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 岁';
                            }
                        },
                        data: [
                            74.1, 74.3, 74.5, 74.8, 74.7,75.1, 75.8]
                    },
                    {
                        name: '女',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 岁';
                            }
                        },
                        data: [
                            78.8, 79.1, 79.2, 79.4, 80.8 ,80.5 , 80.6]
                    },
                    {
                        name: '平均',
                        type: 'line',
                        yAxisIndex: 1,
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 岁';
                            }
                        },
                        data:[
                            76.5, 76.7, 76.9, 77.1, 77.4 ,77.8 ,78.2]
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
.PeoDown {
    position: absolute;
    top: 520px;
    right: 10px;
    width: 380px;
    height: 180px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Peotitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    color: aliceblue;

}

.Procharts {
    width: 98%;
}
</style>