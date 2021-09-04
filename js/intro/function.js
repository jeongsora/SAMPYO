
$(function(){
	var $fnbmnu=$("footer>.footer>.fnb>ul>li");
    var $mnu=$("section>.cont_header>.mnu>ul>li");
    var $gnb=$("header .gnb>nav>ul>li");
    var $sub=$(".gnb>nav>ul>li>.sub");

	
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

/*	$(window).scroll(function(){
		var scrollValue = $(document).scrollTop(); 
		if(scrollValue>=170){
		   $(".cont_header").css({"height":150,"position":"fixed","z-index":1000});
			$(".cont_header>.mnu>.btn").css({"display":"block"});
			$(".cont_header>.mnu").css({"top":85});
			$("section").css({"margin-top":300});
		}else{
			$(".cont_header").css({"height":240});
			$(".cont_header>.mnu>.btn").css({"display":"none"});
			$(".cont_header>.mnu").css({"top":150});
			
		}
	});*/