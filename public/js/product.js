$(document).ready(function(){
  	$(".moreImagesCarouselImage img").click(function(){
  		$(this).attr("src")
  		$("#mainProductImage").attr("src", $(this).attr("src"))
  	})

  	$('#moreImagesCarousel').owlCarousel({
	    margin: 10,
	    responsiveClass: true,
	    autoplay: false,
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

	$('#seeAlsoCarousel').owlCarousel({
	    margin: 10,
	    responsiveClass: true,
	    autoplay: false,
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