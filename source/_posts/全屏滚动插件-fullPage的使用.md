---
title: 全屏滚动插件----fullPage的使用
copyright: true
date: 2017-09-28 10:04:02
tags: fullPage
keywords: fullPage,全屏滚动插件
description: fullPage
top: 6
password:
categories:  读书笔记
---

> fullPage.js 是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站

#### 功能：
- 支持鼠标滚动
- 支持前进后退和键盘控制
- 多个回调函数
- 支持手机、平板触摸事件
- 支持 CSS3 动画
- 支持窗口缩放
- 窗口缩放时自动调整
- 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等

#### 兼容性：
> 支持jquery 1.7+，浏览器支持IE8+，Chrome，Firefox，Opera，Safari。


#### 使用方法
- 引入文件
```
<link rel="stylesheet" href="css/jquery.fullPage.css">
<script src="js/jquery.min.js"></script>

<!-- jquery.easings.min.js 用于 easing 参数，也可以使用完整的 jQuery UI 代替，如果不需要设置 easing 参数，可去掉改文件 -->
<script src="js/jquery.easings.min.js"></script>

<!-- 如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要 -->
<script src="js/jquery.slimscroll.min.js"></script>

<script src="js/jquery.fullPage.js"></script>
```
- HTML文件
```
<div id="fullpage" class="fullpage">
    <div class="section">111</div>
    <div class="section">2222</div>
    <div class="section">3333</div>
    <div class="section">4444</div>
    <div class="section">5555</div>
    <div class="section">6666</div>
</div>
```
每一屏是一个section，默认显示第一屏，要想指定显示那一屏，可以在对应的section加上class=“active”；如：
`<div class='section active'>第二屏</div>`
接着，要想在一屏里面在内嵌一个屏，也就是一屏里面再有好几屏在显示，可以在section中添加slide，如：
```
<div id="fullpage" class="fullpage">
    <div class="section">111</div>
    <div class="section">
        <div class="slide">第二屏里面的第一屏</div>
        <div class="slide">第二屏里面的第二屏</div>
        <div class="slide">第二屏里面的第三屏</div>
        <div class="slide">第二屏里面的第四屏</div>
    </div>
    <div class="section">3333</div>
    <div class="section">4444</div>
    <div class="section">5555</div>
    <div class="section">6666</div>
</div>
```
- Javascript调用
```
$(function(){
    $('#fullpage').fullpage(
       // 一些配置选项
     );
})
```
#### 导航菜单的使用
> 页面滚动时，导航栏也自动定位到导航栏对应的标签；当点击标签，自动滚动到对应的页面
- 顶部导航菜单
```
导航栏结构：

<ul id="menu">
   <li data-menuanchor="firstPage" class="menuList"><a href="#firstPage">首页</a></li>
   <li data-menuanchor="secondPage" class="menuList"><a href="#secondPage">作品</a></li>
   <li data-menuanchor="thirdPage" class="menuList"><a href="#thirdPage">技能</a></li>
   <li data-menuanchor="fourthPage"class="menuList"><a href="#fourthPage">联系方式</a></li>
</ul>


配置顶部导航栏：(写在fullpage外面，footer写在fullpage里面)

$("#fullpage").fullpage({
     menu:true,  // 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
     anchors:["firstPage","secondPage","thirdPage","fourthPage"], // 定义锚链接 导航栏显示的标签
    
 })
```
`data-menuanchor`是`fullpage`要求的，连接的`herf`属性与前面`data-menuanchor`的值一一对应，配置里面的`anchors`与`data-menuanchor`一样，类似与`a`连接的锚点功能；最好是给菜单设置一个ID名，因为是唯一的，其实设置class名也是一样的。

- 侧边导航菜单
```
需要在js里面进行配置
$("#fullpage").fullpage({
     navigation:true,  // 是否显示项目导航
      navigationPosition:"right", // 项目导航的位置，可选 left 或 right
     navigationTooltips:["简介","项目","技能","联系方式"], //项目导航的 tip
 })
```
由于默认的侧边栏导航栏的颜色是白色，其有一个配置颜色的属性，但是好像不起作用，故待解决：`navigationColor`

![侧边导航栏](http://upload-images.jianshu.io/upload_images/1811036-753f4b80b7eca704.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 自定义`section`的高度
> 也就是`footer`的定义

 实现自定义高度的`section`，在需要的`section`里面添加`.fp-auto-height`类，就可以实现自定义高度，不算在`section`的高度里面。当你直接在`section`里面添加`.fp-auto-height`类时，通过对齐添加高度，会发现高度设置没有成功。查阅网上的资料，说是在其`section`里面在添加一个div元素，通过设置div的样式，来控制高度：
```
<div class="section fp-auto-height">
        <footer>
            我是页脚
        </footer>
 </div>

.fp-auto-height footer{
    height:400px;    // 成功
}
```
#### 页脚和上一屏出现留白的问题
> 顶部导航覆盖页面内容的问题：`paddingTop`

由于设置了` paddingTop`，可以使得一屏之间的内容与顶部导航栏有距离，但是也会产生页脚和上一屏出现留白的问题；对于这个问题，首先会想到通过单独设置其最后一屏的样式，去掉其` paddingTop`，结果发现没有作用，再想是否是重叠样式的等级不够，使用`style样式`也无济于事。

故想，fullpage为其section添加paddingTop是否使用的js去修改添加，尝试使用js去覆盖其原本的样式，单独给其添加paddingTop：
```
// 解决导航底部覆盖页面内容的问题
for(var i=0;i<5;i++){
   $(".section").eq(i),css({
        paddingTop:"100px",
   })
}
```



