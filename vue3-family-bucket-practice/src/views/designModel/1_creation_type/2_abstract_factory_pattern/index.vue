<template>
    <!-- 抽象工厂模式 -->
    <h2>抽象工厂模式</h2>
    <br />
    <span>提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们的具体类。</span>
    <img src="https://segmentfault.com/img/remote/1460000022886197" alt="">
    <br />
    <el-button @click="windows">window</el-button>
    <el-button @click="mac">mac</el-button>
    <br />请查看控制台
    ----
    <br /> ----
    <br /> ----
    <br />
</template>

<script lang="ts" setup>

// 假设我们要创建一个跨平台的图形用户界面（GUI），
// 其中包括按钮（Button）和文本框（TextField）两种组件，
// 分别有Windows和Mac两种风格的实现。

/** 定义抽象接口 */
// 按钮的抽象接口
interface Button { }
// 文本的抽象接口
interface TextField { }

/** 定义具体产品的实现 */
// Windows 风格按钮实现
class WindowsButton implements Button {
    public render() {
        console.log('渲染Windows风格的按钮');
    }
}

// Windows 风格文本框实现
class WindowsTextField implements TextField {
    public display() {
        console.log('显示Windows风格的文本框');
    }
}

// Mac 风格按钮实现
class MacButton implements Button {
    public render() {
        console.log('渲染Mac风格的按钮');
    }
}

// Mac 风格文本框实现
class MacTextField implements TextField {
    public display() {
        console.log('显示Mac风格的文本框');
    }
}

/** 定义抽象工厂 */
// 抽象工厂接口
interface GUIFactory {
    createButton: Button
    createTextField: TextField
}

/** 定义具体工厂的实现 */
// Windows 风格工厂实现
class WindowsGUIFactory implements GUIFactory {
    public createButton(): WindowsButton {
        return new WindowsButton();
    }

    public createTextField(): WindowsTextField {
        return new WindowsTextField();
    }
}

// Mac 风格工厂实现
class MacGUIFactory implements GUIFactory {
    public createButton(): MacButton {
        return new MacButton();
    }

    public createTextField(): MacTextField {
        return new MacTextField();
    }
}
const windows = () => {
    let windowsFactory: WindowsGUIFactory = new WindowsGUIFactory();
    let windowsButton: WindowsButton = windowsFactory.createButton();
    let windowsTextField: WindowsTextField = windowsFactory.createTextField()
    windowsButton.render(); // 输出：渲染Windows风格的按钮
    windowsTextField.display(); // 输出：显示Windows风格的文本框
}
const mac = () => {
    let macFactory: WindowsGUIFactory = new MacGUIFactory();
    let macButton: MacButton = macFactory.createButton();
    let macTextField: MacTextField = macFactory.createTextField();
    macButton.render(); // 输出：渲染Mac风格的按钮
    macTextField.display(); // 输出：显示Mac风格的文本框
}

/** 另一种案例 */
// 抽象工厂接口
interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

// 抽象产品A接口
interface AbstractProductA { }

// 抽象产品B接口
interface AbstractProductB { }

// 具体工厂1
class ConcreteFactory1 implements AbstractFactory {
    constructor() { }
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

// 具体工厂2
class ConcreteFactory2 implements AbstractFactory {
    constructor() { }
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

// 具体产品A1
class ConcreteProductA1 implements AbstractProductA { }
// 具体产品A2
class ConcreteProductA2 implements AbstractProductA { }
// 具体产品B1
class ConcreteProductB1 implements AbstractProductB { }
// 具体产品B2
class ConcreteProductB2 implements AbstractProductA { }

// 使用
const factory1: AbstractFactory = new ConcreteFactory1();
const factory2: AbstractFactory = new ConcreteFactory2();
const productA1: AbstractProductA = factory1.createProductA();
const productA2: AbstractProductA = factory2.createProductA();
const productB1: AbstractProductB = factory1.createProductB();
const productB2: AbstractProductB = factory2.createProductB();

console.log('productA1', productA1);
console.log('productA2', productA2);
console.log('productB1', productB1);
console.log('productB2', productB2);


</script>

<style lang="scss" scoped></style>
