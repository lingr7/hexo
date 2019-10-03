---
title: 搭建博客hexo使用next主题、备份hexo源文件的参考资料
date: 2019-10-02 14:07:45
tags:
mathjax: true
---
首先，搭建这个博客耗时不短。从2019-09-29 17:32:42开始看到[这篇博客](https://yxyuxuan.github.io/2019/07/16/GitHub-Hexo-Next%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/)，打算自己搞一个的时候，到实现hexo源文件备份功能，2019-10-02 14:11:46，花了不少的时间。
其次，还有一点细节上的问题，比如嵌入pdf这个功能，现在的嵌入效果还不好看，还有两个滚动条。
最后，一个博客最重要的是内容。内容素材上的丰富，更新博客的频率，在博客功能上，比如图片、视频、公式的插入上都还有很大的空间。
![嵌入pdf文件效果](https://raw.githubusercontent.com/lingr7/picgo_github/master/img/pdf%E6%95%88%E6%9E%9C.PNG?token=AJBEV5ZDWBDM7HIUZII7UKK5SRAGU)
给出我在搭建这个博客，主题美化，以及实现备份博客源文件用到的博文的参考链接。

最快的搭建流程参考：

- [【目录】Hexo+NexT搭建博客拥抱舒爽 | EnjoyToShare](https://blog.enjoytoshare.club/article/hexo-do-optimization.html)  
- [Coding+Github双服务器托管Hexo | EnjoyToShare ](https://blog.enjoytoshare.club/article/hexo-do-server-hosting.html)
- [Git命令手动备份Hexo博客源文件 | EnjoyToShare ](https://blog.enjoytoshare.club/article/manual_backup_blog_source_files.html)
- [自动备份Hexo博客源文件 | EnjoyToShare ](https://blog.enjoytoshare.club/article/auto_backup_blog_source_files.html)

中间遇到问题，也参考的一些博客:

- [Hexo博客Next7.X版本主题配置 | 派 | Pyker](https://www.ipyker.com/2019/05/01/hexo-next.html)

- [Git管理多个远程仓库（GitHub和Coding） - 在努力！ - CSDN博客](https://blog.csdn.net/violet_echo_0908/article/details/50389138)

- [hexo new创建文章自动用vscode打开 - Mumu's Blogs - CSDN博客](https://blog.csdn.net/zhu_1997/article/details/87635817)
- [Hexo博客搭建与个性化 | s0mE](http://ljmeng.site/posts/2864/)  

补充：在使用`needmoreshare`时，一开始分享到微信，生成的二维码会被来比力的输入框给挡住，把`iconStyle`设置为`default`就可以避开这个问题了。

```yaml
postbottom:
    enable: true
    options:
      iconStyle: default
```

补充2:测试一下公式性能，我使用mathjax渲染公式失败以后的解决方案：[hexo+next公式支持---采用Katex](http://lingr7.coding.me/2019/10/03/hexo+next%E5%85%AC%E5%BC%8F%E6%94%AF%E6%8C%81---%E9%87%87%E7%94%A8Katex.html#more)
示例一：

```latex
$$
\begin{aligned}
a &= b + c \\
  &= d + e + f + g \\
  &= h + i
\end{aligned}
$$
```

$$
\begin{aligned}
  a &= b + c \\
    &= d + e + f + g \\
    &= h + i
\end{aligned}
$$

示例二：

```latex
$state \overset{NN}{\rightarrow}\left\{ \begin{aligned} &action1 \_ value \\ &action2 \_ value \\ &...\end{aligned} \right.$
```

$$
state \overset{NN}{\rightarrow}\left\{ \begin{aligned} &action1 \_ value \\ &action2 \_ value \\ &...\end{aligned} \right.
$$

示例三：

```latex
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```



When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are


$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}.
$$

