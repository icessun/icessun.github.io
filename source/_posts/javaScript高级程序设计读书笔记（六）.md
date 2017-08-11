---
title: javaScript高级程序设计读书笔记（六）
copyright: true
date: 2017-08-10 10:57:20
tags: javascript
keywords: javascript高级程序设计
description:
top: 5
password:
categories: 读书笔记
---
> 面向对象的程序设计，面向对象的语言有类的概念，通过类创造多个具有相同的属性和方法的对象。

<!-- more -->


### 对象
#### 属性类型
 - 数据属性：包含一个数据值的位置，可以读取和写入
   - `[[Configurable]]`：是否可以delect删除属性
   - `[[Enumerable]]`：是否可以for-in循环对象
   - `[[Writable]]`：是否可以修改属性的值
   - `[[Value]]`：属性的数据值
 - 访问器属性：不包含数据值，包含下面两个函数
   - `getter`
   - `setter`


####创建对象
> 以前使用的创建对象的方法（直接new Object和字面量），有明显的缺点：会出现大量冗余的代码。

##### 工厂模式
>  用函数来封装以特定接口创建对象的细节，根据接收的参数来创建一个包含所有必要信息的对象。缺点是无法解决对象识别的问题，就是怎么知道一个对象的类型。

```
function creatPerson(name,age,job){
   var o=new Object(); // 创建一个对象
   o.name=name;
   o.age=age;
   o.job=job;
   o.sayName=function(){
       console.log(this.name);
    };
    return o;  // 返回这个创建的对象
 }

var preson=creatPerson('icessun',18,'sofeware engineer')
```

##### 构造函数模式
> Object和Array这样原生的构造函数，在运行时会自动出现在执行环境中，也可以自定义构造函数，可以直接创建对象。使用构造函数重写工厂模式代码，有以下不同：
> - 没有显示的创建对象
> - 直接将属性和方法赋给this对象
> - 没有return语句


> 问题：每个实例都重复的创建方法，包含了不同的Function实例，导致不同的作用域链和标识的解析，person1和person2中的方法是不相同的。虽然可以在全局定义一个函数，然后在构造函数里面将属性设置为全局的函数，但一个全局函数只能被一个对象调用，物不能尽其所用，也没有封装可言。

```
 function Person(name,age,job){
     this.age=age;
     this.name=name;
     this.job=job;
     this.sayName=function(){
         console.log(this.name);
      };
  }
  var person1=new Person('icessun',18,"software Enginner");
  var person2=new Person('icessun1',19,'student');
```

使用new方式（调用构造函数的方法）创建的对象实例， 会经历下面四步：
   - 创建一个新对象
   - 将构造函数的作用域赋给新对象，this就指向这个新对象
   - 执行构造函数中的代码，添加属性和方法
   - 返回新对象

这样的每一个实例对象身上都有一个constructor（构造函数）属性，指向Person，可以用来标识对象类型的（特定的类型）；但是检测对象类型一般使用instanceof操作符可靠一些。

##### 原型模式
> 创建的每一个函数都有一个prototype（原型）属性，指向一个对象；这个对象（原型对象 ）的用途是包含可以由特定类型的所有实例共享的属性和方法。prototype就是通过调用构造函数而创建的实例的原型对象。好处：可以让所有的实例共享原型对象包含的属性和方法，不用在构造函数里面定义实例的信息，而是直接添加到原型对象中。

```
Person.prototype.constructor------> Person 
// 空的构造函数
function Person(){
}
// 属性和方法都添加到Person的prototype属性中，由实例共享
Person.prototype.name="icessun";
Person.prototype.age="18";
Person.prototype.job="engineer";
Person.prototype.sayName=function(){
     console.log(this.name);
 };
var person1=new Person(); // 调用构造函数创建对象实例
preson1.sayName(); // icessun
var person2=new Person();
person2.sayName();// icessun

 console.log(person1.sayName == person2.sayName); // true
```

- 理解原型对象

