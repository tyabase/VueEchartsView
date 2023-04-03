<template>
    <div class="box">
        <div class="titleDown">主要疾病占比图（50%）</div>
        <div class="chartRank" ref="chart"></div>
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
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    // doesn't perfectly work with our tricks, disable it
                    selectedMode: false,
                    textStyle:{
                        color:"#CCC"
                    }
                },
                series: [
                    {
                        name: '患病占比(%)',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                            show: false,
                            formatter(param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent * 2 + '%)';
                            }
                        },
                        data: [
                            { value: 42.8, name: '肺病' },
                            { value: 27.2, name: '心脏病' },
                            { value: 19.7, name: '高血压' },
                            { value: 7.4, name: '糖尿病' },
                            { value: 1.2, name: '痴呆症' },
                            {
                                // make an record to fill the bottom 50%
                                value: 100,
                                itemStyle: {
                                    // stop the chart from rendering this piece
                                    color: 'none',
                                    decal: {
                                        symbol: 'none'
                                    }
                                },
                                label: {
                                    show: false
                                }
                            }
                        ]
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
.box {
    margin: 12px;
    width: 300px;
    height: 298px;
    border-radius: 5%;
    background-color: #0f142a;
}

.titleDown {
    padding-top: 5px;
    padding-left: 12px;
    height: 30px;
    width: 100%;
    color: #74828b;
    font-size: 16px;
}

.chartRank {
    margin: 5px;
    height: 250px;
}
</style>