<script setup lang="ts">
import { RouterView } from 'vue-router';
import navbar from '@/components/navbar.vue'
import breadcrumb from '@/components/breadcrumb.vue'
import footers from '@/components/footers.vue'


</script>

<template>
    <div class="common-layout">
    <!-- 设置布局格式，做菜单，右边上中下是，头，内容，脚 -->
    <el-container>
      <el-aside width="200px">
        <navbar></navbar>
      </el-aside>
      <el-container class="container">
        <el-header>
          <breadcrumb></breadcrumb>
        </el-header>
        <el-main> <router-view></router-view> </el-main>
      </el-container>
    </el-container>
          <footers></footers>
  </div>
  <!-- <router-view></router-view> -->
</template>

<style>
*{
  margin: 0;
  padding: 0;
  text-align:left;
  /* background: rgba(191,191,191,1); */
}
.common-layout {
  margin-top: 15px;
}

.container {
  padding: 5px 0 0 15px;
}

.input {
  display: inline;
  margin: 20px 30px;
}

.button {
  width: 90px;
}
</style>
