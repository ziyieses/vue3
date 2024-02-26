<template>
  <el-button type="primary" @click=" $router.push('CSS3Demo')">to 练习页</el-button>
  <div class="box">
    <div class="inner"></div>
    <div class="leftup"></div>
    <div class="up"></div>
    <div class="rightup"></div>
    <div class="leftdown"></div>
    <div class="down"></div>
    <div class="rightdown"></div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 800px;
  height: 800px;
  margin: auto;
  border: 1px solid;

  >div {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    transition: all 2s linear;
  }

  .inner {
    // border-radius: 50%;
    background: blue;
    top: 350px;
    left: 350px;
  }

  >div:hover{
    transform: rotateZ(90deg);
  }

  .leftup {
    // transform-origin: 300px 200px;
    top: 200px;
    left: 100px;
  }

  .up {
    top: 100px;
    left: 350px;
  }

  .rightup {
    top: 200px;
    right: 100px;
  }

  .leftdown {
    bottom: 200px;
    left: 100px;
  }

  .down {
    bottom: 100px;
    left: 350px;
  }

  .rightdown {
    bottom: 200px;
    right: 100px;
  }

  .inner:hover~.leftup {
    // transform: rotateZ(90deg);
    transform: translate(250px, -100px)
  }

  .inner:hover~.up {
    transform: translate(250px, 100px)
  }

  .inner:hover~.rightup {
    transform: translate(0,300px)
  }

  .inner:hover~.rightdown {
    transform: translate(-250px, 100px)
  }

  .inner:hover~.down {
    transform: translate(-250px, -100px)
  }

  .inner:hover~.leftdown {
    transform: translate(0, -300px)
  }
}</style>
