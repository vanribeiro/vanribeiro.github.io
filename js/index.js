import menu from "./components/menu.js";
import openMenuMobile from './handlers/menu-mobile.js';

window.addEventListener('load', menu());

const openButtonMenuMobile = document.querySelector('.humburger__icon');

openButtonMenuMobile.addEventListener('click', openMenuMobile);
