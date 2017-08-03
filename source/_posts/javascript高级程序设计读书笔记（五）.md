---
title: javascript高级程序设计读书笔记（五）
<<<<<<< HEAD
date: 2017-08-03 10:20:13
tags: javascript
keywords: javascript高级程序设计
description: 
top: 5
copyright: true
password:
categories: 读书笔记
=======
date: 2017-07-31 17:14:52
tags: 读书笔记
keywords: javascript高级程序设计
description:
top: 5
copyright: true
password:
categories: javascript
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
---

>   引用类型

对象是某个特定的引用类型的实例。新对象是使用`new`操作符后跟一个构造函数来创建的。
<<<<<<< HEAD
```
  var preson=new Object();
```
<!-- more -->
=======

<!-- more -->

```
  var preson=new Object();
```
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
### `Object`类型

- 创建对象的方法
   - `new`+构造函数 ：`var preson=new Object()`
   - 对象字面量 ：向函数传递大量`可选参数`的首选方式
   
   ```
   var person={
              name:'icessun',    <=====>var person={ };
              age:18
      }

   访问对象的属性：person.属性；person[属性]，【】一般是通过变量来访问属性
   ```
### `Array`类型
```
var colors=new Array();  里面可以写入一个数值，表示数组的长度new Array(20)；也可以直接在里面写入数组的值new Array('red','blue','green')

字面量方式：
var colors=['red','blue','green']  //不会调用Array的构造函数

```
- 检测数组
   - `instanceof`
      - 是在单一的全局执行环境中检测数组，对于从一个执行环境中传递到另一个执行环境中的数组是检测不出来的
   - `Array.isArray()`
      - 这个方法确定某个值到底是不是数组，而不管是在哪个全局执行环境创建的

- 转换方法
> 所有的对象都具有`toLocaleString(),toString(),valueOf()`

   - `toString()`：默认是用`逗号`隔开返回数组的每个值的字符串
   - `join([分隔符])`：使用不同的分隔符来返回数组每个值的字符串

- 数组中的栈方法
> 后进先出(LIFO)的数据结构，栈中项的插入和删除只发生在----栈的顶部。

  - `push()`
     - 传入要在数组末尾添加的数据，返回修改后数组的长度
  - `pop()`
     - 删除数组末尾的最后一项（取得数组中的最后一项），返回被删除的项

- 数组中的队列方法
> 先进先出(FIFO)的数据结构，在队列的末端添加项，在队列的 前端移除项。

    - `shift()`
      - 移除数组中的第一个项，并且返回移除的项，同时将长度减1
      - 结合`push()`方法，可以实现队列操作
    - `unshift()`
      - 在数组的前端添加多个项并且返回修改后数组的长度；结合`pop()`方法，可以实现队列操作

- 数组中的重排序方法
   - `reverse()`
      - 只是把数组颠倒个顺序，并不会对齐排序，返回经过排序的数组
   - `sort()`
      - 默认是按照升序排列数组；其默认会调用每一个数组项的`toString()`转为`字符串进行比较`
  
		   ```
		       var num1=[0,1,5,10,15]
		       num1.sort() ; //     [0, 1, 10, 15, 5]
		   ```
<<<<<<< HEAD
           这个方法不是我们需要的排序方法，所以一般在里面传递一个比较函数
           ```
              var num=[2,1,4,3,6];
              num.sort(function(a,b){
                       return a-b;  // 从小到大
                       return b-a; // 从大到小
                 })
           ```
- 操作数组的方法

   - `concat()`：连接多个数组的方法
   
=======
   
          这个方法不是我们需要的排序方法，所以一般在里面传递一个比较函数
   
         ```
          var num=[2,1,4,3,6];
          num.sort(function(a,b){
                   return a-b;  // 从小到大
                   return b-a; // 从大到小
            })
         ```
- 操作数组的方法
   - `concat()`：连接多个数组的方法
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
      - 先会创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新创建的数组；
      - 没有传递参数，就是`复制当前的数组`，返回当前数组的副本
      - 传递参数，就是把参数插入在当前的数组的副本的末尾,连接多个数组，返回修改的数组
     
   - `slice()`
      - 一个参数：返回从该参数指定的位置开始到当前数组的末尾的所有项，数组的形式返回。
      - 两个参数：返回起始位置到结束位置之间的项，但是不包括结束位置的项。`包前不包后`
      - 不影响原数组，可以传入负数，加上数组长度来计算
      - 不传参数的时候，就是`复制原数组`

<<<<<<< HEAD

 - `splice()`
 
