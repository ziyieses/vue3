<template>
  父组件传来的name:{{ name }} <br />
  <button @click="send">给父组件传值</button>
</template>

<script lang="ts" setup>
/** 接收父组件传值的第一种方法 */
// 第一种
// const propx = defineProps({
//   name:{
//     type:String,
//     default:'默认值'
//   }
// })
// console.log(propx)

// 第二种，只有使用ts的时候才可以
withDefaults(defineProps<{
  name:String
}>(),{
  name:() => '默认值'
})

/** 子组件传给父组件 */
// 第一种
// const emit = defineEmits(['on-click'])
// const send = () =>{
//   emit('on-click','子组件传来的值',18)
// }

// 第二种
const emit = defineEmits<{(e:'on-click',name:string,age:number):void}>()
const send = () =>{
  emit('on-click','子组件传来的值',18)
}

/** 读取子组件的属性或方法 */
defineExpose({
  address:'贵阳'
})
</script>