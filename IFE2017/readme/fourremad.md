### four 模拟队列
#### 功能
- 模拟一个队列，队列的每个元素是一个数字，初始队列为空：
- 有一个input输入框，以及4个操作按钮

		-	点击"左侧入"，将input中输入的数字从左侧插入队列中；
		-	点击"右侧入"，将input中输入的数字从右侧插入队列中；
		-	点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
		-	点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
		-	点击队列中任何一个元素，则该元素会被从队列中删除

#### 目的
- 学习与实践JavaScript的基本语法、语言特性
- 初步了解JavaScript的事件是什么
- 初步了解JavaScript中的DOM是什么

#### 笔记
- webstorm多点编辑：按住alt 鼠标点击  或者 选中要编辑的地方，然后按住alt+shift+insert  通过方向键来控制方向

- `appendChild()` 插入的一定是`Node`节点，从面插入
- `insertBefore(新节点，参考节点)`：也是插入节点，从前面插入

- 从队列里面点击插入的元素删除，除了代码中：遍历所有数据，通过`闭包`删除，还可以用事件代理机制，`event.target`

[参考资料MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)