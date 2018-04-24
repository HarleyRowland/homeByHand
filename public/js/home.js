var menuShowing = false;
var basketMenuShowing = false;
var profileShowing = false;

$(document).ready(function(){
  	$('#homeCarousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    responsiveClass: true,
	    autoplay: true,
	    responsive: {
	        0: {
	            items: 1,
	            nav: true
	        },
	        600: {
	            items:3,
	            nav:false
	        },
	        1000: {
	            items: 5,
	            nav: true,
	            loop: false
	        }
	    }
	})
});
