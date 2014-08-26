//搜索框焦点切换效果

$(document).ready(
function(){
	$(window).resize(function(){$(window).scroll();});
	var $initTop = $(document).scrollTop();
	var $initLeft = $(document).scrollLeft();
	$("#left").css({position:"fixed",top:"0px",left:($("#main").offset().left-173-$initLeft)+"px"});
	$("#header").css({position:"fixed",top:"0px",left:($("#main").offset().left-$initLeft)+"px"});

	$(window).scroll(function(){
		$scrollTop = $(document).scrollTop();
		$scrollLeft = $(document).scrollLeft();
		if($(window).height()<986){
			console.log("window size smaller than 986");

			if($scrollTop>=($("#main").height()+112-900))
			{
				console.log("downer part"+$scrollLeft);
				$("#left").css({position:"absolute",top:($("#main").height()+112-900)+"px",left:"0px"});
				$("#header").css({position:"absolute",top:($("#main").height()+112-900)+"px",left:"173px"});
			}
			else{
				console.log("upper part"+$scrollLeft);
				$("#left").css({position:"fixed",top:"0px",left:($("#main").offset().left-173-$scrollLeft)+"px"});
				$("#header").css({position:"fixed",top:"0px",left:($("#main").offset().left-$scrollLeft)+"px"});
			}
		}
		$initTop=$scrollTop;
		if($scrollLeft!=$initLeft&&$("#left").css("position")=="fixed")
		{
			$("#left").css("left","-"+$scrollLeft+"px");
			$("#header").css("left",(173-$scrollLeft)+"px");
		}
		$initLeft = $scrollLeft;
	});
	
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