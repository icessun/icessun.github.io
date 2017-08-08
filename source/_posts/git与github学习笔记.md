---
title: git与github学习笔记
copyright: true
date: 2017-08-08 17:22:05
tags: git
keywords: git与github
description: 
top: 5
password:
categories: 读书笔记
---

![工作流图](http://upload-images.jianshu.io/upload_images/1811036-ba75eec40861687e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
<!-- more -->
## 认识`Git`
- 是一个强大的分布式版本控制工具 
- 分布式：可以协作，任务可以拆分；每次的改动都有记录，版本可以控制
- 强大的分支管理

#### 直接记录快照，而非差异比较
> 关心文件数据的整体是否发生变化，而非文件内容的具体差异；每一次提交更新，会对所有的文件作一快照，保存一个指向快照的索引，要是文件没有变化，不会再次保存，只是对上次保存的快照作一链接。

![更新的文件快照](http://upload-images.jianshu.io/upload_images/1811036-37d61b88c4e7ea67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 几乎都是在本地操作
>  `Git`在本地磁盘上就保存着所有当前项目的历史更新，所有保存在 `Git` 数据库中的东西都是用哈希值(`SHA-1` 校验和)来作索引的，而不是靠文件名。在保存到  `Git` 之前，所有数据都要进行内容的校验和（checksum）计算，并将此结果作为数据的唯一标识和索引。

#### 文件的三种状态
- 已修改（本地仓库进行`add`）
- 已暂存（暂存区域`staging area  commit`）
- 已提交（`git`工作目录 ）
  -`git`工作目录 ：用来保存元数据和对象数据库的地方。该目录非常重要，每次克隆镜像仓库的时候，实际拷贝的就是这个目录里面的数据。
  - 如果 `git clone` 出来的话，`Git` 目录就是其中`.git` 的目录；如果`git clone --bare` 的话，新建的目录本身就是`Git` 目录

## `Git`安装
- `windows`上面安装
   - 直接下载`msysgit`[软件](https://git-for-windows.github.io)
   - 开始菜单里面找到`Git`---->`Git Bash`，或者在一个文件夹上面鼠标右键，选择`Git Bash`，出现类似命令行窗口，说明安装成功
   - 配置

        ```
           //在命令行里面输入下面两句，进行配置
              $ git config --global user.name "Your Name"
              $ git config --global user.email "email@example.com"     

      // 配置差异分析工具
      $ git config --global merge.tool vimdiff

       // 查看git配置信息
             $ git config --list
       // 获取帮助
       $ git help <verb>
        ```

        - 在全局配置了用户名和`Email`地址，就是以后电脑上面的所有仓库都是使用这个配置

## 创建仓库
   - 使用`git`窗口创建一个文件夹

```
 $ mkdir 文件名 //创建这个文件名
 $ cd 文件名 // 进入到这个文件名
 $ pwd  // 查看这个文件所在的目录
 
```
- 接着初始化一个`Git`仓库

```
   // 首先应该进入到创建的文件夹目录下
   $ git init
   初始化后，在当前的目录下面会出现一个.git的文件夹，所有 Git 需要的数据和资源都存放在这个文件夹中
   $ git clone url // 默认是克隆下来的项目名字的文件夹作为项目的文件夹
   $ git clone url 自定义文件夹名字  // 使用自己自定义的文件夹作为项目目录的文件夹
```
> 版本库初始化之后，就在本地默认创建了**主分支** `master`，用来发布重大的版本，日常开发在这个主分支上面开辟一条**开发分支**来操作，然后合并到主分支上面

- 当然也可以直接在你想在的目录下面（确保这个目录下面没有中文，否则出错），鼠标右键新建一个文件夹，然后鼠标右键选择`Git　Bash`，输入`git　init`

## 文件保存在仓库

- 然后把我们需要保存在仓库的文件，直接拖到我们刚才创建的仓库的文件夹下，然后打开`Git`命令窗口，输入下面的命令，使里面的文件纳入到版本控制，进行跟踪

```
$ git add <file>  // 把文件添加到仓库 暂存区
$ git commit -m '描述'  // 文件提交到仓库 保存一个版本的快照 保存在版本历史记录里面

$ git commit -a -m '描述' // 直接跳过暂存区，把所有已经跟踪过的文件暂存起来一起提交

// 漏掉的文件没有加入，或者提交的消息写错了 修改最后一次提交 如果刚才提交完没有作任何改动，直接运行此命令的话，相当于有机会重新编辑提交说明，但将要提交的文件快照和之前的一样。
$ git commit --amend 


$ git rm 要删除的文件 // 该文件就不会纳入版本管理，要是这个删除文件，已经修改并且放到了暂存区的话，就必须强制删除 -f

$ git rm --cached 不跟踪的文件 // 把文件从跟踪清单里面删除

// 重新命名文件
$ git mv file_from  file_to
```
   
- 当然可以使用`$ git add *`来提交所有的文件
- 当我们更改了文件，使用`$ git status`可以查看我们更改的那个文件，这个命令是让我们时刻了解当前仓库的状态，以及那些文件被添加到了暂存区，那些文件没有被添加
  - 可以使用`$ git diff`来查看具体修改了什么地方，是工作目录中当前文件和暂存区域快照之间的差异，也就是修改之后还没有暂存起来的变化内容，若要看已经暂存起来的文件和上次提交时的快照之间的差异，可以用`git diff --cached` 命令。更高版本还允许使用`git diff --staged`，效果是相同的，但更好记些。
  - 要把修改后的文件，提交到仓库，继续上面的两个命令`add 和 commit`
  - 此时在运行`$ git status`，就会提示，当前没有需要提交的修改，工作目录干净`working directory clean`

## 版本回退

- `commit`命令是在仓库里面保存我们一个版本的快照，所有后面跟的说明文件很重要，我们可以使用`$ git log`来查看我们保存的版本历史记录，通过描述文件更快的知道，然后通过历史记录回退到以前的版本
 
```
  $ git log // 从最近的到最远的版本记录
   
  $ git log -p -2 // -p 展示每次提交的内容差异 -2 最近两条 
  
  $ git log --pretty=oneline  --graph // 输出的信息更简短   --graph  多出一些 ASCII 字符串表示的简单图形，形象地展示了每个提交所在的分支及其分化衍合情况。
```

- 此时我们可以从输出的信息看到`commit id` ，是一连串的由`sha1`计算出来并且以16进制表示的数字，这个数字是我们回退到以前版本的版本号
- 在`git`中，使用`HEAD`表示当前版本，也就是上面输出信息的第一个，上一个版本就是`HEAD^`，上上个版本就是`HEAD^^`，以此类推，n个前的版本就是`HEAD~n`
- 回退到上一个版本，使用下面命令，然后输出`HEAD is now at commit id号 说明信息`，查看仓库的文件，已经恢复到上一个版本了

```
$ git reset --hard HEAD^
```
- 此时在次输入`$　git　log`，我们会发现，前一个版本不见了，只有我们现在的版本和现在版本之前的版本，要是我们还是需要回到前一个版本呢，这个时候`commit id `就发挥作用了，在当前的窗口向上查找前一个版本的`commit id`号，然后输入`$ git reset --hard commit id号，不需要输入完整的`
- 当我们不小心关闭了窗口，找不到了前一个版本的id的时候，我们可以使用`$ git reflog`来查找，查看命令历史

## 工作区和暂存区

### 工作区

   -  就是我们创建的仓库
     
### 版本库

  - 在工作区里面隐藏了一个`.git`文件，这个是版本库
  - 版本库里面有暂存区`stage`，还有自动创建的第一个分支`master`，以及指向这个分支的指针`HEAD`
     
![git add 工作](http://upload-images.jianshu.io/upload_images/1811036-6cb8ec5cf370a38b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - 前面说道通过`add 和 commit -m`把文件添加到版本库里面
  
```
 $ git add  * //把修改的文件添加到暂存区
 $ git commit -m // 把暂存区的内容提交到当前的分支（master），没有创建其他分支的情况下
```

![git commit 工作](http://upload-images.jianshu.io/upload_images/1811036-c1ab7fa3fdc5a116.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 如果不`add`到暂存区，那就不会加入到`commit`中
- `Git`管理的是修改，而不是文件；也就是说，每一次修改的时候，都要先`add`，然后在`commit`

## 撤销修改

> 什么时候会出现修改撤销呢？我们在工作区修改文件错误；或者已经`add`提交了，把错误也提交了暂存区；在或者`commit`把错误提交到了版本库

### 在工作区撤销修改，没有`add`之前
   - 发现错误及时，可以直接手动把错误删除
   - 要是错误太多，也可以使用命令`$ git checkout -- <file>`，来撤销修改，丢弃工作区的修改
      
### `add`之后，`commit`之前
   - 取消已经暂存的文件，回到已经修改但未暂存的文件
   - 这个时候，使用这个命令，可以撤销暂存区的修改，重新放回到工作区`$ git reset HEAD <file>`
   - 退回到工作区，我们接着可以使用`$git checkout -- <file>`来撤销工作区的修改

### `commit`之后，提交到了版本库，没有推送到远程
 
   - 这个时候，我们只能**回退版本**了，前提是你没有把版本库提交到远程，否则是修改不了了

### 远程仓库`github`

  - 访问[github](https://github.com/)官网注册帐号，参考[资料](https://guides.github.com/activities/hello-world/)
  - 由于本地仓库和远程仓库是靠`ssh`加密传输的，所以首先要创建`SSH KEY`，打开用户主目录，一般是这样的地址`C:\Documents and Settings\Administrator`，查看是否有一个`.ssh`的文件，可能文件夹被隐藏，应该在文件夹选项里面设置显示隐藏文件，有的话，直接打开，复制`id_rsa.pub（公钥）`里面的内容，登入`github`网站，打开`account settings`，选择`SSH KEYS`页面，然后点击`Add SSH KEY`，把复制的内容粘贴到里面就行
  - 要是主目录下面没有，打开`git`命令窗口，创建SSK KEY；`$ ssh-keygen -t rsa -C "youremail@example.com"`
  - 然后在远程仓库里面创建一个仓库，在本地仓库里面使用下面命令和远程仓库建立链接：`$ git remote add origin git@github.com:icessun/icessun.github.io.git // 添加远程仓库`，远程库的名字默认`origin`
  - 推送本地仓库的文件到远程库中
   
```
  $ git push -u origin master
```
  - 把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。以后每次提交只需要`$ git push origin master`

- 查看当前配置了那些远程仓库

```
 $ git remote

  $ git remote -v // 显示对于的克隆地址  
```

  - **克隆远程仓库**`$ git clone git@github.com:icessun/icessun.github.io.git`


### 分支管理

- 创建分支：`$ git branch 分支的名字`
- 切换分支：`$ git checkout 分支的名字`
```
// 上面两个命令合并成为一条
 $ git checkout -b 分支的名字
```
- 查看当前的分支：`$ git branch`，当前的分支会出现一个`*`号
- 把当前分支合并到主分支上面：`$ git merge 要合并的分支`，合并到`master`分支上面，合并分支前要切换到要合并的分支上面
- 删除分支：`$ git branch -d 要删除的分支的名字`
- 分支合并出现冲突：`$ git log --graph --pretty=oneline --abbrev-commit`查看分支合并的情况，出现冲突的时候，我们应该手动修改冲突，在提交
- 合并禁止`Fast forward`模式：`$ git merge --no-ff -m '描述' 要合并的分支`；这样可以保存合并的分支
- `Bug`分支：把当前的工作现场隐藏起来：`$ git stash`；接着和创建分支一样，创建一个临时的bug分支，修改完成之后合并bug分支到master主分支上面，`$ git stash list`；查看当前的工作区的隐藏列表，恢复工作区：`$ git stash pop`，继续工作区的任务
- 每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支；如果要丢弃一个没有被合并过的分支，可以通过`git branch -d <分支name>强行删除`

### 多人协作
- 在本地克隆远程仓库的时候，自动把本地的master分支和远程的master分支对应起来
- 查看远程仓库的信息`$ git remove -v`：就会显示抓取（fetch）和推送（push）的`origin（远程仓库默认的名字）`地址，没有推送权限是看不到（push）地址
- 推送分支（把该分支上的所有本地提交推送到远程仓库）：`$ git push origin 本地分支的名字`
- 当你小伙伴把修改的推送到了远程，而你正好也修改了相同的文件，那么你就必须`git pull`下来最新的添加，在本地解决冲突合并，在推送到远程，如果`pull` 下来提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream 本地分支的名字 远程仓库分支的名字。`
- 在本地创建和远程分支对应的分支，使用  `git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；

> 参考资料[廖雪峰网站git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
[git pro](http://iissnan.com/progit/html/zh/ch2_5.html)

<div id="music163player">

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>

</div>
