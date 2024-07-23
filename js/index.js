import footer from "./components/footer/index.js";
import menu from "./components/menu/index.js";
import openMenuMobile from './handlers/menu-mobile.js';

window.addEventListener('load', () => {
    menu();
    footer();
});

const openButtonMenuMobile = document.querySelector('.humburger__icon');
if(openButtonMenuMobile) {
    openButtonMenuMobile.addEventListener('click', openMenuMobile);
}
