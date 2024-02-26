<!-- 这是一个递归组件，通过递归实现目录结构 -->
<template>
  <div @click.stop="clickTap(item,$event)" class="tree" v-for="item in data">
    <input v-model="item.checked" type="checkbox"> <span>{{ item.name }}</span>
    <br />
    <sonMenu v-if="item.children" :data="item.children" /> 
    <!-- <sonMenu v-if="item.children?.length" :data="item.children" />  -->
  </div>
</template>

<script lang="ts" setup>
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
defineProps<{
  data:Tree[]
}>()

// 点击事件
const clickTap = (item:Tree,e:any)=>{
  console.log(item)
  console.log(e);
  
}

// 下面这个是修改组件的名字，即上面第六行代码的标签使用 sonMenu 还是 asd 都可以
defineOptions({
  name:'asd'
})
</script>

<!-- 修改默认名，方便递归 -->
<!-- <script lang="ts">
export default{
  name:'asd'
}
</script> -->

<style>
.tree{
  margin-left: 10px;
}
</style>