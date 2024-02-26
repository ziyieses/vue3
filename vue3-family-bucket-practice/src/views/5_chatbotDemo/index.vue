<template>
    <div class="screen">
        <div class="left">
            <leftMenu />
        </div>
        <div class="right">
            <div class="up">
                <chatMessage :sendMessage="sendMessage" :data='data' />
            </div>
            <div class="input">
                <el-input class="inputStyle" v-model="message" placeholder="Please input your problem" clearable />
                <el-button @click="send" @keyup.enter="keyDown($event)">send</el-button>
            </div>
        </div>
    </div>
    <el-button type="primary" @click="openFullScreen2"> 重新加载 </el-button>
</template>
  
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import leftMenu from '@/views/5_chatbotDemo/components/leftMenu.vue'
import chatMessage from '@/views/5_chatbotDemo/components/chatMessage.vue'

/** 发送消息模块 */
let message = ref('')
let sendMessage = ref('')
let data = ref() // 定义一个时间戳，方便检查是否更新发送了数据
/** 发送消息的方法 */
function send() {
    if(!message.value){
        
        return
    }
    sendMessage.value = message.value
    data.value = Date.now()
    message.value = ''
    // console.log(data.value);
}

/** 刷新加载 */
onMounted(() => {
    openFullScreen2();
    window.addEventListener("keydown", keyDown);
});
/** 回车方法 */
function keyDown(e: any) {
    // 回车则执行登录方法 enter键的ASCII是13
    if (e.key == 'Enter') {
        send()
    }
}
/** 加载中... */
const openFullScreen2 = () => {
    const loading = ElLoading.service({
        lock: true,
        text: '',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}
</script>
  
<style scoped>
.screen {
    height: 80vh;
    display: flex;
    flex-direction: row;
    background: rgb(236, 239, 246);
}

.right {
    width: 100%;
    position: relative;
}

.up {
    position: absolute;
    top: 10px;
    left: 30%;
    /* align-items: center; */
}

.input {
    position: absolute;
    display: flex;
    bottom: 0px;
    left: 40%;
}

.inputStyle {
    width: 300px;
    margin-right: 10px;
}
</style>