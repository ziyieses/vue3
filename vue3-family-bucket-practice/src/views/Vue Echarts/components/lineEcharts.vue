<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: this.width, height: this.height }"></div>
    <el-button @click="clearEcharts">清除</el-button>
    <el-button @click="addEcharts">渲染</el-button>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";
import { ElMessage } from 'element-plus'

export default {
  name: "App",
  props: ["width", "height"],
  setup() {
    let isShow = false
    let myEcharts = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      myEcharts.dispose;
    });

    function clearEcharts() {
      echarts.dispose(document.getElementById('myEcharts'))
      isShow = false
    };
    function addEcharts() {
      if(isShow){
        ElMessage({
          message:'图标已渲染，请先清楚后再次渲染',
          type:'warning'
        })
        return
      }
      initChart()
    };
    function initChart() {
      isShow = true
      let chart = myEcharts.init(document.getElementById("myEcharts"), "purple-passion");
      chart.setOption({
        title: {
          text: "2021年各月份销售量（单位：件）",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
          ]
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              606, 542, 985, 687, 501, 787, 339, 706, 383, 684, 669, 737
            ],
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  formatter: "{c}"
                }
              }
            }
          }
        ]
      });
      window.onresize = function () {
        chart.resize();
      };
    }

    return {
      addEcharts,
      clearEcharts,
      initChart
    };
  }
};
</script>

