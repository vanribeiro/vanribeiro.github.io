import newCarousel from "../carousel/index.js";

const handlerSwiperCSSclasses = () => {
    const swiperContainer = document.querySelector('.instagram-posts__all-items');
    const swiperWrapper = document.querySelector('.instagram-posts__list');
    const swiperPagination = document.querySelector('.swiper-pagination');

    if(window.innerWidth < 744){
        swiperContainer.classList.add('swiper');
        swiperWrapper.classList.add('swiper-wrapper');
        swiperPagination.style.display = 'block';
        newCarousel('.swiper');
    } else{
        swiperContainer.classList.remove('swiper');
        swiperWrapper.classList.remove('swiper-wrapper');
        swiperPagination.style.display = 'none';
        newCarousel('destroy');
    }
}

export {
    handlerSwiperCSSclasses,
}