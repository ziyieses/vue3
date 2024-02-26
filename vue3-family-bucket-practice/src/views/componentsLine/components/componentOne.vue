<template>
    <div class="home">
        <button @click="isShow = !isShow">切换状态</button>
        <transition :duration="500"
            @before-enter="EnterBefore"
            @enter="EnterActive"
            @leave="Leave">
            <div v-if="isShow" class="content"></div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import gsap from 'gsap' // npm i gsap -S

const isShow = ref(false)

const EnterBefore = (el:Element)=>{
    // console.log('进入前');
        gsap.set(el,{
        width:0,
        height:0
    })
}
const EnterActive = (el:Element,done:gsap.Callback)=>{
    // console.log('进入中');
    gsap.to(el,{
        width:300,
        height:300,
        onComplete:done // 加载完成后调用 done 方法
    })
}

// 离开
const Leave = (el:Element,done:gsap.Callback)=>{
    // console.log('离开过度曲线');
    gsap.to(el,{
        width:0,
        height:0,
        onComplete:done
    })
}

</script>

<style scoped>
.content {
    margin-top: 10px;
    background: pink;
}
</style>