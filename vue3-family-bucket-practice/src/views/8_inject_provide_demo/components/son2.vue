<template>
    <h1>son2 组件</h1>
    <button @click="color='blue'">to blue</button> PS.readonly不允许修改
    <div class="col"></div>
</template>

<script setup>
import { readonly } from 'vue';

let color =readonly(inject('color'))
</script>

<style lang="scss" scoped>
.col {
    margin: 10px 0;
    width: 100px;
    height: 100px;
    background: v-bind(color);
}
</style>
