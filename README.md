jquery.page.js
==============

一个基于JQuery的翻页插件


###使用示例

首先需要在html页面里边包含指定class的标签如下：

```html
 <div class="page">
 <a class="prev">&nbsp;</a>
 <a class="first">1</a>
 <a class="poi left">...</a>
 <a class="one">4</a>
 <a class="two active">5</a>
 <a class="three">6</a>
 <a class="poi right">...</a>
 <a class="last">9</a>
 <a class="next">&nbsp;</a>
```

css样式自定义，下面是javascript代码：

```javascript

var $wrap = $('#page');

var Page = $wrap.creatPage(1,10,function(){

});

```

