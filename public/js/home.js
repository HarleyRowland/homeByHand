var landingImageCount = 2;

window.setInterval(function(){
    if(landingImageCount == 1){
        $("#backgroundImage1").css("z-index", "0")
        $("#backgroundImage1").css("left", 0)
        $("#backgroundImage3").css("z-index", "-10")

        $("#backgroundImage2").css("transition", "0s");
        $("#backgroundImage2").hide()
        $("#backgroundImage2").css("left", "-100%");
        $("#backgroundImage2").show()
        $("#backgroundImage2").css("transition", "1.5s");

        landingImageCount = 2;
    } else if(landingImageCount == 2) {
        $("#backgroundImage2").css("z-index", "0")
        $("#backgroundImage2").css("left", 0)
        $("#backgroundImage1").css("z-index", "-10")

        $("#backgroundImage3").css("transition", "0s");
        $("#backgroundImage3").hide()
        $("#backgroundImage3").css("left", "-100%");
        $("#backgroundImage3").show()
        $("#backgroundImage3").css("transition", "1.5s");

        landingImageCount = 3;
    } else {
        $("#backgroundImage3").css("z-index", "0")
        $("#backgroundImage3").css("left", 0)
        $("#backgroundImage2").css("z-index", "-10")

        $("#backgroundImage1").css("transition", "0s");
        $("#backgroundImage1").hide()
        $("#backgroundImage1").css("left", "-100%");
        $("#backgroundImage1").show() 
        $("#backgroundImage1").css("transition", "1.5s");

        landingImageCount = 1;
    }
}, 10000);

$(document).ready(function() {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 300) {
            $("#stickyNav").css("top", "0")
        } else if(scroll < 300) {
            $("#stickyNav").css("top", "-100px")         
        }
    });

    $("#pointer").click(function() {
        $('html, body').animate({
            scrollTop: $("#summary").offset().top
        }, 2000);
    });
    var stickyBtn = document.getElementById('stickyBars');
    var btn = document.getElementById('bars');
    var scroll = $(window).scrollTop();
    var nav = document.getElementById('sideNav');

    btn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    stickyBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    $('#productCarousel').owlCarousel({
       loop:true,
    margin:30,
    autoPlay:true,
    autoplaySpeed:1000,
    nav:true,
        rewindNav:false,

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