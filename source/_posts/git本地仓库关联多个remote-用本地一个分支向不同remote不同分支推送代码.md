---
title: git本地仓库关联多个remote-----用本地一个分支向不同remote不同分支推送代码
date: 2019-10-03 13:00:33
tags:
---

[git本地仓库关联多个remote,怎么用本地一个分支向不同remote不同分支推送代码？ - 知乎](https://www.zhihu.com/question/46543115)

# git管理多个远程仓库

和上面的知乎问题一样，解决办法也是相似的。

我的hexo源文件，托管于github和coding两处，如何保持这两个仓库的同步就成了一个问题。

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = git@git.dev.tencent.com:lingr7/hexo.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[remote "ori-github"]
    url = git@github.com:lingr7/hexo.git
	fetch = +refs/heads/*:refs/remotes/ori-github/*
[branch "master"]
	remote = ori-github
	merge = refs/heads/master

```

