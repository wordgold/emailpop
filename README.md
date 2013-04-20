#EmailPop

一个辅助邮箱输入的js插件，只有3K大小。

在HTML页面文本框内输入Email 时动态提示常见后缀。

[View Demo](http://rawgithub.com/wordgold/emailpop/master/demo.html)

****************************************

###使用方法

这是一个jquery插件，使用方法：

```js
	$("Selectors").emailpop();
```

由于表现和逻辑分离，使用前请自行导入或修改 **emailpop.css** 文件内容。

**为防止IE6崩溃，请在页面加载完毕后执行。**

```js
	$(function(){
		$("Selectors").emailpop();
	});
```

****************************************

###代码讲解

[邮箱输入辅助插件 EmailPop](http://yu123.me/2013/03/emailpop/)