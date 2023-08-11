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
/*
<section class="instagram-posts">
<header class="instagram-posts__header">
    <h3 class="instagram-posts__title card-title">
        <i class="instagram-posts__logo-icon icons"></i>
        instagram
    </h3>
</header>
<div class="instagram-posts__container">
    <div class="instagram-posts__all-items">
        <ul class="instagram-posts__list"></ul>
        <div class="swiper-pagination"></div>
    </div>
</div>
</section>
*/
export {
    handlerSwiperCSSclasses,
}