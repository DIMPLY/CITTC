    $(function(){
    var $content = $(".scroll_demo");
    var i = 5;  //已知显示的<li>元素的个数
    var m = 5;  //用于计算的变量
	var scLen = 236 * i;
	var page = 1;
    var count = $content.find("li").length;//总共的<li>元素的个数
	$("#scroll>p").html(page+"/"+Math.ceil((count-1)/i));

	
    $(".next").click(function(){
    if( !$content.is(":animated")){  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
    if(m<count){  //判断 i 是否小于总的个数
    m+=i;
	page++;
    $content.animate({left: "-="+scLen+"px"}, 600);
	$("#scroll>p").html(page+"/"+Math.ceil((count-1)/i));
    }
	
    }
    });
    $(".prev").click(function(){
    if( !$content.is(":animated")){
    if(m>i){ //判断 i 是否小于总的个数
    m-=i;
	page--;
    $content.animate({left: "+="+scLen+"px"}, 600);
    $("#scroll>p").html(page+"/"+Math.ceil((count-1)/i));
}
    }
    });
	
	
	
    })
