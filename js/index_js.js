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

    jQuery.imqq = function(){
        $(window).scroll(function(){
            //console.log(document.all.content2.offsetWidth);
            //console.log($("#eg7_wrap").offset().top);
            var t1 =  $("#eg7_wrap").offset().top - $(window).scrollTop();
            t1 = t1 * 0.03;
            var pos = "50% "+t1+"px";
            $(".eg7_bg1").css({"background-position":pos});
            var t2 = $("#content2").offset().top - $(window).scrollTop();
            t2 = t2 * 0.03;
            var pos = "50% "+t2+"px";
            $(".eg7_bg2").css({"background-position":pos});
            var t3 = $("#content3").offset().top - $(window).scrollTop();
            t3 = t3 * 0.03;
            var pos = "50% "+t3+"px";
            $(".eg7_bg3").css({"background-position":pos});
        });
    }
    $.imqq();

    jQuery.elippsetext = function(textdiv){
        var divheight = $(textdiv).outerHeight();
        var $p = $("p" , $(textdiv)).eq(0);
        var textheight = $("p" , $(textdiv)).eq(0).height();
        //console.log(divheight + " haha " + textheight);
       while(divheight<textheight){
           $p.text($p.text().replace(/([a-zA-Z0-9]+|[\W])(\.\.\.)*$/ , "..."));
            textheight = $p.outerHeight();
            console.log(textheight);
        }
    }
    $.elippsetext("#eg5_content2");
});

