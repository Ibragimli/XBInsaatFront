$(function () {
    $('.mobile-owl').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            200:{
                items:1
            },
            300:{
                items:1
            },
            400:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
})