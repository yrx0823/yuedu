$(document).ready(function(){
	var $maskBg = $(".mask-bg");
	var $nav = $("#navId");
	var $box1 = $(".box-1");
	var box1H = $box1.height();
	var $box1divs = $(".box-1>.wrap>div");
	var $box2divs = $(".box-2>.wrap>div");
	var $bgImg = $(".fix-bg").find("img");
	var initH = $(window).height()-$nav.height();
//	$maskBg.height(initH);
	$nav.css("margin-top",initH);
	$bgImg.css("height",initH);
	$bgImg.click(function(){
		var num = $bgImg.data("num");
		if(num==3)num=0;
		num++;
		$bgImg.data("num",num);
		this.src = "../images/images/light_"+num+".gif";
	});
	$(".nav-con a").anchorGoWhere({target:1});
	$(".nav-con a").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	$(window).on("scroll",function(){	
		var top = $(document).scrollTop();
		//导航动效
		if(top > initH){
			$nav.css("margin-top",0).addClass("nav-fixed");
			if($(".baseF").length <= 0){
				var _div = $("<div style='height:90px' class='baseF'></div>");
				_div.css("margin-top",initH);
				$("#navId").after(_div);
			}	
		}else{
			$nav.css("margin-top",initH).removeClass("nav-fixed");
			$(".baseF").remove();
//			$maskBg.css({"opacity":top/1354});
			$(".fix-bg").css({"opacity":1-top/initH*0.5});
		}
		//0203板块动效
		divAni($box1divs,0.2,box1H,top);
		divAni($box2divs,0.2,box1H,top);
	});
	
	//初始化视频
	//初始化slide
	var video_1= videojs("video_1");
	var video_2= videojs("video_2");
	$(".video-con").slide({
		effect:"fold",
		autoPage:"<li></li>",
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		startFun:function(i,c){
			video_1.pause();
			$("#video_1").parent().hide();
			var thisSrc = $(".video-con").find(".bd li").eq(i).data("src");
			video_1.src(thisSrc);
		},
	});
	$(".video-con1").slide({
		effect:"fold",
		autoPage:"<li></li>",
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPlay:false,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		startFun:function(i,c){
			video_2.pause();
			$("#video_2").parent().hide();
			var thisLi = $(".video-con1").find(".bd li").eq(i);
			video_2.src(thisLi.data("src"));
		},
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
	$(".video-con").find(".bd li").click(function(){
		$("#video_1").parent().show();
		video_1.play();	
	});
	$(".video-con1").find(".bd li").click(function(){
		$("#video_2").parent().show();
		video_2.play();	
	});
	$(".v1Con .close").click(function(e){
		$(this).parent().hide();
		video_1.pause();
		video_1.currentTime(0);
		e.stopPropagation()
	});
	$(".video-con1 .close").click(function(e){
		$(this).parent().hide();
		video_2.pause();
		video_2.currentTime(0);
		e.stopPropagation()
	});
	$(".more").click(function(e){
		$(".video2-wrap").fadeIn();
		e.stopPropagation()
	});
	$(".con-close").click(function(e){
		$(".video2-wrap").fadeOut();
		video_2.pause();
		video_2.currentTime(0);
		e.stopPropagation()
	});
	
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
