const devToPostsCardTemplate = (title, description, publishAt, url, image) =>{

    return `
        <div class="posts__dev-to__card__container">
            <header class="posts__dev-to__header">
                <a class="posts__dev-to__link" href=${url} rel="noreferrer noopener" target="_blank">
                    <figure>
                        <img 
                            class="posts__dev-to__image" 
                            src="${image}" 
                            alt="Capa do post"
                        >
                    </figure>
                    <h4 class="posts__dev-to__title card__container--dev-to">
                        ${title}
                    </h4>
                </a>
                <h5 class="posts__dev-to__subtitle card__container--dev-to">
                    <span class="posts__dev-to__data">
                        ${publishAt} - Van Ribeiro
                    </span>
                </h5>
            </header>
            <div class="posts__dev-to__content card__container--dev-to">
                <div class="posts__dev-to__description">
                    <p>${description === null ? 'nenhuma descrição encontrada': description}</p>
                </div>
            </div>
        </div>
    `;

}

const githubCardRepoTemplate = (repoName, repoDescription, repoLastUpdate, repoProgrammingLanguage, repoURL) =>{

    const date = new Date(repoLastUpdate);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mounth = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const repoLastDayUpdate = `${day}/${mounth}/${year}`;

    return `
        <div class="github-repo__card__container card__container">
            <header class="github-repo__header">
                <a class="github-repo__link" href=${repoURL} rel="noreferrer noopener" target="_blank">
                    <h4 class="github-repo__title subtitle-cards">
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
            <a href="https://cursos.alura.com.br/course/${courseSlug}" title="Informações sobre o curso" rel="noreferrer noopener" target="_blank">
                <h4 class="courses-in-progress__item-title subtitle-cards">
                    ${courseName}
                </h4>
            </a>
        </header>
        <div class="progress-bar__container">
            <div class="progress-bar__background">
                <div class="progress-bar" data-bar-value="${courseProgress}" style="width:0%"></div>
            </div>
            <span class="progress-bar__percentual">${courseProgress}%</span>
        </div>
    `;

}

const instagramItemTemplate = (caption, media_type, permalink, thumbnail_url, media_url) =>{
    return `
        <a href="${permalink}" rel="noreferrer noopener" target="_blank">
            <figure class="instagram-posts__image-container">
                <img 
                    style="height:1080; width:1080px;"
                    loading="lazy"
                    class="img-responsive instagram-posts__image lazyload" 
                    src="./../assets/img/placeholders/placeholder-image.svg" 
                    data-src="${media_type === 'VIDEO' ? thumbnail_url : media_url}" 
                    alt="${caption}"
                >
            </figure>
        </a>
    `;
}

const topMenuList = () => {
    return `
        <ul class="header-page__list">
            <li class="header-page__list-item">
                <a class="header-page__link" href="/">Home</a>
            </li>
            <li class="header-page__list-item">
                <a class="header-page__link" href="/paginas/updates.html">Atualizações</a>
            </li>
        </ul>
    `;
}

const menuMobile = () => {
    return `
        <div class="menu-mobile__close-button-container this-container">
            <span class="menu-mobile__close-button">
                &times;
            </span>
        </div>
        <div class="menu-mobile__container this-container">
            <div class="header-page__logo--mobile">
                <a href="/">
                    <h3 class="header-page__logo__title">vanessa ribeiro</h3>
                    <h4 class="header-page__logo__subtitle">front-end developer</h4>
                </a>
            </div>
            <ul class="menu-mobile__list">
                <li class="menu-mobile__list-item">
                    <a class="menu-mobile__link" href="/">Home</a>
                </li>
                <li class="menu-mobile__list-item">
                    <a class="menu-mobile__link" href="/paginas/updates.html">Atualizações</a>
                </li>
            </ul>
            <ul class="menu-mobile__icons-list">
                <a class="menu-mobile__icon-link" href="https://www.linkedin.com/in/vanribeiro" rel="noreferrer noopener" target="_blank" >
                    <i class="icons linkedin"></i>
                </a>
                <a class="menu-mobile__icon-link" href="https://www.instagram.com/vanribeiro.dev" rel="noreferrer noopener" target="_blank" >
                    <i class="icons instagram"></i>                
                </a>
                <a class="menu-mobile__icon-link" href="https://github.com/vanribeiro" rel="noreferrer noopener" target="_blank" >
                    <i class="icons github"></i>
                </a>
            </ul>
        </div>
    `;
}

export{
    devToPostsCardTemplate,
    githubCardRepoTemplate,
    aluraStudyngTemplate,
    instagramItemTemplate,
    menuMobile,
    topMenuList
}