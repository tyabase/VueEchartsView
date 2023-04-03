<template>
    <div class="box">
        <div class="titleDown">空气污染原因分类</div>
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
                title: {
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top:'-2.2%',
                    orient: 'horizontal',
                    left: 'left',
                    textStyle:{
                        color:"#CCC"
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 25, name: '工业' },
                            { value: 15, name: '生活炉灶' },
                            { value: 20, name: '采暖锅炉' },
                            { value: 25, name: '交通运输' },
                            { value: 15, name: '火灾' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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