// Component.vue
<template>
  <div>
    <el-tabs  type="card" class="demo-tabs" @tab-change="handleChange">
        <el-tab-pane v-for="(item,index) in tabs" :label="item.name" :name="item.name" :key="index">
            <component :is="currentTab"></component>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import componentOne from './components/componentOne.vue'
import componentTwo from './components/componentTwo.vue'
import componentThree from './components/componentThree.vue'
import { reactive, shallowRef } from 'vue'

// reactive 会使数据变成响应式，此处为了节省性能开销，可以使用 shallowRef 或者 markRaw 跳过 proxy 代理
let currentTab = shallowRef(componentOne)
const tabs = reactive([
  {
    name: '第一个',
    comName: shallowRef(componentOne)
  },{
    name: '第二个',
    comName: shallowRef(componentTwo)
  },{
    name: '第三个',
    comName: shallowRef(componentThree)
  }
])


function handleChange(name:any){
    tabs.forEach(item => {
        if(item.name == name) currentTab = item.comName
    })
}
</script>

<style scoped>
</style>