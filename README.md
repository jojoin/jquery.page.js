jquery.page.js
==============

一个基于JQuery的翻页插件，


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
 </div>
```

css样式可以自定义，下面是javascript代码：

```javascript
var $wrap = $('#page')
  , current = 1
  , max = 10;

var Page = $wrap.creatPage(current,max,function(num){
  //此函数为用户点击翻页按钮触发事件的回调，参数num为页数
  //参数“current”为翻页插件默认的当前页数
  //参数“max”为默认的页数最大值
  
  // do something ...

});
```

### API & DOC

`var Page = $('#id').creatPage();`

#### Page.updateMax(num)

更新最大页数。

#### Page.clickFirst()

相当于用户手动点击“第一页”按钮，用于默认加载首页内容。



## 许可证（MIT）

版权所有（c）2013 杨捷<http://jojoin.com/user/1/>

你可以随意使用并修改此模块的内容，但不能替换或修改作者的名称及主页。



