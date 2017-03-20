$(document).ready(function(){
	fixbg();
	function fixbg(){
		var $line = $(".fix-bg").find("span");
		var $fiximg = $(".fix-bg").find("img");
		var num;
		$line.hover(function(){
			num = $fiximg.attr("data-num");
			if(num == 6){
				$fiximg.attr("data-num",1);
				num = 1;
			}
			if(num == 1){
				$fiximg.attr("data-num",++num);
				$fiximg[0].src = "images/images/light_"+num+".gif";
			}
		},function(){
			num = $fiximg.attr("data-num");
			if(num == 2){
				$fiximg.attr("data-num",--num);
				$fiximg[0].src = "images/images/light_"+num+".gif";
			}
		});
		$line.on("click",function(){
			num = $fiximg.attr("data-num");
			var $self = $(this);
			num++;
			if(num == 6){
				num = 1;
			}
			$fiximg.attr("data-num",num);
			$fiximg[0].src = "images/images/light_"+num+".gif";
			if(num == 3){
				setTimeout(function(){
					if(num==3){
						$fiximg.attr("data-num",++num);
						$fiximg[0].src = "images/images/light_"+num+".gif";
					}
				},5000);
			};
			if(num==5){
				setTimeout(function(){
					if(num==5){
						$fiximg.attr("data-num",1);
						$fiximg[0].src = "images/images/light_1.gif";
						num=0;
					}
				},5000);
			}
		});
	}
	guide();//导航切换
	function guide(){
		$(".nav-con a").anchorGoWhere({target:1});
		$(".nav-con a").click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		});
	}
	
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
			$(".fix-bg").css({"opacity":1-top/initH*0.5});
		}
		var sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
        document.getElementById('navId').style.left = sl + 'px';
        $(".fix-bg").css({"left":sl});
	});
	$(".slide03").slide({
		effect:"fold",
		titCell:".hd li",
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"mouseover",
		interTime:3000,
		delayTime:1000,
		mouseOverStop:false,
	});
	
	video(".video-con","video_1",".video-con .close");
	video(".video-con1","video_2",".video-con1 .close");
	//csr视频显示隐藏
	$(".video-wrap .bg").click(function(e){
		$(".video-con").fadeIn();
		e.stopPropagation()
	});
	$(".more").click(function(e){
		$(".video-con1").fadeIn();
		e.stopPropagation();
	});
//	$(".con-close").click(function(e){
//		$(".video-con1").fadeOut();
//		video_2.pause();
//		video_2.currentTime(0);
//		e.stopPropagation();
//	});
});

function video(conClass,videoId,close){
	var video= videojs(videoId);
	$(conClass).slide({
		effect:"fold",
		autoPage:"<li></li>",
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPlay:false,
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		startFun:function(i,c){
			video.pause();
			$("#"+videoId).parent().hide();
			var thisSrc = $(conClass).find(".bd li").eq(i).data("src");
			video.src(thisSrc);
		},
	});
	$(conClass).find(".bd li").click(function(){
		$("#"+videoId).parent().show();
		video.play();	
	});
	$(close).click(function(e){
		$(this).parent().hide();
		video.pause();
		//video.currentTime(0);
		e.stopPropagation();
	});
}
