import { fetchAluraDashboardData } from "../service/api.js";
import { aluraStudyngTemplate } from "./../templates/index.js";
import { aluraCardContainer } from "./elements.js";

const populateCards = (item) => {
    const article = document.createElement('article');
    article.classList.add('course-in-progress__item');
    article.innerHTML = aluraStudyngTemplate(item.name, item.progress, item.slug);
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

    return await fetchAluraDashboardData()
        .then(data => {
            isEmpty(data)
            ? setMessageWhenNoCourseIsInProgress()
            : data.map(item => populateCards(item));
        });
        
}

export default aluraSection;