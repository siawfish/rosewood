import cr7 from '../assets/img/bg7.jpeg'
import cr8 from '../assets/img/bg8.jpeg'
import cr9 from '../assets/img/bg9.jpeg'

export const baseUrl = 'https://rosewoodgh.herokuapp.com/api'

export const carouselData = [
    cr7,
    cr8,
    cr9
]

export const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
}