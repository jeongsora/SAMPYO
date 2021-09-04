$(function(){
	var $fnbmnu=$("footer>.footer>.fnb>ul>li");
    var $mnu=$("section>.cont_header>.mnu>ul>li");
    var $gnb=$("header .gnb>nav>ul>li");
    var $sub=$(".gnb>nav>ul>li>.sub");
    var nowIdx=0;
    var contIdx=0;

	
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