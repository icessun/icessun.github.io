### five  排序算法 可视化
#### 功能
- 基于第四个任务
- 限制输入的数字在10-100
- 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
- 队列展现直接用高度表示数字大小
- 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料

#### 目的
- 学习与实践JavaScript的基本语法、语言特性
- 练习使用JavaScript实现简单的`排序算法`
#### 笔记

- `vertical-align`：
> 指定`行内元素(inline)`或者`表格单元格(table-cell)`的垂直对齐方式，默认是：baseline，与父元素的基线对齐。


- `text-align`：
> 行内内容如何相对与父元素对齐，只控制行内内容的对象
  - justify：文字向两侧对齐

- 高级选择器：`querySelector`和`querySelectorAll`


- `window+D`：清除屏幕

- 冒泡排序：`两个for循环比较`

>在一开始的时候，比较第一第二个数，如果如果第一个数比第二个数大的话则交换二者位置，在比较第二个和第三个数，同样的如果第二个数比第三个数大的话，则交换二者位置，如此重复，所以一趟比较下来就能筛选出最大的一个数并把它排在最后的位置，又因为一个for循环的话只能选出一个最大的数，而我们还需要选出第二大、第三大...到最小的数，所以还需要加一个for循环才能实现我们的目标。
```
function bubbleSort(arr){
    var temp=0;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            };
        };
    };
    return arr;
}
```

- 可视化
> todo / 思考是：每排一次顺序就在页面中显示，然后把最大的添加一个不同的样式

  - 
[参考资料MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)