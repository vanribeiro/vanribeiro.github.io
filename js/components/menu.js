import { topMenuList, menuMobile } from './../templates/index.js';


const menu = () => {
    const topMenu = document.querySelector('.header-page__menu');
    const menuMobileContainer = document.querySelector('nav.menu-mobile');
   
    topMenu.innerHTML = topMenuList();
    menuMobileContainer.innerHTML = menuMobile(); 
}

export default menu;