<template>
    <div class="Rankright">
        <div class="rankTitle">主要感染省份累计确诊及死亡人数</div>
        <div class="rankMap"><dv-scroll-board :config="config1" style="width:100%;height: 140px;" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config1: {
                data: [
                    ['湖北省', '68861', '4512'],
                    ['上海市', '65423', '595'],
                    ['广东省', '63739', '8'],
                    ['吉林省', '40485', '5'],
                    ['北京市', '28860', '20'],
                    ['四川省', '12023', '5'],
                    ['海南省', '10436', '6'],
                    ['重庆市', '10181', '7']
                ],
                rowNum:4
            }
        }
    }
}
</script>

<style>
.Rankright {
    position: absolute;
    top: 530px;
    right: 10px;
    width: 380px;
    height: 160px;
    background-color: #0f142a;
    border-radius: 6%;
}

.rankTitle {
    margin-top: 5px;
    margin-left: 10px;
    color: #74828b;
    font-size: 16px;
}

.rankMap {
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 160px;

}
</style>