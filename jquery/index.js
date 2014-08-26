// JavaScript Document
$(document).ready(
function(){
	
	$("#buttons>li:first-child").addClass("current");
	
	$("#content1").addClass("current").siblings().children().each(
	function(){
		$(this).css({"left":"1267px"});/* 173px + 1267px */
	});
	
	$("#buttons>li").click(
	function(){
			var $n = $("#buttons>li").index($(this));
			//console.log($n);
			if($n < 5)
			{
				//li的动画
				$(this).addClass("current").siblings().removeClass("current");
				//.content.current的动画
				$("#main").find("div.content.current").removeClass("current").children().each(
				function(i,n){
						$(n).delay(i*100).animate({"left":"-1267px"}).animate({"left":"1267px"},0);
				});
				//#content$n的动画
				$("#content"+($n+1)).addClass("current").children().each(
				function(i,n){
						$(n).delay(300+i*100).animate({"left":"0px"});
				});
			}
			else
			{
				var $n = $("#buttons>li").index($("#buttons>li.current")[0]);
				console.log(($n+1)%5);
				$("#buttons>li")[($n+1)%5].click();
			}
	});
	
	$("#content3>div.activities_content>div>div").click(
	function(){
		var $img = $(this).find("img").attr("src");
		var $p = $(this).find("p").html();
		$("#main").after("<div class=\"blackmask\"><img src=\""+$img+"\"><img src=\"images/close-icon.png\" class=\"closeicon\"><p>"+$p+"</p></div>");
		$("div.blackmask").find("img.closeicon").click(
		function(){
			console.log("clicked");
			$("div.blackmask").remove();
		});

	});
	
	
});