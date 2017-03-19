$(document).ready(function(){
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
		trigger:"click",
		interTime:3000,
		delayTime:1000,
		mouseOverStop:false,
	});
	
	video(".video-con","video_1",".v1Con .close");
	video(".video-con1","video_2",".video-con1 .close");
	//csr视频显示隐藏
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

function video(conClass,videoId,close){
	var video_1= videojs(videoId);
	$(conClass).slide({
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
			$("#"+videoId).parent().hide();
			var thisSrc = $(conClass).find(".bd li").eq(i).data("src");
			video_1.src(thisSrc);
		},
	});
	$(conClass).find(".bd li").click(function(){
		$("#"+videoId).parent().show();
		video_1.play();	
	});
	$(close).click(function(e){
		$(this).parent().hide();
		video_1.pause();
		video_1.currentTime(0);
		e.stopPropagation()
	});
}
