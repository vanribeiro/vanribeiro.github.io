import devToPostsCardTemplate from "./dev-to-post-card-template.js";
import { fetchData } from "../../service/api.js";
import endpoint from "../../service/config.js";

const devToCardsContainer = document.querySelector('.posts__dev-to__cards');

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
    return await fetchData(endpoint.DEV_TO_POSTS_SUMMARY, '?collection=progresso')
        .then(data => {
            const { result } = data;
            return result.data.slice(0, 4).map(item => populateCards(item))
        });
}

export default devToPostSection;