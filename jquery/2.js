// JavaScript Document for #nav-block

var t = i = 1, count = 5;

$(document).ready(
	function(){
	
	
	//�ֲ���Ŀ����mouseoverЧ��
	$("#carousel_list>ul>li").mouseover(
		function(){
			$(this).siblings().removeAttr("class");
			$(this).addClass("on");
			i = $("#carousel_list li").index($(this));
			$("#carousel a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		}
	);
	
	
	//�����Զ��ֲ����
	t = setInterval("showAuto()", 4000);
	$("#carousel").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});

	}
);

//�Զ��ֲ�ʵ�ֺ���
function showAuto()
{
i = i>=(count -1) ? 0:++i;
$("#carousel_list li").eq(i).trigger('mouseover');
}