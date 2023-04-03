<template>
    <div class="piechart">
         <div class="pietitle">治愈率和死亡率</div>
         <div class="mainchart">
            <dv-water-level-pond :config="config2" style="width:40%;height:80%" />
            <dv-water-level-pond :config="config3" style="width:40%;height:80%" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config2: {
                data: [94.3, 70],
                shape: 'roundRect'
            },
            config3: {
                data: [0.12, 0.12],
                shape: 'roundRect',
                colors: ['red', 'red'] 
            }
        }
    }
}
</script>

<style>
.piechart{
    margin: 15px;
    padding-top: 10px;
    width:300px;
    height: 250px;
    background-color: #0f142a;
    border-radius: 6%;
}
.pietitle{
    padding-top: 5px;
    padding-left: 20px;
    font-size: 16px;
    color: #74828b;
}
.mainchart{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-left: 5px;
    width: 98%;
    height:190px;

}
</style>