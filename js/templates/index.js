const githubCardRepoTemplate = (repoName, repoDescription, repoLastUpdate, repoProgrammingLanguage, repoURL) =>{

    const date = new Date(repoLastUpdate);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mounth = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const repoLastDayUpdate = `${day}/${mounth}/${year}`;

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

const aluraStudyngTemplate = (courseName, courseProgress, courseSlug) =>{

    return `
        <header class="course-in-progress__item-header">
            <a href="https://cursos.alura.com.br/course/${courseSlug}" title="Informações sobre o curso" target="blank" rel="noopener">
                <h4 class="courses-in-progress__item-title">
                    ${courseName}
                </h4>
            </a>
        </header>
        <div class="progress-bar__container">
            <div class="progress-bar__background">
                <div class="progress-bar" data-bar-value="${courseProgress}"></div>
            </div>
            <span class="progress-bar__percentual">${courseProgress}%</span>
        </div>
    `;

}

export{
    githubCardRepoTemplate,
    aluraStudyngTemplate
}