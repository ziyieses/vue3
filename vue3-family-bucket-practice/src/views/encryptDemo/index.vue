<template>
  <div id="box">前端数据加密页面(未开发)</div>
  <button @click="change">加粗</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    let el = ref()
    onMounted(() => {
      el.value = document.getElementById('box')
    })
    let change = () => {
      el.value!.style.fontWeight = '600'

    }
    return {
      change
    }
  }
})
</script>