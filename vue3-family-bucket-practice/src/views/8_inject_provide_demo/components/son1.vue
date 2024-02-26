<template>
    <h1>son1 组件</h1>
    <div class="col"></div>
    <hr />
    <son2></son2>
</template>

<script setup>
import son2 from './son2.vue'
let color = inject('color')
</script>

<style lang="scss" scoped>
.col {
    margin: 10px 0;
    width: 100px;
    height: 100px;
    background: v-bind(color);
}
</style>
