<template>
    <div class="Peochart">
        <div class="Peotitle">各类感染人数占比</div>
        <div class="Procharts" ref="chart"></div>
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
                    top: '2%',
                    left: 'center',
                    textStyle:{
                        color:"#CCC"
                    }
                },
                series: [
                    {
                        name: '年龄层',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 6.5, name: '0-20' },
                            { value: 37.2, name: '20-40' },
                            { value: 41.0, name: '40-60' },
                            { value: 13.8, name: '60-80' },
                            { value: 1.5, name: '80-100' }
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
.Peochart {
    position: absolute;
    top: 110px;
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
    color: #ccc;

}

.Procharts {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 140px;
}
</style>