# 在另一台电脑上打开备份的hexo博客静态源文件
前置知识
>[搭建博客 hexo 使用 next 主题、备份 hexo 源文件的参考资料 | 离 | Lingr7](http://lingr7.coding.me/2019/10/02/%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2hexo%E4%BD%BF%E7%94%A8next%E4%B8%BB%E9%A2%98%E3%80%81%E5%A4%87%E4%BB%BDhexo%E6%BA%90%E6%96%87%E4%BB%B6%E7%9A%84%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99.html)

1. 安装[node.js](https://nodejs.org/en/)
2. 安装[git](https://git-scm.com/downloads)，如果官网下载慢，可以前往这个维护镜像的网址，[waylau/git-for-win: Git for Windows.](https://github.com/waylau/git-for-win) 并完成基本设置，邮箱和用户名。
3. 取得项目部署公钥，参考网址[配置 SSH 公钥访问代码仓库 – 腾讯云开发者平台帮助中心](https://dev.tencent.com/help/doc/faq/bbe781aee786/ssh)
4. 通过ssh或https协议，拉取仓库到本地。
5. 安装后，检测Node.js是否安装成功，在命令行中输入`node -v` 

​       检测npm是否安装成功，在命令行中输入`npm -v` 

6. 在新打开的Git Bash（hexo博客文件夹）里如下操作以使用淘宝镜像

> 你可以使用我们定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`



7. 然后是安装hexo

```
$ cnpm install -g hexo-cli
```

8. 由于是拉取已经建好的仓库，所以略去`hexo init`，直接进行`npm install`，目录下，出现了新的文件夹`node_modules`，成功

   9.接下来运行`$ hexo g`生成网页，`$ hexo s`运行网站
，在`http://localhost:4000/`打开本地网站