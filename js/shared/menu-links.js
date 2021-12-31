const menuLinks = ` 
    <div class="header">
    <div class="container">
        <div class="header-group ">
            <div class="logo-img">
                <a href="/">
                    <img class="logo img-fluid" src="/img/icones/novo-icone-256px.png" alt="Van Ribeiro - Logo">
                </a>
            </div>
            <div class="header-page-title">
                <a class="link-title" href="/">
                    <h1 class="header-page-title">VAN RIBEIRO</h1>
                    <p>desenvolvedora web front-end</p>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div class="all-links container">
    <a class="menu-rwd" href="/portfolio-pages/projects/frontend.html">Portfolio</a>
    <a class="menu-rwd" href="/encontre-me.html">Encontre-me!</a>
    <a class="menu-rwd" href="/downloads/cv-vanessa-ribeiro.pdf" download="cv-vanessa-ribeiro.pdf">Meu CV</a>
    </div>          
`;

const addMenuLinks = () => {
    const topMenu = document.querySelector('#top-menu');
    if(topMenu){
        topMenu.innerHTML= menuLinks
    }
}

export default addMenuLinks;