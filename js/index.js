$(document).ready(function(){
	var $maskBg = $(".mask-bg");
	var $nav = $("#navId");
	var $box1 = $(".box-1");
	var box1H = $box1.height();
	var $box1divs = $(".box-1>.wrap>div");
	var $box2divs = $(".box-2>.wrap>div");
	var initTop = $(document).scrollTop();
	var flag = (initTop>146 && initTop<600)?1:0;
	$(window).on("scroll",function(){	
		var top = $(document).scrollTop();
		
		//蒙板
		if(top<677){
			$maskBg.css({"opacity":top/1354});
		}
		//导航
		if(top>146 && top<600){
			$nav.fadeOut();
		}
		if(top>=600){
			$nav.fadeIn().addClass("nav-fixed");
		}
		if(top<=146){
			$nav.fadeIn().removeClass("nav-fixed");
		}
		
		//0203板块
		divAni($box1divs,0.2,box1H,top);
		divAni($box2divs,0.2,box1H,top);
	});
});

function divAni(divArr,delay,boxH,top){
	$.each(divArr,function(i,val){console.log(i);	
		if(top > $(this).offset().top - boxH -100 ){
			$(this).css({
				"animation-name":"fadeInUp",
				"animation-delay":delay*i+"s"
			});
		}
	});
}
