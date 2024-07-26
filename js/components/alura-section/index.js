import { fetchData } from "../../service/api.js";
import endpoint from "../../service/config.js";
import aluraProgressCourseTemplate from "./alura-progress-course-template.js";

const aluraCardContainer = document.querySelector('.course-in-progress__all-items');

const populateCards = (item) => {
    const article = document.createElement('article');
    article.classList.add('course-in-progress__item');
    article.innerHTML = aluraProgressCourseTemplate(item.name, item.progress, item.slug);
    aluraCardContainer.append(article);
}

const setMessageWhenNoCourseIsInProgress = () => {
    const message = document.createElement('div');
    const text = document.createElement('p');
    const textNode = document.createTextNode('nenhum curso no momento');
    message.classList.add('status-message');
    message.classList.add('status-message--no-courses-in-progress');
    aluraCardContainer.append(message);
    message.append(text);
    text.appendChild(textNode);
}

const aluraSection = async () => {

    const isEmpty = (data) => data.length === 0 || data === undefined || data === null;

    return await fetchData(endpoint.ALURA, '?collection=progresso')
        .then(data => {
            const { response, result } = data;

            isEmpty(result)
            ? setMessageWhenNoCourseIsInProgress()
            : result.data.slice(0, 3).map(item => populateCards(item));

            return response;
        });
        
}

export default aluraSection;