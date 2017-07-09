// Scroll the page to the top	
$(function() {
   	$('body').scrollTop(0);
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	
	$('body').on('click', '.page-scroll a', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top-40)
	    }, 1000);
	    event.preventDefault();
	});
	
	// Check if the user is on a mobile device
	var isMobile = window.matchMedia("only screen and (max-width: 760px)");
	
	$(window).resize(function() {
		isMobile = window.matchMedia("only screen and (max-width: 760px)");
	});
		
		
	// Init background video
//	var bgVideo =$("#dc-video").backgroundVideo({
//	    $videoWrap: $('#video-wrap'),
//	    $outerWrap: $('#outer-wrap'),
//	    preventContextMenu: true,
//	    parallaxOptions: {
//	        offset: 60,
//	        effect: 1.7
//	    }
//	});

	// Load the fonts 
	WebFont.load({
	    google: {
	      families: ['Raleway']
	    }
	});
});