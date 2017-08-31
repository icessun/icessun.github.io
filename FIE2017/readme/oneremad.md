### two
#### 功能
  用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

#### 目的
- JavaScript初体验
- 初步明白JavaScript的简单基本语法，如变量、函数
- 初步了解JavaScript的事件是什么
- 初步了解JavaScript中的DOM是什么


#### 笔记
- 原生js的事件带`on`：
```
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
```
- 简单的`事件兼容处理`
  - `addEventListener`：将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。` this 值是该元素的引用`
```
var EventUtils={
// 事件对象，事件类型，事件处理函数
    addEvent:function(ele,type,event){
    // 浏览器的判断
         if(ele.addEventListener){
         // false 阻止冒泡
             ele.addEventListener(ele,event,false);
          }else if(ele.attachEvent){
               // ie浏览器
               ele.attachEvent("on"+type,event);
           }else{
                ele["on"+type]=event;
            }
     },
     removeEvent:function(ele,type,event){
         if(ele.removeEventListener){
             ele.removeEventListener(type,event,false);
          }else if(ele.detachEvent){
               ele.detachEvent("on"+type,event);
           }else{
               ele["on" + type]=null;
            }
      }
}
```

- 获取输入框的值，这是一个字符串类型，显示在一个标签里面
```
document.getElementById("aqi-input").value   // string

document.getElementById("aqi-display").innerHTML=获取的值
```
[参考资料MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)