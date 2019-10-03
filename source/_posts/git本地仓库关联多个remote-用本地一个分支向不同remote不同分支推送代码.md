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

同时对于之前文章里用到的`hexo d`之后自动备份的脚本进行了修改。

脚本源头是：[自动备份Hexo博客源文件 | EnjoyToShare](https://blog.enjoytoshare.club/article/auto_backup_blog_source_files.html) 

```javascript
require('shelljs/global');
try {
    hexo.on('deployAfter', function() {//当deploy完成后执行备份
        run();
    });

} catch (e) {
    console.log("产生了一个错误啊<(￣3￣)> !，错误详情为：" + e.toString());
}
function run() {
    if (!which('git')) {
        echo('Sorry, this script requires git');
        exit(1);
    } else {
        echo("======================Auto Backup Begin===========================");
        cd('D:/git-for-use/hexo');    //此处修改为Hexo根目录路径
        if (exec('git add --all').code !== 0) {
            echo('Error: Git add failed');
            exit(1);
        }
        if (exec('git commit -am "blog auto backup script\'s commit"').code !== 0) {
            echo('Error: Git commit failed');
            exit(1);
        }
        if (exec('git push origin master').code !== 0) {
            echo('Error: Git push failed');
            exit(1);
        }
		if (exec('git push ori-github master').code !== 0) {// 此处添加了对另一个仓库的备份
            echo('Error: Git push failed');
            exit(1);
        }
        echo("==================Auto Backup Complete============================")
    }
}
```

对.gitignore文件做了修改，因为不同电脑上的hexo根目录不同，所以自动备份所在的脚本的文件夹就不随git更新了。

```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
scripts/
public/
.deploy*/
```