> 创建一个函数就会为该函数创建一个`prototype`属性，指向函数的原型对象`函数.Prototype`；所有的原型对象都自动获得一个`constructor`（构造函数）属性，这个属性包含一个指向`prototype`属性所在函数的指针。构造函数创建的实例，其内部有一个指针`[[Prototype]](或者)__proto__`，指向构造函数的原型对象，这个链接是在实例和构造函数的原型对象之间的。


![原型对象和构造函数和实例对象之间的关系](http://upload-images.jianshu.io/upload_images/1811036-4b8b7a5e218b66cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Person.prototype指向原型对象，而Person.prototype..constructor有指向Person。原型对象中除了包含constructor属性之外，还包括后来添加的其他属性。Person的实例都包含一个内部属性指向Person.prototype，与构造函数没有直接的关系。在所有的实现中都无法访问到[[Prototype]]，但是可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系，如果[[Prototype]]指向调用isPrototypeOf()方法(ECMAScript 5中新方法：Object.getPrototypeOf())的对象（Person.prototype），那就返回true

```
console.log(person.prototype.isPrototypeOf(person1)) //true 
console.log(person.prototype == Object.getPrototypeOf(person1)) //true 
console.log(Object.getPrototypeOf(person1).name);// icessun  Object.getPrototypeOf(person1) 直接返回[[Prototype]]的值
```

> 当查找对象的属性时，现在实例找，没有找到才去原型对象上面找；可以通过实例对象访问保存在原型中的值，但是却不能通过对象实例重写原型中的值，当与原型中的属性同名的时，会自动屏蔽原型中的属性。对象实例可以访问到原型对象上`constructor`属性，使用`delete 实例属性`可以删除实例的属性，重新访问原型上面的属性；

###### 确定属性是在原型对象上面还是实例对象上面
- `hasOwnProperty()`可以检测一个属性是存在与实例中，还是存在原型中。属性存在实例对象里面就返回`true`
- `in操作符`：对象能够访问给定属性的时候，返回`true`，无论属性是在原型还是实例上；`属性  in   对象 // 只要存在就返回 true`

```
 function  hasPrototypeProperty(object,name){
     return !object.hasOwnProperty(name) && (name in object);
     // 返回false 就是实例属性  否者是原型属性
  }
```
- 为了更好的减少输入，我们可以使用一个对象字面量来表示整个原型对象

```
function Person(){};

// 把Person.prototype设置为一个以字面量的形式创建的一个新对象，重写了默认的原型对象prototype对象
Person.prototype={
   name:'icessun',
   age:18,
   job:'Engineer',
   sayName:function(){
      console.log(this.name);
    },
    constructor:Person;  // 解决`constructor`属性不再指向`Person函数`的问题，但是会导致constructor属性可以枚举
 }
```

但是这种方法的`constructor`属性不再指向`Person函数`，前面说过，每创建一个函数，就会同时创建它的原型对象`prototype对象`，而这个对象也会自动获取`constructor属性`。这方法的`constructor`属性指向新对象的`constructor属性，指向Object构造函数`，通过`constructor`属性无法确定对象的类型

###### 原型的动态性

> 实例获取原型对象上的属性和方法的时候，是一次查找过程；所以在原型对象上面的修改，都能够立即在实例上面反映出来。即使是先创建实例后修改原型对象也是一样的。

- 实例和原型之间的松散链接关系，连接是一个指针。
- 调用构造函数的时候，会为实例添加一个指向最初原型的指针`[[protorype]]`，要是把原型修改为另外一个对象就切断了实例与原型对象的最初的连接。
- 实例中的指针仅仅指向原型，而不是构造函数

###### 原生对象的原型
> 通过原生对象的原型，不仅可以取得所有默认方法的引用，而且也可以定义新的方法。可以向自定义对象的原型引用修改原生对象的原型，可以随时添加方法

```
Array.prototype找到sort（）方法
String.prototype找到substring（）方法

为基本的包装类型String添加自定义方法

String.prototype.start=function(text){
     return this.indexOf(text) == 0; // 传入的字符串位于一个字符串的开始 返回true
 };

var msg='icess un';
console.log(msg.start('icess')); // true
```


###### 原型对象的问题

<div id="music163player">

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>

</div>
