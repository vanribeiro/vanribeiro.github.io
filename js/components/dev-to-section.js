import { devToPostsCardTemplate } from "../templates/index.js";
import { fetchDevToData } from "../service/api.js";
import { devToCardsContainer } from './elements.js';

const populateCards = (item) => {
    const article = document.createElement('article');
    article.classList.add('posts__dev-to__card');
    article.classList.add('card__paper');
    article.innerHTML = 
        devToPostsCardTemplate(
            item.title, 
            item.description, 
            item.published_at, 
            item.url,
            item.cover_image
        );

    devToCardsContainer.append(article);
}

const devToPostSection = async () => {
    return await fetchDevToData()
        .then(result => result.data.map(item => populateCards(item)));
}

export default devToPostSection;