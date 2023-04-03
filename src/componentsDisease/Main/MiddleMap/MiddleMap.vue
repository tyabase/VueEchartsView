<template>
    <div class="MiddleMain1" ref="dataMap" id="main">

    </div>
</template>

<script>
import { DisMap } from "./MiddleMap";
import * as echarts from "echarts";
// 请确保在引入百度地图扩展之前已经引入百度地图 JS API 脚本并成功加载
// https://api.map.baidu.com/api?v=3.0&ak=你申请的AK
import "echarts/extension/bmap/bmap";
export default {
    data() {
        return {};
    },
    methods: {
        init() {
            var chartDom = document.getElementById("main");
            let myChart = echarts.init(chartDom, 'grayscale');
            var option;


            const data = [
                { name: "上海", value: 77 },
                { name: "福建", value: 67 },
                { name: "广西", value: 40 },
                { name: "广东", value: 61 },
                { name: "山西", value: 46 },
                { name: "云南", value: 44 },
                { name: "海南", value: 49 },
                { name: "辽宁", value: 39 },
                { name: "吉林", value: 41 },
                { name: "江西", value: 52 },
                { name: "内蒙古", value: 44 },
                { name: "四川", value: 54 },
                { name: "陕西", value: 42 },
                { name: "重庆", value: 56 },
                { name: "江苏", value: 70 },
                { name: "贵州", value: 37 },
                { name: "北京", value: 77 },
                { name: "新疆", value: 53 },
                { name: "浙江", value: 76 },
                { name: "山东", value: 56 },
                { name: "天津", value: 62 },
                { name: "河南", value: 46 },
                { name: "黑龙江", value: 37},
                { name: "河北", value: 46 },
                { name: "湖南", value: 47 },
                { name: "安徽", value: 48 },
                { name: "湖北", value: 52 },
                { name: "宁夏", value:58 },
                {name:"西藏", value:35 },
                {name:"甘肃", value:45 },
                {name:"青海", value:47 }
            ];
            const geoCoordMap = {
                西藏: [91.11, 29.97],
                上海: [121.48, 31.22],
                福建: [119.3, 26.08],
                广西: [108.33, 22.84],
                广东: [113.23, 23.16],
                山西: [112.53, 37.87],
                云南: [102.73, 25.04],
                海南: [110.35, 20.02],
                辽宁: [123.38, 41.8],
                吉林: [125.35, 43.88],
                宁夏: [106.27, 38.47],
                江西: [115.89, 28.68],
                内蒙古: [111.65, 40.82],
                四川: [104.06, 30.67],
                河北: [110.479191, 29.117096],
                陕西: [108.95, 34.27],
                重庆: [106.54, 29.59],
                江苏: [118.78, 32.04],
                贵州: [106.71, 26.57],
                北京: [116.46, 39.92],
                新疆: [87.68, 43.77],
                浙江: [120.19, 30.26],
                山东: [117, 36.65],
                天津: [117.2, 39.13],
                河南: [113.65, 34.76],
                黑龙江: [126.63, 45.75],
                河北: [114.48, 38.03],
                湖南: [113, 28.21],
                安徽: [117.27, 31.86],
                湖北: [114.31, 30.52],
                甘肃: [103.73, 36.03],
                青海: [101.74, 36.56],
            };
            const convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };
            option = {
                title: {
                    text: "2017-2021年全国各省份平均健康指数",
                    subtext: "数据来源：人民日报",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                },
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [
                            {
                                featureType: "water",
                                elementType: "all",
                                stylers: {
                                    color: "#d1d1d1",
                                },
                            },
                            {
                                featureType: "land",
                                elementType: "all",
                                stylers: {
                                    color: "#f3f3f3",
                                },
                            },
                            {
                                featureType: "railway",
                                elementType: "all",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "highway",
                                elementType: "all",
                                stylers: {
                                    color: "#fdfdfd",
                                },
                            },
                            {
                                featureType: "highway",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "arterial",
                                elementType: "geometry",
                                stylers: {
                                    color: "#fefefe",
                                },
                            },
                            {
                                featureType: "arterial",
                                elementType: "geometry.fill",
                                stylers: {
                                    color: "#fefefe",
                                },
                            },
                            {
                                featureType: "poi",
                                elementType: "all",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "green",
                                elementType: "all",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "subway",
                                elementType: "all",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "manmade",
                                elementType: "all",
                                stylers: {
                                    color: "#d1d1d1",
                                },
                            },
                            {
                                featureType: "local",
                                elementType: "all",
                                stylers: {
                                    color: "#d1d1d1",
                                },
                            },
                            {
                                featureType: "arterial",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off",
                                },
                            },
                            {
                                featureType: "boundary",
                                elementType: "all",
                                stylers: {
                                    color: "#fefefe",
                                },
                            },
                            {
                                featureType: "building",
                                elementType: "all",
                                stylers: {
                                    color: "#d1d1d1",
                                },
                            },
                            {
                                featureType: "label",
                                elementType: "labels.text.fill",
                                stylers: {
                                    color: "#999999",
                                },
                            },
                        ],
                    },
                },
                series: [
                    {
                        name: "健康指数",
                        type: "scatter",
                        coordinateSystem: "bmap",
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 3;
                        },
                        encode: {
                            value: 2,
                        },
                        label: {
                            formatter: "{b}",
                            position: "right",
                            show: false,
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                        },
                    },
                    {
                        name: "Top 5",
                        type: "effectScatter",
                        coordinateSystem: "bmap",
                        data: convertData(
                            data
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 6)
                        ),
                        symbolSize: function (val) {
                            return val[2] / 3;
                        },
                        encode: {
                            value: 2,
                        },
                        showEffectOn: "render",
                        rippleEffect: {
                            brushType: "stroke",
                        },
                        label: {
                            formatter: "{b}",
                            position: "right",
                            show: true,
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: "#333",
                        },
                        emphasis: {
                            scale: true,
                        },
                        zlevel: 1,
                    },
                ],
            };

            option && myChart.setOption(option);
        },
    },
    mounted() {
        DisMap("b574yOXrrOP81sWqXs4ZZ8019vhDZgth").then(() => {
            this.init();
        });
    },
};
</script>

<style>
.MiddleMain1 {
    position: absolute;
    top: 13%;
    right: 27%;
    height: 600px;
    width: 51%;
}
</style>