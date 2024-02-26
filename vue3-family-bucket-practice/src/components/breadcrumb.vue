<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbDate" :key="item.path">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbDate.length - 1 || index == 0"> {{ item.name }}</span>
        <!-- 可以点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item.name }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
  
<script lang="ts" setup>
import { ref,watch,Ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
// import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
/** 生成数组数据 */
const breadcrumbDate:Ref<any> = ref([])
const getBreadcrumbData = ()=>{
  // console.log(route.matched)
  breadcrumbDate.value = route.matched.filter((item) => {
    return item.path && item.name;
  })
  
}
/** 监听路由发生变化 */
watch(route,()=>{
  getBreadcrumbData()
},{immediate:true})
/** 处理点击事件 */
const onLinkClick = (item:any)=>{
  router.push(item.path)
}

/** 如果要进行主题替换，在这里获取动态样式 */
// const store = useStore()
// eslin-disable-next-line
// const linkHoverColor = ref(store.getters.globalCss.breadCrumbColor)
</script>

<style lang="scss" scoped>
// 动画过渡
.breadcrumb-enter-active,
.breadcrumb-leave-active{
  transition:all 0 5s;
}
.breadcrumb-enter-from,
.breadcrumb-leave-active{
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-leave-active{
  position: absolute;
}
// 样式
.breadcrumb{
  display: flex;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect{
    color: #666;
    font-weight: 600;
  }
  // .redirect:hover{
    // vue3 新特性，动态绑定样式
    // color:v-bind(linkHoverColor)
  // }
}
</style>