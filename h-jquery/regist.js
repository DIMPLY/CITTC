// JavaScript Document
$(document).ready(function(){



	$("div#step1>div>a:not(:selected)").click(function(){
		var cat = $(this).addClass("selected").siblings("a").removeClass("selected").index($("div#step1>div>a"));
		console.log(cat);
		if(cat==-1){
			$("div#step1>label.individual").show(0).children($("input")).removeAttr("disabled");
			$("div#step1>label.group").hide(0).children($("input")).attr("disabled","disabled");
		}
		else if(cat==0){
			$("div#step1>label.group").show(0).children($("input")).removeAttr("disabled");
			$("div#step1>label.individual").hide(0).children($("input")).attr("disabled","disabled");
		}
	});
	
	
	
	$("#button-regist").click(function(){
		//在此处插入AJAX代码，提交表单、存储用户信息、发送邮件，并接收反馈信息，根据返回信息决定是否执行下面两条语句
		$("#step1").hide(0);
		$("#step2").show(0);
	});
	

//临时代码，功能完成后删除	
	$("#step2>a").click(function(){
		$("#step2").hide(0);
		$("#step3").show(0);
		alert("【调试信息】“点击此按钮转到邮箱”功能实现后，请删除h-jquery/regist.js中的该部分代码");
	});
//临时代码，功能完成后删除	
	
	
});