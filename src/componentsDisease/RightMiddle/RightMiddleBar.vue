<template>
    <div class="PeoBar">
        <div class="Peotitle">膳食营养图</div>
        <div class="Procharts1" ref="chart"></div>
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
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    feature: {
                    }
                },
                legend: {
                    data: ['谷类', '水果', '肉类', '奶、豆类', '油与盐'],
                    textStyle:{
                        color:"#CCC"
                    }
                },
                series: [
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        left: '10%',
                        top: 30,
                        bottom: 50,
                        width: '80%',
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            { value: 60, name: '肉类' },
                            { value: 40, name: '奶、豆类' },
                            { value: 20, name: '油与盐' },
                            { value: 80, name: '水果' },
                            { value: 100, name: '谷类' }
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
.PeoBar {
    position: absolute;
    top: 320px;
    right: 10px;
    width: 380px;
    height: 190px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Peotitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    color: aliceblue;

}

.Procharts1 {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 200px;
}
</style>