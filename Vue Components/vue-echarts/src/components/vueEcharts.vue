<template>
  <div :id="id" :style="style"></div>
</template>
<script>
export default {
  name: "vueEcharts",
  data() {
    return {
      chart: ""
    };
  },
  props: {
    id: {
      type: String
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    option: {
      type: Object,
      default() {
        return {
          title: {
            text: "vue-Echarts"
          },
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: [
              "衬衫",
              "羊毛衫",
              "雪纺衫",
              "裤子",
              "高跟鞋",
              "袜子",
              "tuoxie"
            ]
          },
          series: [
            {
              name: "销量",
              type: "line",
              data: [5, 20, 36, 10, 10, 70]
            }
          ]
        };
      }
    }
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  mounted() {
    this.init();
  },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.chart.resize);
  //   if (this.chart) {
  //     this.chart.dispose();
  //   }
  // },
  methods: {
    init() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option);
      window.addEventListener("resize", this.chart.resize);
    }
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal);
          } else {
            this.chart.setOption(oldVal);
          }
        } else {
          this.init();
          F;
        }
      },
      deep: true
    }
  }
};
</script>
