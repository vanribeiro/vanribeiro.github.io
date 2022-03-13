import getGithubRepoData from "../service/api-github.js";
import getAluraDashboardData from "../service/api-alura.js";

const githubCardsContainer = document.querySelector('.github-repos__cards');
const aluraCardContainer = document.querySelector('.course-in-progress__all-items');

getGithubRepoData(githubCardsContainer);
getAluraDashboardData(aluraCardContainer);

setTimeout(() => {

    const allProgressBar = document.querySelectorAll('.progress-bar');
    allProgressBar.forEach(progressBar => {
        const pertcentual = progressBar.dataset.barValue;
        progressBar.style.width = `${pertcentual}%`;
        console.log(progressBar.dataset.barValue)
    })

}, 500);

