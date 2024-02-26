<template>
    <div class="el">
        <h1>计算属性和监视</h1>
    </div>
    <fieldset>
        <legend>姓名操作</legend>
        姓氏:<input placeholder="请输入姓氏" type="text" v-model="user.firstName"/><br />
        名字:<input placeholder="请输入名字" type="text" v-model="user.lastName"/><br />
    </fieldset>
    <fieldset>
        <legend>计算属性和监视的演示</legend>
        姓名:<input placeholder="显示姓名" type="text" v-model="fullName1"/><br />
        姓名:<input placeholder="显示姓名" type="text" v-model="fullName2"/><br />
        姓名:<input placeholder="显示姓名" type="text" v-model="fullName3"/><br />
    </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';


export default defineComponent({
    setup() {
        // 定义响应式对象
        const user = reactive({
            firstName: '东方',
            lastName: '不败',
        })
        // 当只有一个回调函数的时候，默认是get
        const fullName1 = computed(()=>{
            return user.firstName + '_' + user.lastName
        })
        // computed同步修改
        const fullName2 = computed({
            get(){
                return user.firstName + '_' + user.lastName
            },
            set(val:string){
                const names = val.split('_')
                user.firstName = names[0]
                user.lastName = names[1]
            }
        })
        // 监听器
        const fullName3 = ref('')
        watch(user,({firstName,lastName})=>{
            fullName3.value = firstName + '_' + lastName
        },{immediate:true,deep:true})

        // // 监听多个数据变化的时候
        // watch([user,fullName1],({firstName,lastName})=>{
        //     fullName3.value = firstName + '_' + lastName
        // },{immediate:true,deep:true})
        
        // 第二种监听器，和上面的泣别就是默认immediate和deep为true
        watchEffect(()=>{
            fullName3.value = user.firstName + '_' + user.lastName
        })

        return {
            user,
            fullName1,
            fullName2,
            fullName3
        }
    }
})
</script>
<style lang="scss" scoped>
fieldset{
    padding: 10px;
}
</style>