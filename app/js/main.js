$(function () {

    //Слайдер с матчами

    let matches = new Swiper('.matches-slider', {
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

    //Слайдер для статистики игроков на главной странице

    let players = new Swiper('.players-slider', {
        keyboard: true,
        navigation: {
            nextEl: '.players-next',
            prevEl: '.players-prev',
        },
    });

    //Табы для турнирной таблицы для главной страницы

    let tabs = document.querySelectorAll('.tab-tour-tab')
    let tabContent = document.querySelectorAll('.tabulation-tour__group')

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', function (){
            if(tab.classList.contains('active')){
                tab.classList.remove('active')
            }
            tabs.forEach((elem) => {
                elem.classList.remove('active')
            })
            tab.classList.add('active')

            if (tabContent[i].classList.contains('active')){
                tabContent[i].classList.remove('active')
            }
            tabContent.forEach((elem) => {
                elem.classList.remove('active')
            })
            tabContent[i].classList.add('active')
        })
    })

})