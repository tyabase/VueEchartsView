<template>
    <div class="rankBox">
        <div class="titleChange">中国大陆感染累计排名（TOP10)</div>
        <div class="rankCharts"><dv-capsule-chart :config="config4" style="width:100%;height:100%" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config4: {
                data: [
                    {
                        name: '湖北',
                        value: 6.8
                    },
                    {
                        name: '上海',
                        value: 6.5
                    },
                    {
                        name: '广东',
                        value: 6.4
                    },
                    {
                        name: '吉林',
                        value: 4.1
                    },
                    {
                        name: '北京',
                        value: 2.9
                    },
                    {
                        name: '四川',
                        value: 1.2
                    },
                    {
                        name: '海南',
                        value: 1.1
                    },
                    {
                        name: '重庆',
                        value: 1.0
                    },
                    {
                        name: '河南',
                        value: 0.9
                    },
                    {
                        name: '内蒙古',
                        value: 0.8
                    },
                ],
                colors: ['#1c8efe'],
                unit: '万人',
                showValue: true
            }
        }
    }
}
</script>

<style>
.rankBox {
    margin: 12px;
    width: 300px;
    height: 350px;
    background-color: #0f142a;
    border-radius: 6%;
}

.titleChange {
    padding-top: 5px;
    padding-left: 20px;
    font-size: 16px;
    color: #74828b;
}

.rankCharts {
    margin: 6px;
    width: 97%;
    height: 300px;
}
</style>