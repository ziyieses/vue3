<template>
    <div class="home">
        <el-button @click="add">add</el-button>
        <el-button @click="del">delete</el-button>
        <transition-group
            leave-active-class="animate__animated animate__bounceOutDown" 
            enter-active-class="animate__animated animate__bounceInLeft">
            <div v-for="item in arrData" :key="item">{{ item }}</div>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import 'animate.css';
let arrData = reactive<number[]>([1, 2, 3, 4, 5, 6])
const add = () => {
    arrData.push(arrData.length + 1)
}
const del = () => {
    arrData.pop()
}
</script>

<style scoped lang="scss">
.home {
    .box {
        background: rebeccapurple;
        display: flex;
        flex-direction: row;
    }

    .items {
        display: flex;
        background: red;
    }
}
</style>