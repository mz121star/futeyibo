define(['ieextend','jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','modernizr'], function (extend) {
     var times=1;
    $(function(){
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
        $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg133").hide();
    })
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],

        slidesNavigation: true,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
           if(index==9){

               $(".section11 .covered").css({
                   "background-image":"url('../images/1/slide11_1.jpg')"
               } );
              /* $(".bg1111_1 img").css("height",$(document).height())
               $(".bg1111_11 img").css("height",$(document).height())*/
               //  $(".bg1111_11").css("height","100%")
               /*  $(".bg1111_1") .css("height","0px")*/
               //   setTimeout(function(){$(".bg1111_1").animate({'height': '200px'},1000);},0);
               /*    setTimeout(function(){$(".bg1111_1").animate({'top': '-200px'},1000);},0);*/
               window.setTimeout(function(){$(".bg1111_1").animate({'top': '-2000px'},1000)},1000)
           }

            if(index==14){
                $(".footer").show(1000);
            }
            /*if(index==10){
                var i10=100
               var interval= window.setInterval(function(){
                   i10=i10-15 ;
                   $(".bg1111").css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity='+i10+')')
                   if(i10<0){
                       window.clearInterval(interval)
                   }
               },600);
            }*/
            //if(index==11){
                //$(".bg121").css({'left': '0px'},0);
            //}
            if(index==12){
                $(".bg131").animate({'left': '0px','top': '0px'},1000);
                $(".bg132").animate({'left': '0px','top': '0px'},1000);
                $(".bg141").animate({'left': '0px',top:'0px'},1000);
                $(".bg142").animate({'left': '-100px','top':'0px'},1000);
                $(".bg133").animate({'left': '-2000px'},0,function(){ });
            }
			
			if(!Modernizr.csstransitions){
				extend.afterLoad(anchorLink, index, slideAnchor, slideIndex);
			}
        } ,
        onLeave: function(index, nextIndex, direction){

            if(index==1){
                $(".tip").hide();

                $(".bg13").animate({'top': '-2000px',opacity:0});
                setTimeout(function(){$(".bg12").css({'left': ''});},1000);
                setTimeout(function(){$(".bg11").css({'left': ''});},1000);

                setTimeout(function(){
                    $(".bg14").animate({'bottom': '-2000px' },0);
                    $(".bg14").css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)')
                },0);
            }
            if(index==9 ){
                $(".section11 .changeable").animate({
                    height: '100px'
                }, 1000 );
                window.setTimeout(function(){$(".bg1111_1").animate({'top': '-0px'},0)},0)
            }
            if(index==11){

                $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
                $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
                $(".section13 .bg img").attr("src","images/1/slide131.jpg");
            }
            if(index==12){
                times=1;
                $(".bg133").show();
                $(".bg133").animate({'left': '-2000px'},0);
                $(".bg131").animate({'left': '0px','top': '0px'},0);
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg141").animate({'left': '0px',top:'0px'},0); 
                $(".bg142").animate({'left': '-100px','top':'0px'},0);
                $(".section13 .bg img").attr("src","images/1/slide13.jpg");
             //   $(".bg133").css("background-image","url(images/1/flag13.png)")
            }
            if(index==14){
                $(".footer").hide(1000);
            }
			if(!Modernizr.csstransitions){
				extend.onLeave(index, nextIndex, direction);
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
    var _section13 = false;
    var isanimated=function(){
        return $(".bg131").is(":animated")|| $(".bg132").is(":animated") ||  $(".bg141").is(":animated") ||  $(".bg142").is(":animated");
    }
    $(".section1").mousewheel(function (e) {

        $(".tip").hide();
        if (!_section1) {
            $(".bg13").animate({opacity:1});//.css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)')
			$(".bg14").animate({opacity:1});
            //$(".bg14").css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)')
          /*  $(".bg12").hide("slide", { direction: "right" }, 3000, function () {});
			
            $(".bg11").hide("slide", { direction: "left"  }, 2000, function () {});*/
            setTimeout(function(){$(".bg12").animate({'left': '2000px'},1000);},0);
            setTimeout(function(){$(".bg11").animate({'left': '-2000px'},1000);},0);
            setTimeout(function(){$(".bg13").animate({'top': '50px'},1000);},0);
            setTimeout(function(){$(".bg14").animate({'bottom': '0px'},1000);},0);
                $(".bg15").show("shake", { direction: "top"  }, 1000, function () {
                    _section1 = true;
                });

            stopEvent()
            return false;
        }
        if(e.deltaY>0){
            $(".tip").hide();

            $(".bg13").animate({'top': '-2000px',opacity:0});
            setTimeout(function(){$(".bg12").css({'left': ''});},1000);
            setTimeout(function(){$(".bg11").css({'left': ''});},1000);

            setTimeout(function(){
                $(".bg14").animate({'bottom': '-2000px' },0);
                $(".bg14").css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)')
            },0);
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
            if(times==1){           //飞出前两个
                $(".bg133").show();
                 $(".bg131").animate({'left': '-2000px','top': '2000px'},1000);
              $(".bg132").animate({'left': '2000px','top': '-2000px'},1000,function(){

              });
               $(".bg133").animate({'left': '100px','top':'200px'},1000,function(){times++;});
                times++
                stopEvent()
                return false;

            }
           if(times==2){                   //全部飞入遮挡住
               $(".bg131").animate({'left': '0px','top': '0px'},1000);
               $(".bg132").animate({'left': '0px','top': '0px'},0);

               $(".bg132").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg133").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg141").animate({'left': '-200px','top': '2000px'},1000);
           $(".bg141").animate({'left': '0px','top':'0px'},0,function(){times++;$(".section13 .bg img").attr("src","images/1/slide13.jpg");});

               stopEvent()
               return false;
           }
           if(times==3){          //再次飞出，展现双孔杯架
               $(".bg133").animate({'left': '-2000px' },0);
               $(".section13 .bg img").attr("src","images/1/slide14.jpg");
               $(".bg133").css("background-image","url(images/1/flag14.png)");
             //  $(".bg131").animate({'left': '0px','top': '0px'},1000);
               $(".bg132").animate({'left': '0px','top': '0px'},0);

             //  $(".bg132").animate({'left': '-2000px','top': '2000px'},1000);



            //   $(".bg131").animate({'left': '0px','top': '0px'},500);
               $(".bg132").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg141").animate({'left': '2000px','top': '-2000px'},1000);
               $(".bg133").animate({'left': '100px'},1000,function(){times++;});
                               times++
               stopEvent()
               return false;

           }
         if(times==4){    //再次飞入遮挡

             $(".bg133").animate({'left': '-2000px'},0);
            //$(".bg131").animate({'left': '0px','top': '0px'},1000);
             $(".bg132").animate({'left': '0px','top': '0px'},1000);
             $(".bg141").animate({'left': '0px',top:'0px'},1000,function(){times++;$(".bg142").animate({'left': '-82px','top':'0'},0);}); 
			 
                
             stopEvent()
             return false;
           }
           if(times==5){    //再次飞出展现迷你小冰箱
               $(".bg133").animate({'left': '-2000px'},0);
               //$(".bg131").animate({'left': '0px','top': '0px'},1000);
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
           if(times==6){    //再次飞入遮挡

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
         /*  if(times==7){    //再次飞出展现迷你小冰箱
               $(".bg133").css("background-image","url(images/1/flag16.png)")
               $(".bg133").animate({'left': '100px'},500);

               $(".bg131").animate({'left': '0px','top': '0px'},1000);
               $(".bg132").animate({'left': '0px','top': '0px'},1000);
               $(".bg141").animate({'left': '-200px','top': '2000px'},1000);
               $(".bg142").animate({'left': '900px','top':'-2000px'},1000,function(){times++;$(".section13 .bg img").attr("src","images/1/slide16.jpg");});

               
               stopEvent()
               return false;
           }*/
           else{

           }

       }
   });
    $(".section2").on("mouseover",function (e) {

        _section1 = false;
            $(".bg12").show("slide", { direction: "right" }, 3000, function () {
            });
            $(".bg11").show("slide", { direction: "left"  }, 2000, function () {

            });


    }) ;


    $('.first').coveringBad({
        marginY : 30 ,
        marginX : 30 ,
        setX  : 900,
        setY  : 0 ,
        direction   : "vertical"
    });




    // $(window).resize(function() {
        //console.log($(".standard").height()+"px")
    if(document.location.href.indexOf("?visual=1")>0){

         $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }

   // });
})