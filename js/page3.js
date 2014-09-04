define(['jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','modernizr'], function () {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true       ,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){

            if(index==4){
                $(".footer").show(1000);
            }
			
			if(!Modernizr.csstransitions){
				if(index==2){
					$('.bg21').animate({top:0,right:0},1000);
					$('.bg3-21').animate({'right':'100px',opacity:1},1000);
				}
				if(index==3){
					$('.bg3-31').animate({'bottom':'15%','margin-top':0},1000);
					$('.bg3-32').animate({'bottom':'15%',opacity:1,'margin-top':0},1000);
					$('.bg3-33').animate({'left':'40%'},1000);
				}
				if(index==4){
					$('.bg71').delay(100).animate({'bottom': '250px',left:0},1000);
					$('.bg3-41').delay(300).animate({left:'100px'},1000);
				}
			}
        } ,
        onLeave: function(index, nextIndex, direction){
            if(index==4){
                $(".footer").hide(1000);
            }
			if(!Modernizr.csstransitions){
				if(index==2){
					$('.bg21').animate({top:0,right:'-800px'});
					$('.bg3-21').animate({right:'2000px',opacity:0});
				}
				if(index==3){
					$('.bg3-31').animate({bottom:'0%','margin-top':'2000px'});
					$('.bg3-32').animate({bottom:'200%',opacity:0,'margin-top':'-300px'});
					$('.bg3-33').animate({right:'2000px'});
				}
				if(index==4){
					$('.bg71').animate({left:'-800px'});
					$('.bg3-41').animate({left:'2000px'});
				}
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

    var _section1 = false;
    $(".section1").mousewheel(function (e) {
        if (!_section1) {


            $(".bg3-12").animate({
                left: '100px'
            }, 0 );
            $(".bg3-11").animate({
                left: '100px'
            }, 0 );
            $(".bg3-13").animate({"opacity":"0","display":"block"},1,'easeInCirc',function(){}).delay(10).animate({"opacity":"1"},1000, 'easeInCirc',function(){})
            _section1 = true;
            stopEvent()
            return false;
         };


    })


    // $(window).resize(function() {

    if(document.location.href.indexOf("?visual=1")>0){

        $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }

   // });
})