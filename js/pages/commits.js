import { handlerSwiperCSSclasses } from "../handlers/swiper.js";
import { playOnProgressBarAnimation } from "../components/progress-bar.js";
import githubSection from "../components/github-section.js";
import instagramSection from "../components/instagram-section.js";
import aluraSection from "../components/alura-section.js";


githubSection();
instagramSection();
aluraSection();

const handleLoad = () => {
    handlerSwiperCSSclasses();
    setTimeout(playOnProgressBarAnimation, 5 * 100);
}

window.addEventListener('load', handleLoad);
window.addEventListener('resize', handlerSwiperCSSclasses);
