import { aluraStudyngTemplate } from "../templates/index.js";
import { URL_BASE_API } from "./config.js";

const populateCards = (item, container) => {
    const article = document.createElement('article');
    article.classList.add('course-in-progress__item');
    article.innerHTML = aluraStudyngTemplate(item.name, item.progress, item.slug);
    container.append(article);
}

const setMessageWhenNoCourseIsInProgress = () => {
    const message = document.createElement('div');
    const text = document.createElement('p');
    const textNode = document.createTextNode('nenhum curso no momento');
    message.classList.add('status-message');
    message.classList.add('status-message--no-courses-in-progress');
    container.append(message);
    message.append(text);
    text.appendChild(textNode);
}

const fetchAluraDashboardData = async (container) => {

    await fetch(`${URL_BASE_API}/api/estudando-na-alura`)
        .then(response => response.json())
        .then(data => {
            if(data.length === 0 || data === undefined || data === null){
                setMessageWhenNoCourseIsInProgress();
            } else{
                data.map(item => populateCards(item, container));
            }
        });
}

export default fetchAluraDashboardData;