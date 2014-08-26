// JavaScript Document
$(document).ready(
function(){
	
	$("#footer").css("top",($("#main").outerHeight()+112)+"px");

	$("#list-side>div.search").focus(function(){
		$(this).find("input").focus();
	});
	$("#list-side>div.search>input").focus(function(){
		$(this).css("z-index","800");
	});

	$("#list-side>div.search>input").blur(function(){
		if($(this).val()=="")$(this).css("z-index","-1");
	});

});