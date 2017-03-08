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
	
	//初始化视频
    var flashvars_1={
        f:'http://vjs.zencdn.net/v/oceans.mp4',
        c:0,
        p:1,
        b:0
    };

    var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
    var video=['http://vjs.zencdn.net/v/oceans.mp4->video/mp4'];
    CKobject.embed('../ckplayer/ckplayer/ckplayer.swf','video_1','ckplayer_video1','100%','100%',false,flashvars_1,video);
	console.log(CKobject);
	//初始化slide
	//var video_1= videojs("video_1");
	//var video_2= videojs("video_2");
	$(".video-con").slide({
		effect:"fold",
		autoPage:"<li></li>",
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPlay:false,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		startFun:function(i,c){
//			video_1.pause();
			console.log(CKobject.getObjectById('ckplayer_video1'));
			$("#video_1").parent().hide();
			var thisSrc = $(".video-con").find(".bd li").eq(i).data("src");
			console.log(thisSrc);
//			video_1.src(thisLi.data("src"));
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
//			video_2.pause();
//			$("#video_2").parent().hide();
//			var thisLi = $(".video-con1").find(".bd li").eq(i);
//			video_2.src(thisLi.data("src"));
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
//		video_1.play();	
	});
	$(".video-con1").find(".bd li").click(function(){
//		$("#video_2").parent().show();
//		video_2.play();	
	});
	$(".v1Con .close").click(function(e){
		$(this).parent().hide();
//		video_1.pause();
//		video_1.currentTime(0);
		e.stopPropagation()
	});
	$(".video-con1 .close").click(function(e){
//		$(this).parent().hide();
//		video_2.pause();
//		video_2.currentTime(0);
		e.stopPropagation()
	});
	$(".more").click(function(e){
//		$(".video2-wrap").fadeIn();
		e.stopPropagation()
	});
	$(".con-close").click(function(e){
//		$(".video2-wrap").fadeOut();
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
