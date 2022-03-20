import { aluraStudyngTemplate } from "../templates/index.js";

const fetchAluraDashboardData = async (container) => {
    const URLbase = 'https://vanribeiro-github-io-backend.vercel.app';

    await fetch(`${URLbase}/api/estudando-na-alura`)
        .then(response => response.json())
        .then(data => {
            if(data.length === 0 || data === undefined || data === null){
                const message = document.createElement('div');
                const text = document.createElement('p');
                const textNode = document.createTextNode('nenhum curso no momento');
                message.classList.add('status-message');
                message.classList.add('status-message--no-courses-in-progress');
                container.append(message);
                message.append(text);
                text.appendChild(textNode);
            } else{
                data.map(item => {
                    const article = document.createElement('article');
                    article.classList.add('course-in-progress__item');
                    article.innerHTML = aluraStudyngTemplate(item.name, item.progress, item.slug);
                    container.append(article);
                });
            }
        });
}

export default fetchAluraDashboardData;