/**
 * Created by yyg on 15-10-26.
 */

$(document).ready(function(){

    jQuery.myscroll = function(scrolldom , scrolltime){
        $(scrolldom).click(function(){
            var scrollto = $(this).attr("scrollto");
            $("html , body").animate({
                scrollTop : $(scrollto).offset().top
            } , scrolltime);
        });
    }

    $.myscroll(".e6b");

});

