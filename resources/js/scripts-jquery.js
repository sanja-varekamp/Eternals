$(document).ready(function () {


    //STICKY NAVIGATION
    var waypoint = new Waypoint({
        element: $('.js--section-retreats'),
        handler: function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '60px;'
    })

    
    //MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    })

    //NAVIGATION SMOOTH SCROLL
    $('a[href*="#"]:not([href="#"])').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    //ANIMATIONS (on scroll, waypoint 'down')

    $('.jq-2').waypoint(function(direction) {
        $('.jq-2').addClass("animated animate__fadeIn");
    }, {
        offset: '80%'
    });
});