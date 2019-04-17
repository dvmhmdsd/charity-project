/*global $, window*/
// Top navnar (Khaled Section )

    
    $(function () {
      /* -------------------------------------------------------------
            Menu Dropdown
        ------------------------------------------------------------- */
       $("#all-navbar").headroom({
              "offset": 100,
              "tolerance": 0,
              "classes": {
                "initial": "animated",
                "pinned": "slideInDown",
                "unpinned": "slideOutUp"
              }
            });
        $(".all-navbar .language-btn").mousedown(function(){ 
            $(".all-navbar #language-menu").toggle();
        });
        $(".all-navbar .currency-btn").mousedown(function(){
            $(".all-navbar #currency-menu").toggle();
        });
        
    
        $('#main-navbar .def').on('mouseenter',function(){
                $(this).find('.dropdown-menus').first().stop(true, true).delay(300).slideDown();
            });

        $('#main-navbar .def').on('mouseleave',function(){
                $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideUp();
    });
       $('#main-navbar .dropdown-submenus').on('mouseenter',function(){
                $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideDown();
    });    
        $('#main-navbar .dropdown-submenus').on('mouseleave',function(){
                $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideUp();
    });
      // Testimonail & Header Slider(mohammed section)
      
        $('.testim .bxslider').bxSlider({
           pager: false
        });
    
        $('.header .bxslider').bxSlider({
           controls: false
        });
      // Upcoming Event (Rasha Section)
     
        // caching the scroll top element 
    var scrollButton = $('#scroll-top');
    $(window).on('scroll', function () {
        
        if ($(this).scrollTop() >= 750) {
            
            scrollButton.fadeIn(1000);
            
        } else {
            
            scrollButton.fadeOut(1000);
        }
        
    });
    
    scrollButton.click(function () {
        
        $('html,body').animate({
            
            scrollTop : 0
            
        }, 1000);
        
    });
         var leftArrow = '<i class="fa fa-chevron-left"></i>',
          rightArrow = '<i class="fa fa-chevron-right"></i>',
          options = {
              loop : true, //عدد لا نهائي من التكرارات
              margin : 0, // المسافة بين العناصر
              nav : true, // اظهار زرين للتحرك قبل وبعد (next & prev)
              navText : [leftArrow, rightArrow],
              items : 1,
              merge : true
          };
       $(".upcoming-events .owl-carousel").owlCarousel(options);
        
    
        // Photos (Nisrin) section
        $('.photos .owl-carousel').owlCarousel({
              loop : true,
              margin : 0,
              nav : true,
              navText : [leftArrow, rightArrow],
              items : 4,
              dots : false
          });
});
// loading page screen fade out
$('.loading-page').fadeOut(2500);

(function($) {
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var isInput = $this.is('input');
            var start = parseInt(isInput ? $this.val().replace(/,/g, "") : $this.text().replace(/,/g, ""));
            var regex = /(\d)(?=(\d\d\d)+(?!\d))/g;
            commas = commas === undefined ? true : commas;
            
            // number inputs can't have commas or it blanks out
            if (isInput && $this[0].type === 'number') {
                commas = false;
            }
            
            $({value: start}).animate({value: stop}, {
                duration: duration === undefined ? 1000 : duration,
                easing: ease === undefined ? "swing" : ease,
                step: function() {
                    isInput ? $this.val(Math.floor(this.value)) : $this.text(Math.floor(this.value));
                    if (commas) {
                        isInput ? $this.val($this.val().replace(regex, "$1,")) : $this.text($this.text().replace(regex, "$1,"));
                    }
                },
                complete: function() {
                    if (parseInt($this.text()) !== stop || parseInt($this.val()) !== stop) {
                        isInput ? $this.val(stop) : $this.text(stop);
                        if (commas) {
                            isInput ? $this.val($this.val().replace(regex, "$1,")) : $this.text($this.text().replace(regex, "$1,"));
                        }
                    }
                }
            });
        });
    };
})(jQuery);
$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".counter1").animateNumbers(78520, true, 2500, "linear");

$(".counter2").animateNumbers(9821, true, 2500, "linear");

$(".counter3").animateNumbers(25003, true, 2500, "linear");

$(".counter4").animateNumbers(103210, true, 2500, "linear");    
        }
    });