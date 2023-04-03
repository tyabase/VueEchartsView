<template>
    <div class="Start">
        <el-backtop target=".Start"></el-backtop>
        <div class="void">
            <div class="time1">当前时间：{{ times }}</div>
        </div>
        <div class="MainStart">
            <transition name="appear">
                <div class="StartTitle" v-show="appear1Flag">健康中国</div>
            </transition>
            <transition name="appear1">
                <div class="Introduce" v-show="appear2Flag">基于Echarts的民生健康可视化驾驶舱</div>
            </transition>
            <img src="./assets/trans.png" alt="">
        </div>
        <div class="TecPart">
            <div class="sixBox">
                <img src="./assets/sheet3.png" alt="">
                <div class="BoxMain">数据智联</div>
                <div class="BoxSmall1">高效的第三方API</div>
                <div class="BoxSmall">数据一步导入</div>
                <div class="BoxSmall">方便快捷</div>
            </div>
            <div class="sixBox">
                <img src="./assets/sheet2.png" alt="">
                <div class="BoxMain">数据多样化</div>
                <div class="BoxSmall1">多种数据精确展示</div>
                <div class="BoxSmall">丰富的图表库</div>
                <div class="BoxSmall">一目了然</div>
            </div>
            <div class="sixBox">
                <img src="./assets/sheet1.png" alt="">
                <div class="BoxMain">全面可视化</div>
                <div class="BoxSmall1">复杂数据轻松获取</div>
                <div class="BoxSmall">协助计划与决策</div>
                <div class="BoxSmall">助力“数”未来</div>
            </div>
            <div class="sixBox">
                <img src="./assets/sheet4.png" alt="">
                <div class="BoxMain">维护简单</div>
                <div class="BoxSmall1">成熟的开源框架结构</div>
                <div class="BoxSmall">减少排查故障时间</div>
                <div class="BoxSmall">开创数据新模式</div>
            </div>
            <div class="sixBox">
                <img src="./assets/sheet5.png" alt="">
                <div class="BoxMain">专注浏览器开发</div>
                <div class="BoxSmall1">成熟的页面布局方案</div>
                <div class="BoxSmall">高效查询可视数据</div>
                <div class="BoxSmall">简洁美观易理解</div>
            </div>

        </div>
        <div class="SecPart">
            <div class="LeftPart">
                <div class="About">可视化核心</div>
                <div class="SecIntro">开源图表</div>
                <div class="SecIntro">高效组件</div>
                <div class="SecSamllIntro">可视化提供了新兴的展示方式，从此告别复杂的表格数据</div>
                <div class="SecSamllIntro">通过成熟的数据交互模式，鼓励用户自行探索甚至操纵数据</div>
            </div>
            <div class="RightPart">
                <div class="echarts"><img src="./assets/echarts.png" alt="" style="height:70px;"></div>
                <div class="dataV"><img src="./assets/datav.png" alt="" style=""></div>
                <div class="vue"><img src="./assets/logo.png" alt="" style="height:200px;"></div>
                <div class="element"><img src="./assets/element.png" alt="" style="height:100px;"></div>
            </div>
        </div>
        <div class="ThirdPartIntro">
            <div class="ThirdTitleIntro">我们有哪些优势？</div>
            <div class="TopTwice">
                <div class="ThirdLeft">
                    <div class="ThirdLeftFirstIntro">高效信息传递</div>
                    <div class="ThirdLeftSecIntro">快速访问数据</div>
                    <div class="ThirdLeftMainMsg">普通表格无法为查看它的人提供生动的信息</div>
                    <div class="ThirdLeftMainMsg">数据可视化使用户能够接收有关</div>
                    <div class="ThirdLeftMainMsg">运营和业务条件的大量信息</div>
                    <div class="ThirdImg">
                        <img src="./assets/team1.png" alt="" style="height: 300px;">
                    </div>
                </div>
                <div class="ThirdRight">
                    <div class="ThirdLeftFirstIntro">判断发展趋势</div>
                    <div class="ThirdLeftSecIntro">掌握数据变化</div>
                    <div class="ThirdLeftMainMsg">数据可视化提供了更加强大的多角度视图</div>
                    <div class="ThirdLeftMainMsg">允许用户更加清晰了解数据</div>
                    <div class="ThirdLeftMainMsg">从而影响用户满意度</div>
                    <div class="ThirdImg">
                        <img src="./assets/team2.png" alt="" style="height: 300px;">
                    </div>
                </div>
            </div>
            <div class="TopTwice">
                <div class="ThirdLeft">
                    <div class="ThirdLeftFirstIntro">美观图表展示</div>
                    <div class="ThirdLeftSecIntro">助力数据交互</div>
                    <div class="ThirdLeftMainMsg">复杂的数据很难看出隐藏在背后的规律</div>
                    <div class="ThirdLeftMainMsg">借助配套的图表功能集成模块</div>
                    <div class="ThirdLeftMainMsg">轻松实现数据交互</div>
                    <div class="ThirdImg">
                        <img src="./assets/team3.png" alt="" style="height: 300px;">
                    </div>
                </div>
                <div class="ThirdRight">
                    <div class="ThirdLeftFirstIntro">框架集成开发</div>
                    <div class="ThirdLeftSecIntro">高效维护数据</div>
                    <div class="ThirdLeftMainMsg">本软件开发基于高效的开源框架</div>
                    <div class="ThirdLeftMainMsg">搭积木般的代码集成</div>
                    <div class="ThirdLeftMainMsg">维护“零”压力</div>
                    <div class="ThirdImg">
                        <img src="./assets/team4.png" alt="" style="height: 300px;">
                    </div>
                </div>
            </div>
            <div class="ThirdDown">
                <div class="DownTitle">更多内容，敬请期待……</div>
                <video src="./assets/team3.mp4" autoplay="autoplay" loop="loop"></video>
            </div>
        </div>
        <div class="DownBar">©2023 零点可视化团队共同开发</div>
        <div class="DownBar">联系邮箱：tydcloudhome@zohomail.com</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            times: '',//时间格式化
            appear1Flag: false,
            appear2Flag: false,
        }
    },
    created() {
        this.getTimes()
    },
    mounted() {
        this.appear1Flag = true;
        let timer = setTimeout(() => {
            this.appear2Flag = true;
        }, 1000)
    },
    beforeDestroy() {
        clearTimeout(timer);
        if (this.times) {
            clearInterval(this.getTimesInterval);
        }
    },
    methods: {
        getTimes() {
            setInterval(this.getTimesInterval, 1000);
        },
        getTimesInterval: function () {
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
}
</script>

<style>
.Start {
    position: relative;
    height: 710px;

}

.void {
    height: 80px;
    width: 100%;
    background-color: #071222;

}

.MainStart {
    height: 1400px;
    background-image: url(./assets/bg.jpg);
}

.MainStart img {
    position: absolute;
    top: 80%;
    height: 950px;
    width: 100%;
}


.StartTitle {
    position: absolute;
    color: #fff;
    top: 38%;
    right: 65%;
    font-size: 90px;
    font-family: "楷体", "楷体_GB2312";
}

.time1 {
    position: absolute;
    right: 3%;
    top: 4%;
    color: #74828b;
    width: 300px;
    height: 40px;
    font-size: 20px;
}

.Introduce {
    position: absolute;
    color: #fff;
    top: 58%;
    right: 34%;
    font-size: 50px;
    font-family: "楷体", "楷体_GB2312";
}

.appear-enter-active,
.appear-leave-active {
    transition: all 2s;
}

.appear-enter,
.appear-leave-to {
    opacity: 0;
}

.appear1-enter-active,
.appear1-leave-active {
    transition: all 2s;
}

.appear1-enter,
.appear1-leave-to {
    opacity: 0;
}

.TecPart {
    position: relative;
    padding-left: 8%;
    padding-right: 8%;
    width: 84%;
    height: 350px;
    background-color: #1d1f2a;
    display: flex;
    justify-content: space-around;
}

.sixBox {
    border-radius: 5%;
    text-align: center;
    height: 250px;
    width: 180px;
    color: white;
    background-color: #071222;
    box-shadow: 8px 8px 5px #071222;

}


.sixBox:hover {
    background-color: #007aff;
    transition: all .2s;

}

.sixBox img {
    padding-top: 10%;

    height: 80px;
}

.BoxMain {
    padding-top: 5%;
    font-size: 20px;
    font-family: "楷体", "楷体_GB2312";
}

.BoxSmall1 {
    padding-top: 5%;
    font-size: 16px;
    font-family: "楷体", "楷体_GB2312";
}

.BoxSmall {
    padding-top: 2%;
    font-size: 16px;
    font-family: "楷体", "楷体_GB2312";
}


.SecPart {
    width: 100%;
    height: 725px;

}

.LeftPart {
    text-align: center;
    float: left;
    padding-left: 10%;
    height: 100%;
    width: 35%;
}

.RightPart {
    position: relative;
    padding-top: 14%;
    text-align: center;
    float: right;
    padding-right: 10%;
    height: 530px;
    width: 35%;
}

.echarts {
    position: absolute;
}

.dataV {
    position: absolute;
    top: 16%;
    right: 25%;
}

.vue {
    position: absolute;
    left: 5%;
    padding-top: 23%;
}

.element {
    position: absolute;
    top: 60%;
    right: 18%;
}

.About {
    font-family: "微软雅黑";
    padding-top: 40%;
    padding-bottom: 2%;
    font-size: 50px;
    font-weight: bold;
}

.SecIntro {
    padding-top: 2%;
    background-image: -webkit-linear-gradient(left, #42d392, #4cb9b3, #6089f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    font-weight: bold;
}

.SecSamllIntro {
    padding-top: 5%;
    font-weight: bold;
    font-size: 20px;
}

.dataV {
    padding-top: 5%;
}

.ThirdPartIntro {
    height: 2250px;
    width: 100%;
    background-color: #f5f4f6;
}

.ThirdTitleIntro {
    padding-top: 3%;
    height: 100px;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
}

.TopTwice {
    padding-top: 3%;
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
    height: 600px;
}


.ThirdLeft {
    float: left;
    width: 560px;
    height: 100%;
    background-color: #fff;

}

.ThirdLeft:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    transition: all .2s;
}

.ThirdRight {
    float: right;
    width: 560px;
    height: 100%;
    background-color: #fff;

}

.ThirdRight:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    transition: all .2s;
}

.ThirdLeftIntro {
    padding-top: 5%;
}

.ThirdLeftFirstIntro {
    padding-top: 8%;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.ThirdLeftSecIntro {
    padding-top: 2%;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.ThirdLeftMainMsg {
    padding-top: 3%;
    text-align: center;
    font-size: 18px;
}

.ThirdImg {
    padding-top: 5%;
    text-align: center;
}

.ThirdDown {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    height: 700px;
    width: 80%;
}

.ThirdDown video {
    padding-top: 5%;
    width: 100%;
    height: 80%;
}

.DownTitle {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}

.DownBar{
    height: 40px;
    background-color: #f5f4f6;
    text-align: center;
    color: #a6a6a6;
    font-family: "楷体", "楷体_GB2312";
}
</style>