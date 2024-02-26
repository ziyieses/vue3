<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">打开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <!-- 这是一个左侧导航的定义页面，改导航最多只可以嵌套两层 -->
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <el-sub-menu v-for="item in menuDate" :index="item.index" :key="item.index">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group v-for="items in item.children">
        <!-- 循环输出每一个页面 -->
        <el-menu-item v-if="items.path" :index="items.index" :key="items.index" @click="$router.push(items.path)">{{ items.name }}</el-menu-item>
        <!-- 下面是还存在子目录的时候 -->
        <el-sub-menu v-else :index="items.index">
          <template #title>
            <el-icon>
              <document />
            </el-icon>
            <span>{{ items.name }}</span>
          </template>
        <!-- 循环输出每一个页面 -->
          <el-menu-item v-for="itemss in items.children" :index="itemss.index" :key="itemss.index" @click="$router.push(itemss.path)">{{ itemss.name }}</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
    </el-sub-menu>

    <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Vue3 知识</span>
        </template>
        <el-menu-item-group>
          <template #title><span>主要知识点</span></template>
          <el-menu-item index="1-1">store</el-menu-item>
          <el-menu-item index="1-2">Router</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="次级知识点">
          <el-menu-item index="1-3">Elements Plus</el-menu-item>
          <el-menu-item index="1-4" @click="$router.push('/home/echarts')">Vue Echarts</el-menu-item>
          <el-menu-item index="1-5" @click="$router.push('/home/componentsLine')">components 标签</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-6">
          <template #title><span>打包</span></template>
          <el-menu-item index="1-6-1">Vite知识</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>TypeScript</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Vite</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Pina</template>
      </el-menu-item> -->
  </el-menu>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  // Location,
  // Setting,
} from '@element-plus/icons-vue'
import store from '@/store/index.ts'

let menuDate = store.state.routerArrary


const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
  
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
</style>
  