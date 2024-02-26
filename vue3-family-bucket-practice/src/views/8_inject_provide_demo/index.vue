<template>
    <div class="home">
        <div class="box" @click.stop="onCheck(1)">
            <input type="checkbox" v-model="check1" /> 粉色
        </div>
        <div class="box" @click="onCheck(2)">
            <input type="checkbox" v-model="check2" /> 红色
        </div>
        <div class="box" @click="onCheck(3)">
            <input type="checkbox" v-model="check3" /> 黄色
        </div>
    </div>
    <div class="col"></div>
    <hr />
    <son1></son1>
</template>

<script lang="ts" setup>
import son1 from './components/son1.vue'
let color = ref('red')
provide('color', color)

let check1 = ref(false)
let check2 = ref(true)
let check3 = ref(false)

const onCheck = (index: number) => {
    if (index == 1) {
        if (check1.value && !check2.value && !check3.value) {
            return
        }
        check1.value = !check1.value
        check2.value = false
        check3.value = false
        color.value = 'pink'
    } else if (index == 2) {
        if (!check1.value && check2.value && !check3.value) {
            return
        }
        check1.value = false
        check2.value = !check2.value
        check3.value = false
        color.value = 'red'
    } else if (index == 3) {
        if (!check1.value && !check2.value && check3.value) {
            return
        }
        check1.value = false
        check2.value = false
        check3.value = !check3.value
        color.value = 'yellow'
    }
}
</script>

<style lang="scss" scoped>
.home {
    display: flex;
}

.box {
    margin-right: 10px;
    cursor: pointer;
}

.col {
    margin: 10px 0;
    width: 100px;
    height: 100px;
    background: v-bind(color);
}
</style>
