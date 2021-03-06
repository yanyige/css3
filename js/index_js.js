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
            t1 = t1 * 0.1;
            var posX = "50%";
            var posY = t1+"px";
            $(".eg7_bg1").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
            var t2 = $("#content2").offset().top - $(window).scrollTop();
            t2 = t2 * 0.1;
            var posX = "50%";
            var posY = t2+"px";
            $(".eg7_bg2").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
            var t3 = $("#content3").offset().top - $(window).scrollTop();
            t3 = t3 * 0.1;
            var posX = "50%";
            var posY = t3+"px";
            $(".eg7_bg3").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
        });
        $('#eg13').mousemove(function(ev){
            var event = ev || window.event;
            //get the pos of the dom
            var pageX = event.pageX;
            var pageY = event.clientY;
            var posX = pageX * 0.009;
            var posY = pageY * 0.009;
            var ret = 'translate3D(' + posX + 'px, ' + posY + 'px, 0px)';
            $('.eg7-cloud').css('transform', ret);
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

    jQuery.sportsBall = function(){
         //定义画布宽高和生成点的个数
        var WIDTH = window.innerWidth, HEIGHT = 3000, POINT = 35;
        
        var canvas = document.getElementById('canvas');
        canvas.width = WIDTH,
        canvas.height = HEIGHT;
        var context = canvas.getContext('2d');
        context.strokeStyle = 'rgba(0,0,0,0.1)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.5)';
        var circleArr = [];

        //线条：开始xy坐标，结束xy坐标，线条透明度
        function Line (x, y, _x, _y, o) {
            this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
        }
        //点：圆心xy坐标，半径，每帧移动xy的距离
        function Circle (x, y, r, moveX, moveY) {
            this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
        }
        //生成max和min之间的随机数
        function num (max, _min) {
            var min = arguments[1] || 0;
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        // 绘制原点
        function drawCricle (cxt, x, y, r, moveX, moveY) {
            var circle = new Circle(x, y, r, moveX, moveY)
            cxt.beginPath()
            cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
            cxt.closePath()
            cxt.fill();
            return circle;
        }
        //绘制线条
        function drawLine (cxt, x, y, _x, _y, o) {
            var line = new Line(x, y, _x, _y, o)
            cxt.beginPath()
            cxt.strokeStyle = 'rgba(0,0,0,0.02)'
            cxt.moveTo(line.beginX, line.beginY)
            cxt.lineTo(line.closeX, line.closeY)
            cxt.closePath()
            cxt.stroke();

        }
        //初始化生成原点
        function init () {
            circleArr = [];
            for (var i = 0; i < POINT; i++) {
                circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
            }
            draw();
        }

        //每帧绘制
        function draw () {
            context.clearRect(0,0,canvas.width, canvas.height);
            for (var i = 0; i < POINT; i++) {
                drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
            }
            for (var i = 0; i < POINT; i++) {
                for (var j = i; j < i + 10; j++) {
                    if (i + j < POINT) {
                        var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
                            B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                        var lineLength = Math.sqrt(A*A + B*B);
                        var C = 1/lineLength*7-0.009;
                        var lineOpacity = C > 0.03 ? 0.03 : C;
                        if (lineOpacity > 0) {
                            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
                        }
                    }
                }
            }
        }

        //调用执行
        init();
        setInterval(function () {
            for (var i = 0; i < POINT; i++) {
                var cir = circleArr[i];
                cir.x += cir.moveX;
                cir.y += cir.moveY;
                if (cir.x > WIDTH) cir.x = 0;
                else if (cir.x < 0) cir.x = WIDTH;
                if (cir.y > HEIGHT) cir.y = 0;
                else if (cir.y < 0) cir.y = HEIGHT;
                
            }
            draw();
        }, 16);
    }
    $.sportsBall();
});

