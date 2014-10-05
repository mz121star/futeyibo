
define(['ieextend','jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','modernizr'], function (extend) {
    var times=1;
    var _section1 = false;
    var hasShow = false;
    $(function(){
        $('.standard').trigger('fitbg');
    $('.loadingmode').remove();
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
        $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg133").hide();
        $('.tip').show();
    });
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3','4','5','6','7','8','9','10','11','12'],
        navigation: false,
        navigationPosition: 'right',
        slidesNavigation: false,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
            $('.tip').show();
            if(index==13){
                $(".footer").show();
            }
            if(index==6){
                s6=0;
                $(".bg61").delay(10).animate({opacity: 1,'margin-top': "0%"},0);
            }
            if(index==12){
                times=1;
                $(".bg131").animate({'left': '0px','top': '0px'},1000);
                $(".bg132").animate({'left': '0px','top': '0px'},1000);
                $(".bg141").animate({'left': '0px',top:'0px'},1000);
                $(".bg142").animate({'left': '-100px','top':'0px'},1000);
                $(".bg133").animate({'left': '-2000px'},0,function(){ });
                //$(".bg133").css("background-image","url(images/1/flag135.png)")
            }
            if(index==9){
                // $('.bg1111_1').delay(800).animate({top:'-800px'},2000);
                // $('.bg1111').animate({opacity:0},6000);
                /*  $(".bg10_2").delay(200).animate({'bottom': '250px',left:0},1000);
                 $('.bg10_1').delay(300).animate({'margin-left': '230px',right: '100px',top: '20px'},1000);*/
                $('.bg1111_111').delay(0).animate({top:'0px'},0);
            }

            if(!Modernizr.csstransitions){
                extend.afterLoad(anchorLink, index, slideAnchor, slideIndex);
            }
        } ,
        onLeave: function(index, nextIndex, direction){
            $('.tip').hide();
            if(index==1){
                $(".bg13").animate({'top': '-2000px',opacity:0});
                $(".bg12").animate({'left': '25%'});
                $(".bg11").animate({'left': '-290px'});
                $(".bg14").animate({'bottom': '-2000px' ,opacity:0},0,function(){ _section1 = false;});
            }
            if(index==6){
                s6=0;
                $(".bg61").delay(10).animate({opacity: 1,'margin-top': "0%"},0);
            }
            if(index==11){

                $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
                $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
                $(".section13 .bg img").attr("src","images/1/slide131.jpg");
            }
            if(index==9){
                // $('.bg1111').stop(true).animate({opacity:1},0);
                $('.bg1111_1').animate({top:300},0);
                $(".bg10_2").animate({left:'-800px'});
                $('.bg10_1').animate({right: '-2000px'});

                $('.bg1111_111').delay(0).animate({top:'300px'},1000);
            }
            if(index==8 && direction=='down'){
                // $('.bg1111_1').delay( 0).animate({top:'-800px'},2000);
                $(".bg1111_1").delay(0).animate({opacity: 1,'top': "0px"},0);
                s9=0;
            }
            if(index==10 && direction=='up'){
                //$('.bg1111_1').delay( 0).animate({top:'-800px'},2000);
                $(".bg1111_1").delay(0).animate({opacity: 1,'top': "0px"},0);
                s9=0;
            }
            if(index==12){
                hasShow = false;
                $('.tip').show();
                $(".footer").hide(1000,function(){});
                $('.section13 .bg img,.section13 .bg131 img,.section13 .bg132 img').removeAttr('style');
                $(".bg133").removeAttr("style");
                $(".bg133").show();
                $(".bg133").animate({'left': '-2000px'},0);
                $(".bg131").animate({'left': '0px','top': '0px'},0);
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg141").animate({'left': '0px',top:'0px'},0);
                $(".bg142").animate({'left': '-100px','top':'0px'},0);
                $(".section13 .bg img").attr("src","images/1/slide13.jpg");
                $('.header').show();
                $('.bg133').animate({'top':'+=360px'},0);
            }
            if(index==13){
                $(".footer").hide();
            }
            if(!Modernizr.csstransitions){
                extend.onLeave(index, nextIndex, direction);
            }
        }
    });
    function stopEvent(){ //闃绘鍐掓场浜嬩欢
        //鍙栨秷浜嬩欢鍐掓场
        var e=arguments.callee.caller.arguments[0]||event; //鑻ョ渷鐣ユ鍙ワ紝涓嬮潰鐨別鏀逛负event锛孖E杩愯鍙互锛屼絾鏄叾浠栨祻瑙堝櫒灏变笉鍏煎
        if (e && e.stopPropagation) {
            // this code is for Mozilla and Opera
            e.stopPropagation();
        } else if (window.event) {
            // this code is for IE
            window.event.cancelBubble = true;
        }
    }

    var _section13 = false;
    var isanimated=function(){
        return $(".bg131").is(":animated")|| $(".bg132").is(":animated") ||  $(".bg141").is(":animated") ||  $(".bg142").is(":animated");
    }
    var s6=10;
    $(".section6") .mousewheel(function (e) {

        if(e.deltaY<0){     //寰€涓嬫粴鍔�
            s6=s6+2

            if(s6<60){
                $(".bg61").animate({opacity: 1,'margin-top': s6+"%"},0);
                stopEvent()
                return false;
            }
        }
        if(e.deltaY>0){   //寰€涓婃粴鍔�
            s6=s6-2
            if(s6>0){
                $(".bg61").animate({opacity: 1,'margin-top': s6+"%"},0);
                stopEvent()
                return false;
            }
        }
        s6=0;
        $(".bg61").delay(1000).animate({opacity: 1,'margin-top': "0%"},0);

    });
    var s9=0;
    $(".section10") .mousewheel(function (e) {

        if(s9<-300){
            $(".bg10_2").delay(0).animate({'bottom': '250px',left:0},1000);
            $('.bg10_1').delay(0).animate({'margin-left': '230px',right: '100px',top: '20px'},1000);
        }
        if(e.deltaY<0){     //寰€涓嬫粴鍔�
            s9=s9-50;
            if(s9>-800){
                $(".bg1111_1").animate({opacity: 1,'top': s9+"px"},0);
                stopEvent()
                return false;
            }
        }
        $(".bg1111_1").delay(1000).animate({opacity: 1,'top': "0px"},0);
        $(".bg10_2").animate({left:'-800px'});
        $('.bg10_1').animate({right: '-2000px'});
        s9=0;

    });
    $(".section1").mousewheel(function (e) {

        if (!_section1) {
            $(".bg13").animate({opacity:1});
            $(".bg14").animate({opacity:1});

            setTimeout(function(){$(".bg12").animate({'left': '2000px'},1000);},0);
            setTimeout(function(){$(".bg11").animate({'left': '-2000px'},1000);},0);
            setTimeout(function(){$(".bg13").animate({'top': '100px'},1000);},0);
            setTimeout(function(){$(".bg14").animate({'bottom': '0px'},1000);},0);
            $(".bg15").show("shake", { direction: "top"  }, 1000, function () {
                _section1 = true;
            });

            stopEvent()
            return false;
        }
    });

    $(".section13") .mousewheel(function (e) {
        if(isanimated()) {
            stopEvent()
            return false;
        }
        if (!_section13) {
            if(times==1){           //椋炲嚭鍓嶄袱涓�
                $(".bg133").show();
                $(".bg131").animate({'left': '-2000px','top': '2000px'},1000);
                $(".bg132").animate({'left': '2000px','top': '-2000px'},1000,function(){

                });
                $(".bg133").animate({'left': '100px','top':'200px'},1000,function(){times++;});
                times++
                stopEvent()
                return false;

            }
            if(times==3){          //鍐嶆椋炲嚭锛屽睍鐜板弻瀛旀澂鏋�
                $(".bg133").animate({'left': '-2000px' },0);
                $(".section13 .bg img").attr("src","images/1/slide14.jpg");
                $(".bg133").css("background-image","url(images/1/flag14.png)");
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg132").animate({'left': '-2000px','top': '2000px'},1000);
                $(".bg141").animate({'left': '2000px','top': '-2000px'},1000);
                $(".bg133").animate({'left': '100px'},1000,function(){times++;});
                times++
                stopEvent()
                return false;

            }
            if(times==5){    //鍐嶆椋炲嚭灞曠幇杩蜂綘灏忓啺绠�
                $(".bg133").animate({'left': '-2000px'},0);
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg141").animate({'left': '0px',top:'0px'},0,function(){times++;$(".bg142").animate({'left': '-82px','top':'0'},0);});


                $(".section13 .bg img").attr("src","images/1/slide15.jpg");
                $(".bg133").css("background-image","url(images/1/flag15.png)")
                $(".bg133").animate({'left': '100px'},1000);

                $(".bg131").animate({'left': '0px','top': '0px'},0);
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg141").animate({'left': '-2000px','top': '2000px'},1000);
                $(".bg142").animate({'left': '2000px','top':'-2000px'},1000,function(){ });


                stopEvent()
                return false;
            }
            if(times==6){    //鍐嶆椋炲叆閬尅

                $(".bg133").animate({'left': '-2000px'},0);
                $(".bg133").css("background-image","url(images/1/flag16.png)")
                $(".bg131").animate({'left': '0px','top': '0px'},1000);
                $(".bg132").animate({'left': '0px','top': '0px'},1000);
                $(".bg141").animate({'left': '0px',top:'0px'},0);
                $(".bg142").animate({'left': '-100px','top':'0px'},0,function(){times++; $(".section13 .bg img").attr("src","images/1/slide16.jpg");});
                $(".bg141").animate({'left': '-2000px','top': '2000px'},1000);
                $(".bg142").animate({'left': '2000px','top':'-2000px'},1000,function(){times++;$(".section13 .bg img").attr("src","images/1/slide16.jpg");});
                $(".bg133").animate({'left': '100px'},500);
                stopEvent()
                return false;
            }
            if(times==8){
                if(e.deltaY < 0 && !hasShow){
                    hasShow=true;
                    $('.bg133').delay(500).animate({'top':'-=360px'});
                    //$(".footer").show(1000);
                    var bg = $('.section13 .bg img,.section13 .bg131 img,.section13 .bg132 img');
                    bg.animate({'top':'-360px'},500).css({'position':'absolute'});
                    $("#fp-nav").hide();
                    $(".footer").delay(100).show(100);
                    $('.tip').hide();
                    $('.header').hide();
                    stopEvent();
                    return false;
                }
                if(e.deltaY > 0){
                    $("#fp-nav").show();
                }
            }
        }
    });

    /*   window.onresize=function(){
     $('.standard').delay(100).trigger('fitbg');
     };*/

    $('.standard').on('fitbg',function(){
        $(this).css('margin-left',-($(this).width() - $(window).width())/2);
    });


    $('.first').coveringBad({
        marginY : 30 ,
        marginX : 30 ,
        setX  : 900,
        setY  : 0 ,
        direction   : "vertical"
    });

    if(document.location.href.indexOf("?visual=1")>0){

        $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }
});