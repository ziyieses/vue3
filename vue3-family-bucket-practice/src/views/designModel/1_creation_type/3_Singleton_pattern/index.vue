<template>
  <!-- 单例模式 -->
  <!-- 保证一个类只有一个实例，并提供一个访问它的全局访问点  -->
  <h2>单例模式</h2>
  <br />
  <span>保证一个类只有一个实例，并提供一个访问它的全局访问点</span>
  <img src="https://segmentfault.com/img/remote/1460000022886194" alt="">
  <br />
  <el-button @click="start1">执行1</el-button>
  <el-button @click="end1">清除1</el-button><br />
  <span v-if="seeting1 && seeting2">{{ seeting1 }} --- {{ seeting2 }} --- {{ seeting1 == seeting2 }}</span>
  <br />
  <span v-if="seeting1 && seeting2">上面两个对象但是只初始化了一次，而且指向同一个</span>
</template>

<script lang="ts" setup>
/** 方法一 */
class GetSeetingConfig {
  static instance: GetSeetingConfig | null
  private name = 'asd'
  constructor() {
    console.log(this.name)
  }
  getConfig() {
    //...
  }
  static getInstance() {
    if (this.instance == void 0) {
      this.instance = new GetSeetingConfig()
    }
    return this.instance
  }
}
let seeting1 = ref<GetSeetingConfig | null>()
let seeting2 = ref<GetSeetingConfig | null>()
const start1 = () => {
  //两次只打印一次new
  seeting1.value = GetSeetingConfig.getInstance()
  seeting2.value = GetSeetingConfig.getInstance()
  console.log(seeting1.value === seeting2.value)// true
}
const end1 = () => {
  // GetSeetingConfig.instance =  Object.create(null)
  GetSeetingConfig.instance = null
  seeting1.value = null
  seeting2.value = null
}

/** 方法二  未修改*/
// class GetSeetingConfig {
//   constructor() {
//     console.log('new')
//   }
//   getConfig() {
//     //...
//   }
// }
// GetSeetingConfig.getInstance = (function() {
//     let instance
//     return function() {
//         if (!instance){
//             instance = new GetSeetingConfig()
//         }
//         return instance
//     }
// })()

// const seeting1 = GetSeetingConfig.getInstance()
// const seeting2 = GetSeetingConfig.getInstance()
// //两次只打印一次new
// seeting1 === seeting2 // true
</script>

<style lang="scss" scoped></style>
