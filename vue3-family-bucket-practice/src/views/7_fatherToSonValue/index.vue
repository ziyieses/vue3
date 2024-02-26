<!-- 父子组件传值 -->
<template>
  <son ref="sonExpose" @on-click="getSonDate" :name="name"></son>
  <hr />
  <h2>自制目录</h2>
  <sonMenu :data='data'></sonMenu>
  <hr />
  <!-- transition 动画效果模块 -->
  <h2>animate 测试基础</h2>
  <button @click="isShow=!isShow">显示/隐藏</button>
  <!-- duration:动画时间 也可以： :duration="{enter:50,leave:500}" -->
  <transition :duration="50" leave-active-class="animate__animated animate__bounceOutDown" enter-active-class="animate__animated animate__bounceInLeft">
    <div v-if="isShow">使用transition标签的内容</div>
  </transition>
  <div class="animate__animated animate__bounceInLeft" v-if="isShow">没有使用上面标签，直接使用的内容</div>
  <h2>生命周期</h2>
  <button @click="isShow2=!isShow2">显示/隐藏</button>
  <!-- 前面四个是进入的，后面是隐藏的 -->
  <transition
    @before-enter="EnterForm"
    @enter="EnterActive"
    @after-enter="EnterTo"
    @enter-cancelled="EnterCancell"
    
    @before-leave="LeaveForm"
    @leave="Leave"
    @after-leave="LeaveTo"
    @leave-cancelled="LeaveCancell"
  >
    <div v-if="isShow2" style="background: red;"></div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import son from './components/son.vue'
import sonMenu from './components/sonMenu.vue';
import 'animate.css';
import gsap from 'gsap' // npm i gsap -S
const name = '乾辰' // 传给子组件

/** 显示或隐藏-动画效果模块 */
let isShow = ref(false)
let isShow2 = ref(false)
// transition生命周期
const EnterForm = (el:Element)=>{
  console.log('进入之前');
  gsap.set(el,{
    width:0,
    height:0
  })
}
const EnterActive = (el:Element,done:gsap.Callback)=>{
  console.log('过度曲线');
  gsap.to(el,{
    width:200,
    height:200,
    onComplete:done // 完成的调用
  })
  // setTimeout(()=>{
  //   done() // 执行完成，要等待三秒钟才会执行下面这个过度完成的方法
  // },3000)
}
const EnterTo = (el:Element)=>{
  console.log('过度完成',el);
}
const EnterCancell = (el:Element)=>{
  console.log('过渡效果被打断',el);
}
// 离开
const LeaveForm = (el:Element)=>{
  console.log('离开之前',el);
}
const Leave = (el:Element,done:gsap.Callback)=>{
  console.log('离开过度曲线');
  gsap.to(el,{
    width:0,
    height:0,
    onComplete:done
  })
  // setTimeout(()=>{
  //   done() // 执行完成，要等待三秒钟才会执行下面这个过度完成的方法
  // },3000)
}
const LeaveTo = (el:Element)=>{
  console.log('离开完成',el);
}
const LeaveCancell = (el:Element)=>{
  console.log('离开被打断',el);
}

// 子组件传给父组件
const getSonDate = (value: String, age: number) => {
  console.log(value, age)
}

// 获取子组件暴露出来的变量或者方法
onMounted(() => {
  const sonExpose = ref<InstanceType<typeof son>>()
  console.log(sonExpose)
  // sonExpose.value?.address
})


/** 自制目录 */
// 定义一个接口类型
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
const data = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [{
      name: '1-1',
      checked: false,
    }]
  }, {
    name: '2',
    checked: false,
  }, {
    name: '3',
    checked: false,
    children: [{
      name: '3-1',
      checked: false,
      children: [{
        name: '3-1-1',
        checked: false,
      }]
    }]
  }
])
</script>