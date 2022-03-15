const menuMobileContainer = document.querySelector('.menu-mobile');

const closeMenuMobile = () => {
    menuMobileContainer.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}

const openMenuMobile = () => {
    menuMobileContainer.style.display = 'block';
    document.body.style.overflowY = 'hidden';

    const closeButtonMenuMobile = document.querySelector('.menu-mobile__close-button');
    closeButtonMenuMobile.addEventListener('click', closeMenuMobile);
}

export default openMenuMobile;