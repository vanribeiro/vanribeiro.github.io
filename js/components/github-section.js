import { githubCardRepoTemplate } from "./../templates/index.js";
import { fetchGithubReposData } from "./../service/api.js";
import { githubCardsContainer } from './elements.js';

const populateCards = (item) => {
    const article = document.createElement('article');
    article.classList.add('github-repo__card');
    article.classList.add('card__paper');
    article.innerHTML = 
        githubCardRepoTemplate(
            item.name, 
            item.description, 
            item.pushed_at, 
            item.language, 
            item.html_url
        );

    githubCardsContainer.append(article);
}

const sortByLastestRepoUpdates = (a, b) => {
    if(a.pushed_at < b.pushed_at) return 1;
    if(a.pushed_at > b.pushed_at) return -1;
    return 0;
}

const githubSection = async () => {
    return await fetchGithubReposData()
        .then(data => data.sort(sortByLastestRepoUpdates)
        .slice(0, 4).map(item => populateCards(item)));
}

export default githubSection;