$(function () {

    wow = new WOW({
        mobile: false,
        live: true,
        callback: function (box) {
            console.log('animation started');
        }
    });
    wow.init();

    $(".header__top a, .footer__link").on("click", function (e) {

        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.slider-blog__items').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
    $('.menu__btn, .menu a').on('click', function () {
        $('.header__top').toggleClass('header__top--active');
    });

    var mixer = mixitup('.gallery__content');
});