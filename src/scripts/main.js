const selectors = {
    productsContainer: '[products-list]',
    testimonialsContainer: '[testimonials-list]'
};

// Swiper elements
const productsSwiper = document.querySelector(selectors.productsContainer);
const testimonialsSwiper = document.querySelector(selectors.testimonialsContainer);


// Products Slider
const productsParams = {
    slidesPerView: 4,
    spaceBetween: 7,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 7 // decreased from 26px as per design, because grid is not fitting well with next section
        }
    },
    pagination: {
        el: `.main-products .swiper-pagination`,
    },
};
Object.assign(productsSwiper, productsParams);
productsSwiper.initialize();


// Testimonials Slider

const testimonialsParams = {
    slidesPerView: 1,
    cssMode: false,
    navigation: {
        nextEl: '.swiper-navigation-next',
        prevEl: '.swiper-navigation-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60
        },
    },
    pagination: {
        el: `.main-testimonials .swiper-pagination`,
    },
};
Object.assign(testimonialsSwiper, testimonialsParams);
testimonialsSwiper.initialize();