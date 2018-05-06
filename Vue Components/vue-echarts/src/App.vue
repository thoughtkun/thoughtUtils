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
          text: "动态Echarts"
        },
        legend: {
          data: ["QPS曲线"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "日期",
            type: "line",
            data: [5, 20, 36, 10, 10, 70]
          }
        ]
      },
      timer: "",
      chartData: {
        xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        sData: [5, 20, 36, 10, 10, 70]
      }
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
      let xData = this.chartData.xData,
        sData = this.chartData.sData;
      for (let i = 0; i < xData.length; i++) {
        this.timer = setTimeout(() => {
          this.option.xAxis.data.push(xData[i]);
          this.option.series[0].data.push(sData[i]);
        }, 1000*i)
      }
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
