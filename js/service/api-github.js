import { githubCardRepoTemplate } from "../templates/index.js";

const fetchGithubReposData = async (container) => {

    await fetch('https://api.github.com/users/vanribeiro/repos')
        .then(response => response.json())
        .then(data => data.sort((a, b) => {
            if(a.pushed_at < b.pushed_at) return 1;
            if(a.pushed_at > b.pushed_at) return -1;
            return 0;
        })
        .slice(0, 4)
        .map(item => {
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
        ));
        
}

export default fetchGithubReposData;