<template>
    <div class="header">
         <div class="title">全国新型冠状病毒可视化数据统计</div>
         <div class="time">当前时间：{{ times }}</div>
         <div class="indro">数据来源：腾讯新闻</div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      times:'',//格式化之后的当前时间
    };
  },
  created() {
    this.getTimes()
  },
  // 在Vue实例销毁前，清除我们的定时器
  beforeDestroy() {
    if (this.times) {
      clearInterval(this.getTimesInterval); 
    }
  },
  methods: {
    getTimes(){
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval:function() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    },
  }
};
</script>


<style>

 .header{
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #060610;
 }
 .title{
    position: absolute;
    top: 30%;
    left: 35%;
    color: #74828b;
    font-family: "Microsoft Yahei";
    font-size: 30px;
 }
 .time{
    position: absolute;
    right: 3%;
    top: 30%;
    color: #74828b;
    width: 300px;
    height: 40px;
    font-size: 16px;
 }
 .indro{
    position: absolute;
    right: 3%;
    top: 45%;
    color: #74828b;
    width: 300px;
    height: 40px;
    font-size: 16px;
 }
</style>