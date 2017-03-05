$(document).ready(function(){
	var $maskBg = $(".mask-bg");
	var $nav = $("#navId");
	var $box1 = $(".box-1");
	var box1H = $box1.height();
	var $box1divs = $(".box-1>.wrap>div");
	var $box2divs = $(".box-2>.wrap>div");
//	var initTop = $(document).scrollTop();
	var initH = $(window).height()-$nav.height()
	$maskBg.height(initH);
	$(".fix-bg").find("img").css("height",initH);
	$(window).on("scroll",function(){	
		var top = $(document).scrollTop();
		//导航动效
		if(top > initH){
			$nav.addClass("nav-fixed");
			if($(".baseF").length <= 0){
				var _div = $("<div style='height:90px' class='baseF'></div>");
				$("#navId").after(_div);
			}	
		}else{
			$nav.removeClass("nav-fixed");
			$(".baseF").remove();
			$maskBg.css({"opacity":top/1354});//蒙板
		}
		//0203板块动效
		divAni($box1divs,0.2,box1H,top);
		divAni($box2divs,0.2,box1H,top);
	});
	
	//初始化slide
	var video1 = videojs('video_1');
	$(".video-con,.video-con1").slide({
		effect:"fold",
		autoPage:"<li></li>",
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPlay:false,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
	});
	$(".slide03").slide({
		effect:"fold",
		titCell:".hd li",
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		mouseOverStop:false,
	});
	$(".video-wrap").click(function(e){
		$(this).find(".video-con").fadeIn();
		e.stopPropagation()
	});
	$(".more").click(function(e){
		$(".video-con1").fadeIn();
		e.stopPropagation()
	});
	$(".close").click(function(e){
		$(this).parent().fadeOut();
		e.stopPropagation()
	});
	
});
$(function(){
    var myPlayer = videojs('video_1');
    //myPlayer.play();
	
});


function divAni(divArr,delay,boxH,top){
	$.each(divArr,function(i,val){	
		if(top > $(this).offset().top - boxH -100 ){
			$(this).css({
				"animation-name":"fadeInUp",
				"animation-delay":delay*i+"s"
			});
		}
	});
}
