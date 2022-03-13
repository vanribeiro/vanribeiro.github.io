const gitCardRepoTemplate = (repoName, repoDescription, repoLastUpdate, repoProgrammingLanguage, repoURL) =>{
    const date = new Date(repoLastUpdate);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mounth = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const repoLastDayUpdate = `${day}/${mounth}/${year}`
    return `
        <div class="github-repo__card__container card__container">
            <header class="github-repo__header">
                <a class="github-repo__link" href=${repoURL} target="blank" rel="noopener">
                    <h4 class="github-repo__title">
                        <i class="github-repos__book-icon icons"></i>
                        ${repoName}
                    </h4>
                </a>
            </header>
            <div class="github-repo__content">
                <div class="github-repo__description">
                    <p>${repoDescription === null ? 'not specified': repoDescription}</p>
                </div>
                <div class="github-repo__info">
                    <span class="github-repo__data">
                        ${repoLastDayUpdate}
                    </span>
                    <span class="github-repo__language-name">
                        <i class="github-repo__color bg-color-${repoProgrammingLanguage === null ? 'default': repoProgrammingLanguage.toLowerCase()}"></i>
                        ${repoProgrammingLanguage === null ? 'not specified': repoProgrammingLanguage}
                    </span>
                </div>
            </div>
        </div>
    `;
}

export{
    gitCardRepoTemplate
}