=======
 - `splice()`
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
> 主要用途就是向数组中部插入项，返回一个数组，该数组包含从原始数组删除的项，没有就返回一个空数组

 - `删除`：可以删除任意数量的项
      - `splice(删除的第一项，要删除的项数)`
 - `插入`：在指定位置插入任意项
      - `splice(插入起始位置，0，要插入的项（可以多个）)`
<<<<<<< HEAD
 - `替换`：在指定位置插入任意项
=======
  - `替换`：在指定位置插入任意项
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
      - `splice(起始位置，删除的项，要插入的项)`

- 位置方法
   - `indexOf(要查找的项，[开始查找起点位置的索引])`：开头找，找到返回，没有找打返回-1，严格相等
   - `lastIndexOf(要查找的项，[开始查找起点位置的索引])`：结尾找，但是返回的索引值还是从前面数

- 迭代方法
> 接收两个参数，要在数组的每一个项上面运行的函数和（可选的）运行该函数的作用域对象---影响`this`的值，函数参数都接收三个参数：数组项的值，该项在数组中的索引值，数组对象本身

  - `every()`：如果该函数参数对每一项都返回true，则返回true
  - `filter()`：会返回true的项组成的数组
  - `forEach()`：没有返回值，本质和for循环迭代数组一样
  - `map()`：返回每次函数调用返回的结果组成的函数
  - `some()`：函数参数对某一项返回true，则返回true
  
```
var numbers=[1,2,3,4,5,4,3,2,1];
var everyR=numbers.every(function(item,index,array){
      return (item>2);
  })
console.log(everyR);  // false

var someR=numbers.some(function(item,index,array){
        return (item>2);
 })
 console.log(someR);  // true

var filterR=numbers.filter(function(item,index,array){
      return (item>2);
 })
 console.log(filterR); // [3,4,5,4,3]

var mapR=numbers.map(function(item,index,array){
      return (item*2);
 })
 console.log(mapR);  // [2,4,6,8,10,8,6,4,2]
<<<<<<< HEAD
 
=======
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
```



### `Date`类型

> 1970年1月1日开始经过的毫秒数

- 创建一个日期对象 ：`var now=new Date()`
  - 没有传入参数：自动获取当前时间和日期
  - 传入参数：`var someDate=new Date('8/1/2017')`，后台调用`Date.parse()`转化，获取到2017年8月1号的毫秒数

- 继承的方法
   - `toLocaleString()`
      - 按照浏览器的设置时区返回日期和时间
   - `toString()`
     - 返回带有时区信息的日期和时间
     - 与上一个方法其实没有什么差别，显示时间来说
   - `valueOf()`
     - 返回日期的毫秒数，可以用来比较日期值

#### 日期格式化

  - `toDateString()`：以特定格式显示星期，月，日，年
  - `toTimeString()`：以特定格式显示时，分，秒，时区
  - `toLocalDateString()`
  - `toLocalTimeString()`
  - `toUTCString()`

### `RegExg()`类型

> 支持正则表达式  `var expression= /pattren/flags`
> `pattren模式：`
> `flags标志：`g全局，i不区分大小写，m多行模式，到达一行文本末尾还会继续查找下一行中是否存在

- 元字符
> 转义，匹配的字符串里面包含元字符的话
>  `{ [ \ ^ $ | ] ? * + .} ( )`


