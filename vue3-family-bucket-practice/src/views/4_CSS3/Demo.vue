<template>
  <el-button type="primary" @click=" $router.push('CSS3')">返回</el-button>
  <div>练习页</div>

  <div class="allCode">
    基础使用
    <div class="code">
      <div class="title">基础</div>
      <span class="image1"></span>
    </div>

    <div class="code">
      <div class="title">连写</div>
      <span class="image2"></span>
    </div>
  </div>

  <div class="allCode">
    2 D 效果
    <div class="code">
      <div class="title">中心基点旋转</div>
      <span class="image3"></span>
    </div>

    <div class="code">
      <div class="title">修改基点旋转</div>
      <span class="image4"></span>
    </div>

    <div class="code">
      <div class="title">平移</div>
      <span class="image5"></span>
    </div>

    <div class="code">
      <div class="title">放缩</div>
      <span class="image6"></span>
    </div>
  </div>

  <div class="allCode">
    3 D 效果
    <div class="code">
      <div class="title">旋转-需要给父元素加上透视效果</div>
      <span class="image7"></span>
    </div>

    <div class="code">
      <div class="title">加透视的X轴平移-体现为视觉上放大</div>
      <span class="image8"></span>
    </div>
  </div>

  <div class="box">
    <div class="out">
      <div class="inner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.allCode {
  display: flex;
  margin: 30px;

  .code {
    margin: 10px 100px 0 0;
    perspective: 500px; //透视
  }

  .title {
    margin-bottom: 3px;
  }

  span {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: rgb(255, 156, 156);
    transition: all 2s linear;
  }
}


/**  过渡类型
  transition-timing-function 可以用来设置过渡时的类型，其有以下常用类型：

  ease：先加速后减速
  linear：匀速
  ease-in：加速
  ease-out：减速
  ease-in-out：先加速后减速（较ease速度变化效果明显）
  cubic-bezier：贝塞尔曲线 
*/
.image1 {
  transition-property: width, height;
  /** 设置要过渡的属性为宽高 */
  transition-duration: 3s, 1s;
  /** 指定过渡的时间 */
  transition-delay: 0.5s;
  /** 过渡延迟 */
  transition-timing-function: ease-in;
  /** 过渡类型 */
}

.image1:hover {
  width: 200px;
  height: 200px;
}

/** 连写 */
.image2 {
  // 属性，时间，过滤类型 --- 上面span中有统一写
  transition: all 2s linear;
}

.image2:hover {
  width: 200px;
  height: 200px;
}

// 默认以基点为中心旋转
.image3:hover {
  transform: rotateZ(90deg);
}

// 设置基点
.image4 {
  transform-origin: left bottom;
}

.image4:hover {
  transform: rotateZ(90deg);
}

// 平移
.image5:hover {
  transform: translate(200px, 200px)
}

// 放缩
.image6:hover {
  transform: scale(2)
}

// 3d旋转
.image7:hover {
  transform: rotateX(360deg)
}

// 平移-体现为视觉上放大
.image8:hover {
  transform: translateZ(200px)
}

// 最下面的 test 练习
body {
  perspective: 500px;
}

.out {
  width: 200px;
  height: 200px;
  background-color: rgb(229, 171, 171);
  margin: 100px auto;
  transition: all 2s;
  transform-style: preserve-3d; //开启子元素3D保持
  transform: rotateY(20deg);
}

.inner {
  width: 200px;
  height: 200px;
  background-color: rgb(71, 142, 219);
  transform: rotateX(60deg);
}

.out:hover {
  transform: rotateY(50deg);
}
</style>

