#emailpop

一个辅助邮箱输入的js插件

在页面上输入Email 时动态提示常见后缀。

###使用方法

这是一个jquery插件，使用方法：

	$("Selectors").emailpop()

由于表现和逻辑分离，使用前请自行导入 **emailpop.css** 文件内容

**为防止IE6崩溃，请在页面加载完毕后执行**

	$(function(){
		$("Selectors").emailpop()
	})