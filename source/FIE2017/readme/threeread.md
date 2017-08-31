### three
#### 功能
参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

#### 目的
- 在上一任务基础上继续JavaScript的体验
- 接触一下JavaScript中的高级选择器
- 学习JavaScript中的数组对象遍历、读写、排序等操作
- 学习简单的字符串处理操作

#### 笔记
- `innerHTML`与`innerText`的区别？
> 前者获取的是包含标签代码的字符串，后者是不包含标签代码的字符串


- 怎么样获取data数据，以一个数组的形式返回？
> 1. 想着是使用`innerText.replace('空气质量：'，','`字符串的替换方法，结果城市名和数字没有分开
> 2. 接着使用字符串的`str.split(',')`，返回以`,`分割的数组，达到目的

- 重点是函数封装的思想，每个功能封装一个函数
- 数组的排序，动态创建元素的方法，`appendChild()`


[参考资料MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)