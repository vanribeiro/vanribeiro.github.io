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

export default menuMobile;