import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.ts'

const routes = [
  {
    path: '/',
    redirect: '/home/echarts',
    name:'首页'
  }, {
    path: '/home',
    name: 'Vue3 知识',
    component: () => import('@/views/home.vue'),
    children: [
      { // Vue Echarts图标练习
        path: 'echarts',
        name: 'Vue Echarts',
        component: () => import('@/views/Vue Echarts/index.vue')
      }, { // component 标签练习
        path: 'componentsLine',
        name: 'components 标签',
        component: () => import('@/views/componentsLine/index.vue')
      }, { // 计算属性和监视
        path: 'computedOrWatch',
        name: '计算属性和监听',
        component: () => import('@/views/6_computedOrWatch/index.vue')
      }, { // 前端加密练习
        path: 'encryptDemo',
        name: '前端加密',
        component: () => import('@/views/encryptDemo/index.vue')
      }, { // CSS3 动画页面
        path: 'CSS3',
        name: 'CSS3',
        component: () => import('@/views/4_CSS3/index.vue')
      }, { // CSS3 测试页面
        path: 'CSS3Demo',
        name: 'CSS3测试',
        component: () => import('@/views/4_CSS3/Demo.vue')
      }, {
        path: 'chatbot',
        name: '聊天机器人',
        component: () => import('@/views/5_chatbotDemo/index.vue')
      }, {
        path: 'fatherToSonValue',
        name: '父子组件传值与自制目录',
        component: () => import('@/views/7_fatherToSonValue/index.vue')
      }, {
        path: 'injectAndProvide',
        name: '注入和提供',
        component: () => import('@/views/8_inject_provide_demo/index.vue')
      }
    ]
  },{
    path:'/designModel',
    name:'23种设计模式',
    component:()=>import("@/views/designModel/index.vue"),
    children:[{
      path:'factory_method_pattern',
      name:'工厂方法模式',
      component:()=>import('@/views/designModel/1_creation_type/1_factory_method_pattern/index.vue')
    },{
      path:'abstract_factory_pattern',
      name:'抽象工厂模式',
      component:()=>import('@/views/designModel/1_creation_type/2_abstract_factory_pattern/index.vue')
    },{
      path:'Singleton',
      name:'单例模式',
      component:()=>import('@/views/designModel/1_creation_type/3_Singleton_pattern/index.vue')
    },{
      path:'Builder',
      name:'建造模式',
      component:()=>import('@/views/designModel/1_creation_type/4_Builder_pattern/index.vue')
    },{
      path:'Prototype',
      name:'原型模式',
      component:()=>import('@/views/designModel/1_creation_type/5_Prototype_pattern/index.vue')
    },{
      path:'Iterator',
      name:'迭代器模式',
      component:()=>import('@/views/designModel/2_behavioral_type/1_Iterator_pattern/index.vue')
    },{
      path:'Observer',
      name:'观察者模式',
      component:()=>import('@/views/designModel/2_behavioral_type/2_Observer_pattern/index.vue')
    },{
      path:'TemplateMethod',
      name:'模板方法',
      component:()=>import('@/views/designModel/2_behavioral_type/3_Template_Method/index.vue')
    },{
      path:'Command',
      name:'命令模式',
      component:()=>import('@/views/designModel/2_behavioral_type/4_Command_pattern/index.vue')
    },{
      path:'State',
      name:'状态模式',
      component:()=>import('@/views/designModel/2_behavioral_type/5_State_pattern/index.vue')
    },{
      path:'Strategy',
      name:'策略模式',
      component:()=>import('@/views/designModel/2_behavioral_type/6_Strategy_pattern/index.vue')
    },{
      path:'Responsibility',
      name:'职责链模式',
      component:()=>import('@/views/designModel/2_behavioral_type/7_Responsibility_pattern/index.vue')
    },{
      path:'Mediator',
      name:'中介者模式',
      component:()=>import('@/views/designModel/2_behavioral_type/8_Mediator_pattern/index.vue')
    },{
      path:'Visitor',
      name:'访问者模式',
      component:()=>import('@/views/designModel/2_behavioral_type/9_Visitor_pattern/index.vue')
    },{
      path:'Interpreter',
      name:'解释器模式',
      component:()=>import('@/views/designModel/2_behavioral_type/10_Interpreter_pattern/index.vue')
    },{
      path:'Memento',
      name:'备忘录模式',
      component:()=>import('@/views/designModel/2_behavioral_type/11_Memento_pattern/index.vue')
    },{
      path:'Composite',
      name:'组合模式',
      component:()=>import('@/views/designModel/3_structural_type/1_Composite_pattern/index.vue')
    },{
      path:'Facade',
      name:'外观模式',
      component:()=>import('@/views/designModel/3_structural_type/2_Facade_pattern/index.vue')
    },{
      path:'Proxy',
      name:'代理模式',
      component:()=>import('@/views/designModel/3_structural_type/3_Proxy_pattern copy 2/index.vue')
    },{
      path:'Adapter',
      name:'适配器模式',
      component:()=>import('@/views/designModel/3_structural_type/4_Adapter_pattern/index.vue')
    },{
      path:'Decrator',
      name:'装饰模式',
      component:()=>import('@/views/designModel/3_structural_type/5_Decrator_pattern/index.vue')
    },{
      path:'Bridge',
      name:'桥模式',
      component:()=>import('@/views/designModel/3_structural_type/6_Bridge_pattern/index.vue')
    },{
      path:'Flyweight',
      name:'享元模式',
      component:()=>import('@/views/designModel/3_structural_type/7_Flyweight_pattern/index.vue')
    }]
  }
]
/** 处理 store 变成 routers 路由 */
// const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   }
// ]
// let routerArrary = store.state.routerArrary
// function a(arr) {
//   arr.forEach(item=>{
//     if(item.index){
//       delete item.index
//     }
//     if(item.path){
//       let arr = item.path.split('/')
//       item.path = arr[arr.length - 1]
//     }
//     if(item.children){
//       a(item.children)
//     }else{
//       return
//     }
//   })
//   routerArrary[1].path='/home'
//   routerArrary[1].name='首页'
//   console.log(routerArrary)
// }
// a(routerArrary)
// routes.push(routerArrary)
// function b(){
//   console.log(routes);
// }
// b()
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

/** 全局路由守卫 */
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  let nameList: any[] = []
  to.matched.forEach(item => {
    nameList.push(item.name)
  })
  store.commit('updateBreadcrumbDate', {
    nameList: nameList,
    name: to.name,
    path: to.fullPath
  })
  next()
})
export default router
