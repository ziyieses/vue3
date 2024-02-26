<template>
    <!-- 原型模式 -->
    <h2>原型模式</h2>
    <br />
    <span>用原型实例指定创建对象的种类，并且通过拷贝这些原型来创建新的对象。 </span>
    <img src="https://segmentfault.com/img/remote/1460000022886195" alt="">
    <br />
    <br /> 请查看控制台
    ----
    <br />  ----
    <br />  ----
    <br /> 
</template>

<script lang="ts" setup>
interface Prototype {
    clone():Prototype;
}

class Dog implements Prototype {
    public name: string;
    public birthYear: number;
    public sex: string;
    public presentYear: number;
    constructor() {
        this.name = "lili";
        this.birthYear = 2015;
        this.sex = "男";
        this.presentYear = 2018;
    }

    public getDiscription(): string {
        return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
    }

    // 实现复制
    public clone(): Prototype {
        return Object.create(this);
    }
}

// 使用
const dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
const dog1 = Object.create(dog);
console.log(dog1.getDiscription());
const dog2 = dog1.clone()
dog2.name = '小哈'
console.log(dog2.getDiscription());


</script>

<style lang="scss" scoped>
</style>
