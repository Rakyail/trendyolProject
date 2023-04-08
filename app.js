$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.up-arrow').fadeIn(200);
    } else {
        $('.up-arrow').fadeOut(200);
    }
});

// Tıkla fonksıyonu
$('.up-arrow').on('click', function() {
    $("html, body").animate({scrollTop: 0},1);
});
//! Yukarı Çık Oku


//!  Carousel
$('.owlTwo').owlCarousel({
    loop:true,
    margin:210,
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
    0:{
        items:2,
        nav:true,
        dots:false
    },
    600:{
        items:3,
        nav:true,
        dots:false
    },
    1000:{
        items:6,
        nav:true,
        loop:true,
        dots:false
    }
    }
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
    0:{
        items:3,
        nav:false,
        dots:false
    },
    600:{
        items:3,
        nav:false,
        dots:false
    },
    1000:{
        items:10,
        nav:false,
        loop:true,
        dots:false
    }
}
});
//Carusel


//Navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stickyNav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
    }else {
    navbar.classList.remove("sticky");
    }
}