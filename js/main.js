let menu = document.querySelector('.menu');
let hamIcon = document.querySelector('.ham-icon');
let close = document.querySelector('.close');

let openMenu = function () {
    menu.style.display = "block";
    hamIcon.style.display = "none";
    close.style.display = "block";
}

let closeMenu = function(){
    menu.style.display = "none";
    hamIcon.style.display = "block";
    close.style.display = "none";
}

hamIcon.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function tagStatus(){
    let statusTag = document.querySelectorAll('.status');
    for(let i = 0; i < statusTag.length; i++){
        let status = '';
        status = statusTag[i].textContent;
        switch (status) {
            case 'concluído':
                    statusTag[i].style.backgroundColor = '#2f963b';
                    statusTag[i].style.color = '#ebebeb';
                break;
            case 'em progresso':
                    statusTag[i].style.backgroundColor = '#edac2a';
                    statusTag[i].style.color = '#404040';
                break;
            case 'iniciado':
                    statusTag[i].style.backgroundColor = '#5fb2bb';
                    statusTag[i].style.color = '#404040';
                break;
            default:
                    statusTag[i].textContent = 'Ops! Status inválido...';
                    statusTag[i].style.backgroundColor = '#e74c4c';
                    statusTag[i].style.color = '#ebebeb';
                break;
        }
    }
    
}

function main() {  
    tagStatus();
}


window.load = main();