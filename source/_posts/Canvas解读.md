---
title: Canvas解读
copyright: true
date: 2017-08-24 17:17:51
tags: canvas
keywords: canvas
description: canvas
top: 5
password:
categories: 读书笔记
---
> `HTML5`新增的元素，可以在页面上使用`JavaScript`来控制，画出图形。

### 使用
- 首先要创建一个画布

```
// 宽高是属性，不要设置在style中，否者会发生变形  canvas闭合标签 
<canvas id='myCanvas' width='800' height='800'>当浏览器不支持Canvas的时候，写入的文字</canvas> 
```
- 然后获取渲染的上下文 
   - 无论是绘制那种图形，都要经过这步；每一个画布都有一个渲染的上下文对象，使用`getContext()`方法获取，传入的参数`2d/webgl`：前者表示是平面图案，后者是立体图案
```
// js代码
var myCanvas=document.getElementById('myCanvas');
if(myCanvas.getContext){
   var ctx=myCanvas.getContext('2d');
 }
```
- 最后开始绘制
  - 操作我们获取的渲染上下文这只画笔，由点到线再到面
```
 ctx.benginPath(); // 开始绘制路径，拿起了笔了
 ctx.moveTo(20,20); // 设置绘制路径的起点，相当于画布的坐标（20，20）
 ctx.lineTo(200,20); // 绘制了一条直线，到坐标（200，20）的直线
 ctx.lineWidth=1.0; // 设置线宽
 ctx.lineCap="button"; //设置端点样式:butt(默认),round,square
 ctx.lineJoin="miter";  //设置连接样式:miter(默认),bevel,round
 ctx.strokeStyle="#ff0000"; // 设置线的颜色
 ctx.stroke();  // 进行线的着色，这时整条线才变得可见
 ctx.closePath(); //自动绘制一条当前点到起点的直线，形成一个封闭图形
 
//填充
ctx.fillStyle='red'; // 通过fillStyle来改变填充颜色
ctx.fill(); // 填充

// 先闭合了，再填充
```
`beginPath`方法表示开始绘制路径，`moveTo(x, y)`方法设置线段的起点，`lineTo(x, y)`方法设置线段的终点，`stroke`方法用来给透明的线段着色；否则，在画布里面看不到东西。

### 绘制矩形
```
ctx.fillStyle = 'yellow'; // 给矩形填充颜色，默认是黑色
ctx.fillRect(50, 50, 200, 100); 
```
`fillRect(X,Y,width,height)`里面的四个参数表示：矩形距离画布的位置坐标(x,y)，矩形自己的宽度和高度(width,height)，其绘制的是一个实心的图形；
一定是先填充颜色，在绘制矩形，要不然无法给矩形填充颜色。

```
ctx.strokeRect(10,10,200,100); 
```
`strokeRect()`方法与上一个类似，但是是绘制空心矩形。
```
ctx.clearRect(100,50,50,50);  // 清除某个矩形区域的内容
```
### 绘制弧形
> 通过这个方法，可以绘制圆

```
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```
圆心坐标（x，y）相当于画布的坐标；半径:radius；扇形的起始角度和终止角度(startAngle, endAngle,弧度为单位)，是否逆时针：anticlockwise，（true:逆时针；false：顺时针）
- 绘制实心圆
```
ctx.beginPath();
ctx.arc(60，60，50，0，Math.PI*2,true);
ctx.fillStyle="#000";
ctx.fill();
```
- 绘制空心圆
```
ctx.beginPath(); 
ctx.arc(60, 60, 50, 0, Math.PI*2, true); 
ctx.lineWidth = 1.0; 
ctx.strokeStyle = "#000"; 
ctx.stroke();
```


<div id="music163player">

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>

</div>
