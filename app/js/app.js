$(document).ready(function(){
    $('.sort__btn').on('click', function () {
        $(this).toggleClass('is-ascending');
    });

    $('.cats__like').on('click', function() {
       $(this).toggleClass('is-clicked');
    });

    $(".header__burger").on('click', function(){
        $(this).toggleClass("is-cross");
        $(".header__menu").toggleClass("is-active");
    });

    new JustValidate('.footer__form', {
        rules: {
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            email: 'Некорректный e-mail'
        },

        colorWrong: '#FF5C00'
    });
});

$(window).scroll(function(){
    if(window.pageYOffset > 200) {
        $('.up-button').addClass('shown');
    } else {
        $('.up-button').removeClass('shown');
    }
});
$('.up-button').on('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
