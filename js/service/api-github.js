import { githubCardRepoTemplate } from "../templates/index.js";
import { URL_BASE_GITHUB } from "./config.js";

const populateCards = (item, container) => {
    const article = document.createElement('article');
    article.classList.add('github-repo__card');
    article.classList.add('card__paper');
    article.innerHTML = 
        githubCardRepoTemplate(
            item.name, 
            item.description, 
            item.updated_at, 
            item.language, 
            item.html_url
        );

    container.append(article);
}

const sortByLastestRepoUpdates = (a, b) => {
    if(a.pushed_at < b.pushed_at) return 1;
    if(a.pushed_at > b.pushed_at) return -1;
    return 0;
}

const fetchGithubReposData = async (container) => {

    await fetch(URL_BASE_GITHUB)
        .then(response => response.json())
        .then(data => data.sort(sortByLastestRepoUpdates)
        .slice(0, 4)
        .map(item => populateCards(item, container)));
        
}

export default fetchGithubReposData;