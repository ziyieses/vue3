<template>
  <div class="clear">
    <el-button type="primary" @click="clearScreen">清屏</el-button>
  </div>

  <div class="home" >
    <div v-for="(item, index) in chatArr" :key="index">
      <div class="reply" v-if="item.status === '0'">
      <div class="avatar"><img width="50" src="@/assets/images/avatar.jpeg" alt=""></div>
      <div class="left"></div>
      <div class="content">{{ item.content }}</div>
    </div>

    <div class="question" v-if="item.status === '1'">
      <div class="content">{{ item.content }}</div>
      <div class="left"></div>
      <div class="avatar"><img width="50" src="@/assets/images/avatar2.png" alt=""></div>
    </div>
    </div>
  </div>
</template>

<script >
import { defineComponent, reactive } from "vue";
import jsonData from "@/views/5_chatbotDemo/data.json"

export default defineComponent({
  watch: {
    data(newValue) {
      this.addArr('1', this.sendMessage);
      this.replayFnc() // 当监听到有消息传入的时候调用回复方法产生回复
    }
  },
  // props:['sendMessage']
  props: {
    sendMessage: {
      type: String,
      default: "",
    },
    data: 0
  },
  setup() {
    let chatArr = reactive([
      {
        status: '0', // 0-回复，1-问题
        content: '您好，我是你的机器助手，有什么可以帮助到您的吗？'
      }, {
        status: '1',
        content: '我要开始提问啦！'
      }, {
        status: '0',
        content: '请问您想要问什么呢？'
      }
    ]);
    /** 判断问题，产生回复的方法 */
    function replayFnc() {
      let hasQuestion = false
      let replayMessage = '听不懂'
      /** 循环判断是否存在该问题的答案，存在的话就改变回复的内容 */
      for (let index = 0; index < jsonData.length; index++) {
        if(jsonData[index].question.indexOf(this.sendMessage) > -1){
          replayMessage =jsonData[index].replay 
          hasQuestion = true
        }
      }
      addArr('0',replayMessage)
    }

    /** 添加进数组的方法 */
    function addArr(status, content) {
      let obj = {
        status: status,
        content: content
      }
      chatArr.push(obj)
    }
    /** 清屏 */
    function clearScreen(){
      chatArr.length = 0
      console.log(chatArr);
    }
    return {
      clearScreen,
      replayFnc,
      chatArr,
      addArr
    }
  }
});
</script>

<style lang="scss" scoped>
.clear{
  width: 800px;
  margin-bottom: 10px;
  display: flex;
  justify-content: right;
}
.home {
  height: 70vh;
  position: relative;
  width: 800px;
  overflow: auto; // 滚动条
}

// 回复的样式
.reply {
  display: flex;
  margin-top: 5px;

  .content {
    padding: 15px;
    max-width: 500px;
    border: 1px solid;
    color: #676490;
    ;
  }

  .left {
    width: 0px;
    height: 0px;
    border: 15px solid transparent;
    border-right-color: rgba(222, 222, 244);
  }
}

// 提问的样式
.question {
  display: flex;
  margin-top: 5px;
  // background: greenyellow;
  justify-content: right;

  .content {
    padding: 15px;
    max-width: 500px;
    border: 1px solid;
    color: #676490;
  }

  .left {
    width: 0px;
    height: 0px;
    border: 15px solid transparent;
    border-left-color: rgba(222, 222, 244);
  }
}
</style>
