$(function () {
    // variables
    var menuLi = $('.header-container .menu li');
    //
    $('body').css("padding-top", $('header').height() + 'px');
    // prevent links click hash
    $('[href="#"]').on('click', function(e) { e.preventDefault() });

    // prevent form submit
    // $('form').on('submit', function (e) { e.preventDefault() });

    $(document).on('scroll', function () {
        console.log($(document).scrollTop());
        if($(document).scrollTop() > 1) {
            $('.header-container').addClass('small');
        } else {
            $('.header-container').removeClass('small');
        }
    });

    menuLi.each(function () {
        $(this).on('click', () => {
            // add smooth scroll
            // $('html, body').animate({
            //     'scrollTop': $('#' + this.dataset.x).offset().top
            // }, 800);

            // highlight active section
            $(this).addClass("active").siblings().removeClass('active');
        })
    });
    $('.hero-images').slick({
        nextArrow:$('.next'),
        prevArrow:$('.prev')
    });
});