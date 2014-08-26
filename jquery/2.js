// JavaScript Document for #nav-block

var t = i = 1, count = 5;

$(document).ready(
	function(){
	
	
	//轮播项目符号mouseover效果
	$("#carousel_list>ul>li").mouseover(
		function(){
			$(this).siblings().removeAttr("class");
			$(this).addClass("on");
			i = $("#carousel_list li").index($(this));
			$("#carousel a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		}
	);
	
	
	//设置自动轮播间隔
	t = setInterval("showAuto()", 4000);
	$("#carousel").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});

	}
);

//自动轮播实现函数
function showAuto()
{
i = i>=(count -1) ? 0:++i;
$("#carousel_list li").eq(i).trigger('mouseover');
}