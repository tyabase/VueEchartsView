<template>
    <div class="box">
        <div class="titleAqi">我国城市月空气质量综合指数排名模块</div>
        <div class="chartRank"><dv-capsule-chart :config="AqiBox" style="width:100%;height:100%" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            AqiBox: {
                data: [
                    {
                        name: '1、舟山',
                        value: 2.33
                    },
                    {
                        name: '2、拉萨',
                        value: 2.38
                    },
                    {
                        name: '3、惠州',
                        value: 2.78
                    },
                    {
                        name: '4、深圳',
                        value: 2.85
                    },
                    {
                        name: '5、丽水',
                        value: 2.93
                    },
                    {
                        name: '6、台州',
                        value: 2.96
                    },
                    {
                        name: '7、盐城',
                        value: 3.00
                    },
                    {
                        name: '8、上海',
                        value: 3.08
                    },
                    {
                        name: '9、中山',
                        value: 3.35
                    },
                    {
                        name: '10、厦门',
                        value: 3.37
                    },
                ],
                colors: ['#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe','#1c8efe'],
                unit: '空气综合指数',
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
    background-color: #0f142a;
}
.titleAqi{
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