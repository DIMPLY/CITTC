//搜索框焦点切换效果
$(document).ready(
function(){
	$("#icons li").hover(
		function(){
			var $icon = $(this).find("img");
			var $attr = $icon.attr("src");
			$icon.attr("src",$attr.substring(0,$attr.length-4)+"_on.png");
		},
		function(){
			var $icon = $(this).find("img");
			var $attr = $icon.attr("src");
			$icon.attr("src",$attr.substring(0,$attr.length-7)+".png");
		}
	);
	$("#search").focus(function(){
		$(this).find("input").focus();
	});
	$("#search input").focus(function(){
		$(this).css("z-index","1002");
	});

	$("#search>input").blur(function(){
		if($(this).val()=="")$(this).css("z-index","-1");
	});
});