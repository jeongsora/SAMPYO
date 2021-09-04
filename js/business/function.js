
$(function(){
	var $fnbmnu=$("footer>.footer>.fnb>ul>li");
    var $mnu=$("section>.cont_header>.mnu>ul>li");
    var $gnb=$("header .gnb>nav>ul>li");
    var $sub=$(".gnb>nav>ul>li>.sub");
    var nowIdx=0;
	
	/*메인메뉴*/
    $gnb.mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
    });
    $gnb.mouseout(function(){
        $sub.stop().fadeOut();
    });
    
	/*내용 메뉴*/
    $mnu.mouseover(function(){
        $(this).find(".hover").stop().show();
    });
    $mnu.mouseout(function(){
        $(this).find(".hover").stop().hide();
    });
    
	//계열사
	$(".group_select>input, .group_select>button").click(function(){
		$(this).parent().next().stop().toggle();
	});
    
	$(".group").mouseleave(function(){
		$(".group .list").hide();
	});
	
	$(".group .list").find("a").click(function(evt){
		evt.preventDefault();
		var str=$(this).text();
		$(this).parents(".list").prev().children("input").val(str);
		$(".group .list").hide();
	});
	
    $(window).load(function(){
        $("section .cont_2>.select_cont>div").eq(0).stop().show();
    });
    
    $(".select_box>.list_1>dd>ul>li>a").click(function(evt){
        evt.preventDefault();
        nowIdx=$(".select_box>.list_1>dd>ul>li>a").index(this);
        $("section .cont_2>.select_cont>div").eq(nowIdx).stop().show();
        $("section .cont_2>.select_cont>div").eq(nowIdx).siblings().stop().hide();
        $(".select_box>.list_1>dd>ul>li>a").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
    });
	
	
    //패밀리사이트
    $fnbmnu.click(function(evt){
        evt.preventDefault();
        $(this).children(".fnb_sub").stop().slideToggle(300);
    });
    
	//TOP
    $("footer>.footer>.fnb>ul>li:nth-child(5)").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
    });
});