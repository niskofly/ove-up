$(function () {

    //Слайдер с матчами

    let swiper = new Swiper('.matches-slider', {
        slidesPerView: 6,
        spaceBetween: 20,
        infinity: true,
        loop: true,
        keyboard: true,
        rewind: true,

        // Navigation arrows
        navigation: {
            nextEl: '.matches-next',
            prevEl: '.matches-prev',
        },
    });

})