![字面量转字符串](http://upload-images.jianshu.io/upload_images/1811036-7311264906caafc1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 创建正则表达式的方法
   - 字面量
     - `var pattern=/\.at/gi`：匹配所有的`.at`不区分大小写
   - `RegExp()函数`
     - `var pattern=new RegExp('[bc]at','i')`：接收字符串形式的匹配字符，和标志，里面不能直接使用字面量，
   - ` 区别：ECMAScript3中`
     -  字面量始终会共享同一个`RegExp()实例`，而构造函数创建的每一个新的`RegExp实例`都是一个新的实例

- `RegExp`实例方法
  - `exec()`
     - 捕获数组
     - 一个参数：应用模式的字符串
     - 返回值：匹配的数组`额外的属性：input（应用正则表达式的字符串） index（匹配项字符串中的位置）/null`
     - 当在匹配的字符串里面带有`g全局模式的时候`，每次调用`exec()`都会返回字符串中的下一个匹配项，直到结尾。`lastIndex`每次都会增加

 - `test()`
   - 接收一串字符串
   - 返回true/fasle

 - `toString()`和`toLocaleString()`
   - 返回正则表达式的字面量

### `Function类型`
> 函数是对象，每一个函数都是`Function类型`的实例，函数名实际上是一个指向函数对象的指针，操作函数，最重要的是操作函数的属性和方法；`prototype`：保存着所有的实例方法；其是不可以枚举的，不能使用for  in循环

#### 没有重载**重点**

<<<<<<< HEAD
> 重载：让类以统一的方式处理不同类型数据的一种手段。重载Overloading是一个类中多态性的一种表现。方法名要一样，但是参数类型和个数不一样，返回值类型可以相同也可以不相同。
=======
> 重载：当一个函数传递的参数的
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719

- 函数声明和函数表达式 
> 解析器在向执行环境中加载数据的时候，会先读取函数声明（函数变量提升），并使其在执行任何代码之前都可以访问，等到解析器真正要执行函数所在的代码行的时候，才会执行函数表达式
  
  ```
   alert(sum(10,10))
   function sun(num1,num2){
          return num1+num2  // 把函数的声明放在执行环境顶部，但是我们使用函数表达式的时候，就会出现错误，不会函数变量提升
    }
  ```
   
- 函数内部属性
   - `arguments`
     - 类数组对象，包含传入函数中的所有参数，主要是用来保存函数参数的
     - 还有一个`callee属性`，是一个指针，指向拥有`arguments`对象的函数
<<<<<<< HEAD
     
   ```
     // 阶乘函数
     function factoriai(num){
      if(num<=1){
      return 1;
       }else{
         return num*arguments.callee(num-1);  // num*facoriai(num-1)
       }
     }   
   ```   

好处是在于：不需要知道函数的名字就可以完成递归调用，降低函数体内的代码与函数名的耦合度

   - `this`
     - 函数执行的环境对象
     - 全局函数，指向`window`；谁调用函数就指向谁
     
   - 函数中的非继承的方法：`apply(),call()`
     - 设置函数体内的`this`对象的值
     - `apply()`
         - 参数：运行函数的作用域（必须传入），参数数组（arguments对象或者Array实例）
     - `call()`
         -  参数：运行函数的作用域（必须传入），参数必须逐个列举出来
 
   - 这两种方法没有什么不同，就是取决你给函数传递的参数的方式，真正的作用是扩充函数运行的作用域，对象不需要与方法有任何的耦合关系。
 
     ```
        window.color='red';
        var o={color:'blue'}
        function sayColor(){
              alert(this.color)
        }
        sayColor();  // red
        sayColor.call(this);  // red
        sayColor.call(o);  // blue    
     ```
=======

 ```
     阶乘函数：
      
      function factoriai(num){
            if(num<=1){
                 return 1;
             }else{
                 return num*arguments.callee(num-1);  // num*facoriai(num-1)
              }
       } 
       
 ```   
   
  好处是在于：不需要知道函数的名字就可以完成递归调用，降低函数体内的代码与函数名的耦合度


  - `this`
    - 函数执行的环境对象
    - 全局函数，指向`window`；谁调用函数就指向谁

 - 函数中的非继承的方法：`apply(),call()`
  - 设置函数体内的`this`对象的值
   - `apply()`
     - 参数：运行函数的作用域（必须传入），参数数组（arguments对象或者Array实例）
   - `call()`
     -  参数：运行函数的作用域（必须传入），参数必须逐个列举出来
 
 - 这两种方法没有什么不同，就是取决你给函数传递的参数的方式，真正的作用是扩充函数运行的作用域，对象不需要与方法有任何的耦合关系。
 
 ```
   window.color='red';
   var o={color:'blue'}
   function sayColor(){
         alert(this.color)
    }
    sayColor();  // red
    sayColor.call(this);  // red
    sayColor.call(o);  // blue
 ```
 
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
   - `bind()`
     - 创建一个函数的实例，其`this`值会绑定到传给`bind()`函数的值。
     - 即使在全局作用域调用这个函数，函数里面的`this`也是指向绑定的函数的`this`
   
<<<<<<< HEAD
   
     ```
         window.color='red';
         var o={color:'blue'}
         function sayColor(){
              alert(this.color)
         }
           var objectS=sayColor.bind(o);
         objectS();  // blue  全局调用也是执行o对象中的this
     ```
=======
   ```
      window.color='red';
   var o={color:'blue'}
   function sayColor(){
         alert(this.color)
    }
 var objectS=sayColor.bind(o);
 objectS();  // blue  全局调用也是执行o对象中的this
   ```
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
   
###  基本包装类
  - `Boolean`
  - `Number`
  - `String`
  - 映射到同名的基本类型

### 单体内置对象
- `URL编码方法`
  - `encodeURI()`：整个url，空格换成了`%20`  对应的`decodeURI()`
  - `encodeURIComponent()`：url中的某一段

- `eval()`
  - 一个完整的解析器
  - 参数：一个；要`执行`的字符串

<div id="music163player">
<<<<<<< HEAD
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>
=======
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>
>>>>>>> b9a80be9508673fc2660775381cdcb0ad1661719
</div>
