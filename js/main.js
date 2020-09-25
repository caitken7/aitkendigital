(function($) {

	"use strict";	

  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });



})(jQuery);

$(window).on('scroll', function(){
    console.log("yeah brother")
    if ($(".fade").is(':visible')){
        $(this).addClass("fade-active");
    }
});




