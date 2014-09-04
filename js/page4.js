define(['jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','jquery.easing.1.3'], function () {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
            if(index==3){
            /*    $(".bg4-31").css({"opacity":"0"}).delay(10).animate({"opacity":"0"},1000, 'easeInCirc', function(){  });*/
            }
            if(index==4){
                console.log(1);
              $(".bg4-41").css({ "top":"400px","right":"450px"}).delay(10).animate( {"top": "220px","right": "40px"}, 1000, 'easeInCirc', function(){  });
            }
            if(index==6){
                $(".footer").show(1000);
            }
        } ,
        onLeave: function(index, nextIndex, direction){
            if(index==6 ){
                $(".footer").hide(1000);
            }
            if(index==4){
             /*   console.log(1);
                $(".bg4-41").delay(1000).css({  "top":"400px","right":"450px"})*/
            }
        }
    });
    function stopEvent(){ //阻止冒泡事件
        //取消事件冒泡
        var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
        if (e && e.stopPropagation) {
            // this code is for Mozilla and Opera
            e.stopPropagation();
        } else if (window.event) {
            // this code is for IE
            window.event.cancelBubble = true;
        }
    }


    // $(window).resize(function() {

    if(document.location.href.indexOf("?visual=1")>0){

        $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }

   // });
})