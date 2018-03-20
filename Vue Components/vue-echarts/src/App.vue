<template>
  <div id="app">
    <vueEcharts id="test" :option="option"/>
    <div @click="stopInterval">stop</div>
  </div>
</template>

<script>
import vueEcharts from "./components/vueEcharts";
export default {
  name: "App",
  data() {
    return {
      option: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子gg"]
        },
        yAxis: {},
        series: [
          {
            name: "撒尿",
            type: "bar",
            data: [5, 20, 36, 10, 10, 70]
          }
        ]
      },
      timer: ""
    };
  },
  components: {
    vueEcharts
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      this.timer = setInterval(() => {
        let temObj = { ...this.option };
        if (
          temObj.xAxis.data.length < 10 &&
          temObj.series[0].data.length < 10
        ) {
          temObj.xAxis.data.push("haha");
          temObj.series[0].data.push(50);
        } else {
          temObj.xAxis.data.push("haha");
          temObj.series[0].data.push(50);
          temObj.xAxis.data.shift();
          temObj.series[0].data.shift();
        }
        this.option = temObj;
      }, 1000);
    },
    stopInterval() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
