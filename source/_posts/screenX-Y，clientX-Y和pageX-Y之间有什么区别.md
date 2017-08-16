---
title: screenX / Y，clientX / Y和pageX / Y之间有什么区别?
copyright: true
date: 2017-08-16 14:29:26
tags: javascript
keywords: screenX / Y，clientX / Y和pageX / Y
description: 
top: 5
password:
categories: 读书笔记
---
![图|网络](http://upload-images.jianshu.io/upload_images/1811036-623f95e3ed6518a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<!-- more -->

### offsetX，offsetY
> `IE浏览器`特有的事件属性
> 鼠标点击的位置相当于`事件源元素`的位置坐标，以元素盒子模型的内容区域的左上角为参考点

### clientX，clientY
> 设置或获取鼠标指针位置相对于`浏览器视口（内容区域的左上角）`的坐标，与浏览器是否有滚动条无关
> 相对于页面的可见部分的左上角，通过浏览器窗口“看到”。
> 相对于`viewport`CSS像素的坐标。

### screenX，screenY
> 设置或获取获取鼠标指针位置相对于`物理屏幕的左上角`的坐标，当改变屏幕的`分辨率`的时候，坐标会随之改变
> 相对于`screen`设备像素的坐标。

- 对于这个属性` probably never need `

### pageX，pageY
> 相对于浏览器中完`全呈现的内容区域`的左上角，此参考点位于左上方的网址栏和后退按钮下方。如果在页面中嵌入可嵌入的可滚动页面，并且用户移动滚动条，则可以实际改变位置。
> 坐标相对于整个渲染页面的左上角（包括滚动隐藏的部分）
> 相对于`<html>`CSS像素中元素的坐标。

- pageX与clientX的区别

![pageY和clientY的差异，图来自网络](http://upload-images.jianshu.io/upload_images/1811036-510a2fbcd5bb2d17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

也就是说，当浏览器没有滚动条的时候，pageX和clientX是一样的

```
document.addEventListener('click', function(e) {
  console.log(
    'page: ' + e.pageX + ',' + e.pageY,
    'client: ' + e.clientX + ',' + e.clientY,
    'screen: ' + e.screenX + ',' + e.screenY)
}, false);
```


[参考资料1](https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y?rq=1)
[参考资料2](https://www.quirksmode.org/dom/w3c_cssom.html#t03)


<div id="music163player">

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>

</div>
