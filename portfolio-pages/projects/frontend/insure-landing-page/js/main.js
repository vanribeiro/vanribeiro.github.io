const menu = document.querySelector('.nav-menu-icon');
const allLinks = document.querySelector('#nav-all-links');
const menuIcon = document.querySelector('.nav-menu-icon img');

menu.onclick = function (){
    allLinks.style.height = '100vh';
    menuIcon.src = "../images/icon-close.svg";
}
