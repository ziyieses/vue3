<template>
    <!-- 工厂方法模式 -->
    <!-- 定义一个用于创建对象的接口，让子类决定实例化哪一个类，
        Factory Method使一个类的实例化延迟到了子类。  -->
    <h2>工厂方法模式</h2>
    <br />
    <span>定义一个用于创建对象的接口，让子类决定实例化哪一个类，
        Factory Method使一个类的实例化延迟到了子类。</span>
    <img src="https://segmentfault.com/img/remote/1460000022886192" alt="">
    <br />
    <el-button @click="add1">add obj 1</el-button>
    <el-button @click="add2">add obj 2</el-button>
    <br /> 请查看控制台
</template>

<script lang="ts" setup>
// 抽象产品接口
interface Product {
    draw: Function
}

// 具体产品一
class ConcreteProduct1 implements Product {
    private shap: string
    constructor() {
        this.shap = '圆形'
    }
    draw() {
        console.log(this.shap);
    }
}

// 具体产品二
class ConcreteProduct2 implements Product {
    private shap: string
    constructor() {
        this.shap = '矩形'
    }
    draw() {
        console.log(this.shap);
    }
}

// 简单工厂
class SimpleFactory {
    public static createProduct(type: number): Product | null {
        let product: ConcreteProduct1 | ConcreteProduct2 | null = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        } else if (type === 2) {
            product = new ConcreteProduct2();
        }

        return product;
    }
}

// 使用
const add1 = () => {
    let product = SimpleFactory.createProduct(1);
    console.log(product);
    product?.draw()
}
const add2 = () => {
    let product = SimpleFactory.createProduct(2);
    console.log(product);
    product?.draw()
}
</script>

<style lang="scss" scoped></style>
