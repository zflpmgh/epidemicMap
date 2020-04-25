<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";

let option = {
  tooltip: {
    // 提示框
    show: true,
    textStyle: {
      fontSize: 13
    }
  },
  series: [
    {
      name: "现存确诊",
      type: "map",
      mapType: "china",
      selectedMode: "multiple",
      label: {
        normal: {
          show: true //显示省份标签
        },
        emphasis: {
          show: true //对应的鼠标悬浮效果
        }
      },
      itemStyle: {
        normal: {
          //默认状态样式
          borderWidth: 0.5
        },
        emphasis: {
          //鼠标移入样式
          borderWidth: 0.5,
          borderColor: "#ccc", //鼠标移入省份时，该省边框颜色
          areaColor: "#C7FFFD" //鼠标移入省份时，该省背景颜色
        }
      },
      zoom: 1.2
    }
  ],
  visualMap: [
    {
      type: "piecewise",
      show: true,
      pieces: [
        { min: 1000 }, // 不指定 max，表示 max 为无限大（Infinity）。
        { min: 200, max: 1000 },
        { min: 50, max: 200 },
        { min: 10, max: 50 },
        { min: 1, max: 10 },
        { min: 0, max: 0 } // 不指定 min，表示 min 为无限大（-Infinity）。
      ],
      inRange: {
        color: ["#FFFFFF", "#B80909"]
      }
    }
  ]
};

export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
        let { data } = await this.$axios.get("http://localhost:3001/api");
        console.log(data);
        option.series[0].data = data;
        this.myChart = echarts.init(document.getElementById("container"));
        this.myChart.setOption(option);
    }
  }
};
</script>

<style>
#container {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>