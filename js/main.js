$(function () {
    let mixer = mixitup('.portfolio__content')
    $('.slider__inner').slick(
        {
            dots: true,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img src='image/arrow-left.svg'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img src='image/arrow-right.svg'></button>",
            responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                        arrows: false,
                        // dots: false,
                }
            }
            ]
        }
    )
})
