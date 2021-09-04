
$(function(){
    var $fnbmnu=$("footer>.footer>.fnb>ul>li");
	var $btnAuto=$("section .slides-pagination+.btn-auto");
	var $pagination=$("section .slides-pagination>ul>li>a");
    var $gnb=$("header .gnb>nav>ul>li");
    var $sub=$(".gnb>nav>ul>li>.sub");
	var nowIdx=0;
	var intervalID=null;
	
	/*메인메뉴*/
    $gnb.mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
    });
    $gnb.mouseout(function(){
        $sub.stop().fadeOut();
    });
	
	/*페이지네이션*/
	$pagination.click(function(evt){
		evt.preventDefault();
		nowIdx=$pagination.index(this);
		$("section>.slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		});		$pagination.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
	});
	
	/*자동재생*/
	$(window).on('load', function(){
		$btnAuto.addClass("pause").text("정지");
			intervalID=setInterval(function(){
			if(nowIdx>=2){
				nowIdx=0;
			}else{
				nowIdx++;
			}
			$pagination.eq(nowIdx).trigger("click");
		},4000);
	});
	
	/*재생,정지 버튼*/
	$btnAuto.click(function(evt){
		evt.preventDefault();
		if($(this).hasClass("pause")){
			$(this).removeClass("pause").text("재생");
			clearInterval(intervalID);
		}else{
			$(this).addClass("pause").text("정지");
				intervalID=setInterval(function(){
				if(nowIdx>=2){
					nowIdx=0;
				}else{
					nowIdx++;
				}
				$pagination.eq(nowIdx).trigger("click");
			},4000);
		};
	});
	
	/*이전, 다음버튼*/
	$(".prev").click(function(evt){
		evt.preventDefault();
		if(nowIdx>=1){
			nowIdx--;
		}else{
			nowIdx=2;
		}
		$("section>.slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		});
        $pagination.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
	});
	
	$(".next").click(function(evt){
		evt.preventDefault();
		if(nowIdx<=1){
			nowIdx++;
		}else{
			nowIdx=0;
		}
		$("section>.slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		});
        $pagination.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
	});
	
	$("section>.slides").mouseover(function(){
		$(this).find(".prev").stop().animate({
			"left":0
		},200);
		$(this).find(".next").stop().animate({
			"right":0
		},200);
	});	
	
	$("section>.slides").mouseout(function(){
		$(".prev").stop().animate({
			"left":-42
		},200);
		$(".next").stop().animate({
			"right":-42
		},200);
	});
	
	/*삼표인,면접관 이야기*/

	$(".slides2-container>ul>li:nth-child(3)>a").click(function(evt){
		evt.preventDefault();
		$(".slides2-container>ul>li.list_1").stop().fadeOut().css({
			"z-index":0
		});
		$(".slides2-container>ul>li.list_2").stop().fadeIn().css({
			"z-index":800
		});
		$(".slides2-container>ul>li:nth-child(1)>a").stop().fadeIn().css({
			"z-index":1000
		});
		$(".slides2-container>ul>li:nth-child(3)>a").stop().fadeOut().css({
			"z-index":0
		});
	});
	$(".slides2-container>ul>li:nth-child(1)>a").click(function(evt){
		evt.preventDefault();
		$(".slides2-container>ul>li.list_1").stop().fadeIn().css({
			"z-index":800
		});
		$(".slides2-container>ul>li.list_2").stop().fadeOut().css({
			"z-index":0
		});
		$(".slides2-container>ul>li:nth-child(3)>a").stop().fadeIn().css({
			"z-index":1000
		});
		$(".slides2-container>ul>li:nth-child(1)>a").stop().fadeOut().css({
			"z-index":0
		});	
	});
    
    /*패밀리사이트*/
    $fnbmnu.click(function(evt){
		evt.preventDefault();
        $(this).children(".fnb_sub").stop().slideToggle(300);
    });

	/*TOP*/
    $("footer>.footer>.fnb>ul>li:nth-child(5)").click(function(){
        $("html, body").animate({scrollTop:0});
    });
	
});
