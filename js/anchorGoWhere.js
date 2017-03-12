jQuery.fn.anchorGoWhere = function(options){
    var obj = jQuery(this);
    var defaults = {target:0, timer:400};
    var o = jQuery.extend(defaults,options);
    obj.each(function(i){
        jQuery(obj[i]).click(function(){
            var _rel = jQuery(this).attr("href").substr(1);
            switch(o.target){
                case 1: 
                    var _targetTop = jQuery("#"+_rel).offset().top-70;
                    jQuery("html,body").animate({scrollTop:_targetTop},o.timer,"linear");
                    break;
                case 2:
                    var _targetLeft = jQuery("#"+_rel).offset().left;
                    jQuery("html,body").animate({scrollLeft:_targetLeft},o.timer);
                    break;
            }
            return false;
        });                  
    });
}