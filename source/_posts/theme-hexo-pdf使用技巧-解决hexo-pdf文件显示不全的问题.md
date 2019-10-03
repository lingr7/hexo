---
title: theme-hexo-pdf使用技巧----解决hexo-pdf文件显示不全的问题
date: 2019-10-02 20:11:34
tags:
---
首先，是我的问题。
![嵌入pdf文件效果](https://raw.githubusercontent.com/lingr7/picgo_github/master/img/pdf%E6%95%88%E6%9E%9C.PNG?token=AJBEV5ZDWBDM7HIUZII7UKK5SRAGU)
hexo添加pdf出现了这种问题，pdf显示不全，height不够大，还出现了双重滚动条。
其次，是我解决问题的方法。

1. 开启pdf功能，参考[superalsrk/hexo-pdf: Hexo tag for embeded pdf](https://github.com/superalsrk/hexo-pdf)
2. 保证主题配置文件中，相关内容为

```yaml 
pdf:
  enable: true
  # Default height
  height: 500px
  pdfobject:
    # Use 2.1.1 as default, jsdelivr as default CDN, works everywhere even in China
    cdn: //cdn.jsdelivr.net/npm/pdfobject@2.1.1/pdfobject.min.js
    # CDNJS, provided by cloudflare, maybe the best CDN, but not works in China
    #cdn: //cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js
```
3. 打开theme文件夹`\source\css\_common\components\tags\pdf.styl`修改内容为

   ```
   .pdfobject-container {
     position: relative;
     overflow: auto;
     width: 100%;
     // height: unquote(hexo-config('pdf.height'));
     height: 100%;
   }
   ```

   即可

最后，给出实现的样例。

![样例一](https://raw.githubusercontent.com/lingr7/picgo_github/master/img/%E6%A0%B7%E4%BE%8B%E4%B8%80.PNG)

[网址一](https://lingr7.github.io/2019/10/01/test.html)

![样例二](https://raw.githubusercontent.com/lingr7/picgo_github/master/img/%E6%A0%B7%E4%BE%8B2.PNG)

[网址二](https://lingr7.github.io/book/)