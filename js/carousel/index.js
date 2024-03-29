import Swiper from '../libs/swiper.min.js';

const newCarousel = (container, carouselState) =>{

    const swiper = new Swiper(container, {
        slidesPerView: 3,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            280:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
    });
    
    if(carouselState === 'destroy'){
      return swiper.destroy(true, true);;
    } else {
      return swiper;
    }

}

export default newCarousel;