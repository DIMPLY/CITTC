// JavaScript Document
$(document).ready(
function(){
	$("#folders>div.item:nth-child(3)").css({width:"0px"}).next().css({width:"467px",borderWidth:"1px"});
	$("#folders>div.item:nth-child(3)").find(".wrapper").css({left:"-235px"});
	
	$("#folders>div.item").click(
	function(){
		$("#folders>div.expanded[style*='467px']").animate({width:"0px",borderWidth:"1px 0px"},200).prev().animate({width:"235px"},200).find(".wrapper").animate({left:"0px"},200);
		$(this).animate({width:"0px"},200).next().animate({width:"467px",borderWidth:"1px"},200);
		$(this).find(".wrapper").animate({left:"-235px"},200);
	});
});