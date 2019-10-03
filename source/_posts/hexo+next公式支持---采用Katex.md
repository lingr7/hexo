# hexo+next公式支持---采用Katex 

网上使用的种种教程，都是使用mathjax实现的，但是我按部就班的操作，就是无效。

于是尝试使用Katex。

参考next主题官方文档的内容：[Math Equations | NexT](https://theme-next.org/docs/third-party-services/math-equations.html)  

1. 安装必要的插件

```
$ npm un hexo-renderer-marked --save
$ npm i hexo-renderer-markdown-it-plus --save # or hexo-renderer-markdown-it
```

2. 在主题配置文件里设置

```yaml
next/_config.yml
# Math Formulas Render Support
math:
  enable: true

  # Default (true) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in Front-matter.
  # If you set it to false, it will load mathjax / katex srcipt EVERY PAGE.
  per_page: true #如果这个选项是false，那么每一个网页都会引入公式渲染，这是很浪费的，只需要在需要公式渲染功能的博文md文件的头部，添加一行`mathjax: true`(使用Katex引擎渲染也是在文件头部标记`mathjax: true`，表示支持公式)
  engine: Katex
  #engine: mathjax
  # hexo-renderer-pandoc (or hexo-renderer-kramed) required for full MathJax support.
  mathjax:
    enable: false
    # See: https://mhchem.github.io/MathJax-mhchem/
    mhchem: false

  # hexo-renderer-markdown-it-plus (or hexo-renderer-markdown-it with markdown-it-katex plugin) required for full Katex support.
  katex:
    enable: true
    # See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
    copy_tex: false
```

3. 生成网页，运行网站，发布网站

```
$ hexo clean && hexo g -d
# or hexo clean && hexo s
```

要注意的是，使用Katex引擎渲染，在输入公式时有一些限制。

我平时使用的markdown编辑器是Typora,在打开了Typora内联公式支持时，基本上，本地编辑器所见和网站渲染的结果基本上是一致的。



1. 显示的数学公式（即`$$ ... $$`）在开始的`$$`前方和结束的`$$`后方（注释＃32），不得有任何字符（空格除外）。
   ```latex
   $$1 + 1 = 2$$
   ```
   $$1 + 1 = 2$$
2. 不支持Unicode（注释32）。
3. 内联公式（.. $ ... $）开头$之后和结尾$之前必须没有空格（注释＃32）。
    ```latex
   $a \ne 0$
   ```
    $a \ne 0$
4. 如果在标题中使用数学公式（即##标题）。
5. 然后在相应的目录项中，它将显示相关的LaTex代码3次（注释＃32）。
6. 如果在标题中使用数学公式，则它将不会呈现。