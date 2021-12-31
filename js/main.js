import tagStatus from './portfolio/tag-status.js';
import controlMenu from './shared/open-close-menu.js';
import addFooterTemplate from './shared/footer.js';
import addMenuLinks from './shared/menu-links.js';


function main() {
    addMenuLinks();
    addFooterTemplate();
    tagStatus();
    controlMenu();
}


window.load = main();