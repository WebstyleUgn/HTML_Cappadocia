$(function(){
    function initSlider(selector) {
        $(selector).slick({
            prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="icons/arrow-prev.svg"</button>',
            nextArrow: '<button type="button" class="slick-next slick-btn"><img src="icons/arrow-next.svg"</button>',
            autoplay: true,
            fade: true,
            responsive: [
                {
                    breakpoint: 601,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }

    initSlider('.fairy__slider');
    initSlider('.trip__slider');
});