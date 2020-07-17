//全局jq函数扩展方法
// $.自定义函数名=function(){}
// jQuery对象扩展方法   fn=prototype  原型  面向对象编程的 再说
// 	$.fn. pluginName = function() {};

//改变字体颜色
$.changeColor=function(val){
    val.css('color','red')
};
//改变背景颜色
$.changeBgcolor=function(){
    this[0].style.backgroundColor = 'green';
}