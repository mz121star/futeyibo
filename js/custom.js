define(['jquery', 'transit','touchSwipe','simpleSlider','backstretch'],function(){

       var mainslider;


       var options = {
           slides: '.slide', // The name of a slide in the slidesContainer
           swipe: true,    // Add possibility to Swipe > note that you have to include touchSwipe for this
           slideTracker: true, // Add a UL with list items to track the current slide
           slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
           slideOnInterval: false, // Slide on interval
           interval: 9000, // Interval to slide on if slideOnInterval is enabled
           animateDuration: 1000, // Duration of an animation
           animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
           pauseOnHover: false // Pause when user hovers the slide container
       };

       $(".slider").simpleSlider(options);
       mainslider = $(".slider").data("simpleslider");
       /* yes, that's all! */

       $(".slider").on("beforeSliding", function(event){
           var prevSlide = event.prevSlide;
           var newSlide = event.newSlide;
           $(".slider .slide[data-index='"+prevSlide+"'] .slidecontent").fadeOut();
           $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").hide();

       });
    function shake(o){
        var $panel =o;
        box_left = ($(window).width() -  $panel.width()) / 2;
        for(var i=1; 4>=i; i++){
            $panel.animate({left:box_left-(40-10*i)},50);
            $panel.animate({left:box_left+2*(40-10*i)},50);
        }

    }
       $(".slider").on("afterSliding", function(event){


           var prevSlide = event.prevSlide;
           var newSlide = event.newSlide;
           $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();

           var img=$("<img src='images/1/1_1.png' />")
           $(".backstretch",$(".slide")[newSlide]).append(img)
           shake(img);
       });

       $(".slide#first").backstretch("images/1/1.jpg");
       $(".slide#sec").backstretch("images/2/1.png");
       $(".slide#thirth").backstretch("images/3/1.png");
       $(".slide#fourth").backstretch("images/4/1.png");

       $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

       $(".slidecontent").each(function(){
           $(this).css('margin-top', -$(this).height()/2);

       });
    $(".backstretch",$(".slide")[0]).append("<img src='images/1/1_1.png' />")


})

