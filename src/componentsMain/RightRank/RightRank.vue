<template>
    <div class="RightRank">
        <div class="Ranktitle">2022年我国城市AQI排名</div>
        <div class="RankChart"><dv-scroll-board :config="RankTime" style="width: 100%;height:120px;" /></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            RankTime:{
                data: [
                ['西藏自治区', '拉萨市', '排名1'],
                ['海南省', '海口市', '排名2'],
                ['广东省', '深圳市', '排名3'],
                ['黑龙江省', '鹤岗市', '排名4'],
                ['广东省', '汕头市', '排名5'],
                ['福建省', '厦门市', '排名6'],
                ['云南省', '昆明市', '排名7'],
                ['福建省', '福州市', '排名8'],
                ['贵州省', '贵阳市', '排名9'],
                ['黑龙江省', '齐齐哈尔市', '排名10']
            ],
            rowNum:3
            }
        }
    },
    mounted() {
        
    },
    methods: {

    }

}
</script>


<style>
.RightRank {
    position: absolute;
    top: 340px;
    right: 10px;
    width: 380px;
    height: 160px;
    background-color: #0f142a;
    border-radius: 6%;
}

.Ranktitle {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    color: #74828b;

}

.RankChart {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 160px;
}
</style>