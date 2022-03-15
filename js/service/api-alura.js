import { aluraStudyngTemplate } from "../templates/index.js";

const fetchAluraDashboardData = async (container) => {
    const URLbase = 'https://vanribeiro-github-io-backend.vercel.app';

    await fetch(`${URLbase}/api/estudando-na-alura`)
        .then(response => response.json())
        .then(data => {
            data.map(item => {
                const article = document.createElement('article');
                article.classList.add('course-in-progress__item');
                article.innerHTML = aluraStudyngTemplate(item.name, item.progress, item.slug);
                container.append(article);
            })
        });
}

export default fetchAluraDashboardData;