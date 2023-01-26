import fetchGithubReposData from "../service/api-github.js";
import fetchAluraDashboardData from "../service/api-alura.js";
import fetchInstagramMediaData from '../service/api-instagram.js';
import { handlerSwiperCSSclasses } from "../handlers/swiper.js";

const githubCardsContainer = document.querySelector('.github-repos__cards');
const aluraCardContainer = document.querySelector('.course-in-progress__all-items');
const instagramListContainer = document.querySelector('.instagram-posts__list');

fetchGithubReposData(githubCardsContainer);
fetchAluraDashboardData(aluraCardContainer);
fetchInstagramMediaData(instagramListContainer);

const playOnProgressBarAnimation = () => {
    const allProgressBar = document.querySelectorAll('.progress-bar');
    if(allProgressBar){
        allProgressBar.forEach(progressBar => {
            const percentual = progressBar.dataset.barValue;
            progressBar.style.width = `${percentual}%`;
        });
    }
}

window.addEventListener('load', () => {
    handlerSwiperCSSclasses();
    setTimeout(playOnProgressBarAnimation, 5 * 100);
});

window.addEventListener('resize', handlerSwiperCSSclasses);
