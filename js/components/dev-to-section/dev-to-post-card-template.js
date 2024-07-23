const devToPostCardTemplate = (title, description, publishAt, url, image) =>{
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

export default devToPostCardTemplate;