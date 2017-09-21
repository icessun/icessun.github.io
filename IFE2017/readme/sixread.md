### six  实践JavaScript数组、字符串相关操作 模糊查询


#### 功能
- 基于任务四进行升级
- 将新元素输入框从input改为textarea
- 允许一次<span style="color:red">批量输入多个内容</span>，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
- 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做<span style="color:red">模糊匹配</span>，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识

#### 目的
- 实践JavaScript数组、字符串相关操作
#### 笔记

- `textarea`

> 多行纯文本编辑控件，去掉拖动按钮：`textarea {resize: none;}`，控制宽度和高度：`rows和cols`

- 批量输入内容的截取
> 根据字符串的`substr()`，存放在数组里面，循环数组插入到内容框中

[参考资料MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

