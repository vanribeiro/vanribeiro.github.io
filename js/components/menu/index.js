import menuMobile from "./mobile.js";
import menuTopList from "./top-list.js";

const menu = () => {
    const topMenu = document.querySelector('.header-page__menu');
    const menuMobileContainer = document.querySelector('nav.menu-mobile');
    if(topMenu && menuMobileContainer){
        topMenu.innerHTML = menuTopList();
        menuMobileContainer.innerHTML = menuMobile(); 
    }
}

export default menu;