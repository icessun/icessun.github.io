---
title: Hexo Next 主题博客添加gitment评论功能
copyright: true
date: 2017-09-26 15:37:30
tags: hexo
keywords: gitment,next,hexo
description:
top: 5
password:
categories: 读书笔记
---

### 引言
随着国内主流了评论服务`多说，网易云跟帖`，停止服务，也折腾过`Disqus`，国内还不能访问，加载速度较慢；既然我是使用`github`搭建的网站，那么使用`github issues`作为评论的工具也是可以接受的，在网上找到工具：`gitment`

[作者原话](https://github.com/imsun)：
> [Gitment](https://github.com/imsun/gitment) 是作者实现的一款基于 GitHub Issues 的评论系统。支持在前端直接引入，不需要任何后端代码。可以在页面进行登录、查看、评论、点赞等操作，同时有完整的 Markdown / GFM 和代码高亮支持。尤为适合各种基于 GitHub Pages 的静态博客或项目页面。

### 使用`Gitment`
- 首先要有github帐号
- 接着[注册 OAuth Application](https://github.com/settings/profile)


![注册 OAuth Application](http://upload-images.jianshu.io/upload_images/1811036-e8cbe3a7baccea2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> - 要确保填入正确的 callback URL（一般是网站的域名，如 https://icessun.github.io）。
> - 你会得到一个 client ID 和一个 client secret，这个将被用于之后的用户登录。
> - 这个页面，你还可以知道application拥有者：owner


- 添加`gitment插件`
> 打开 `/next/layout/_partials/comments.swig `文件, 在最后一个 elseif 代码块下面添加 Gitment 的内容.
```
 {% elseif theme.changyan.appid and theme.changyan.appkey %}
      <div id="SOHUCS"></div>

      {% elseif theme.gitment.enable %}
        <div onclick="showGitment()" id="gitment_title" class="gitment_title">显示 Gitment 评论</div>
        <div id="container" style="display:none"></div>
        <link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
        <script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
        <script>
        const myTheme = {
          render(state, instance) {
            const container = document.createElement('div');
            container.lang = "en-US";
            container.className = 'gitment-container gitment-root-container';
            container.appendChild(instance.renderHeader(state, instance));
            container.appendChild(instance.renderEditor(state, instance));
            container.appendChild(instance.renderComments(state, instance));
            container.appendChild(instance.renderFooter(state, instance));
            return container;
          }
        }
        function showGitment() {
          $("#gitment_title").attr("style", "display:none");
          $("#container").attr("style", "").addClass("gitment_container");
          var gitment = new Gitment({
            id: window.location.pathname,
            theme: myTheme,
            owner: '{{ theme.gitment.owner }}',
            repo: '{{ theme.gitment.repo }}',
            oauth: {
              client_id: '{{ theme.gitment.client_id }}',
              client_secret: '{{ theme.gitment.client_secret }}'
            }
          });
          gitment.render('container');
        }
        </script>
    {% endif %}
```

>    id: window.location.pathname：这样就是在当前域名下，对所有的文档创建gitment

- 然后打开主题的` _config.yml `文件, 在评论相关设置的区域添加下面的代码, 并根据 [Gitment 文档](https://github.com/imsun/gitment)说明来添加相应的值


```
# Gitment comments
gitment:
  enable: true
  owner: xxxx  // 前面注册OAuth Application看到的，一般是你的github帐号
  repo: xxxx  // 这个仓库的名字，否则会出现：Error: Not Found报错
  client_id: xxxx  //前面注册OAuth Application获取的
  client_secret: xxxx   //前面注册OAuth Application获取的


如我的：

gitment:
  enable: true
  owner: icessun
  repo: icessun.github.io
  client_id: ------
  client_secret: -----
```
可以通过`https://api.github.com/users/username`查看`github ID`


- 为评论设置一个点击显示按钮
在` next/source/css/_common/components` 目录中新建一个` gitment.styl` 的 css 样式文件, 复制以下代码，此代码来自博主：[ehlxr博主](https://ehlxr.me/)

```
.gitment_title:hover {
    color: #fff;
    background: #0a9caf;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(10, 156, 175);
}
.gitment_title {
    border: 1px solid #0a9caf;
    border-top-color: rgb(10, 156, 175);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(10, 156, 175);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(10, 156, 175);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(10, 156, 175);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
.gitment_title {
    display: inline-block;
    padding: 0 15px;
    padding-top: 0px;
    padding-right: 15px;
    padding-bottom: 0px;
    padding-left: 15px;
    color: #0a9caf;
    cursor: pointer;
    font-size: 14px;
}
```
然后打开同目录中的` components.styl `文件, 引入 @import "gitment";

- 防止在其他页面也出现评论：
```
title: about
date: 2017-07-21 15:50:35
type: "about"
comments: false  // 加一个false
```

参考：
- https://meesong.github.io/StaticBlog/2017/NexT+Gitment/
- https://zonghongyan.github.io/2017/06/29/201706292034/


<div id="music163player">

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22453837&auto=1&height=66"></iframe>

</div>
