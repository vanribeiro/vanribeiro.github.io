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

var slideIndexFrontEnd = 0;
var slideIndexBackEnd = 0;
var slideIndexOthers = 0;
function showSlides() {
    let slidesBackEnd = document.querySelectorAll(".backend-slide");
    let slidesFrontEnd = document.querySelectorAll(".frontend-slide");
    let slidesOthers = document.querySelectorAll(".others-slides");
    for(let i = 0; i < slidesFrontEnd.length; i++){
        slidesFrontEnd[i].style.display = 'none';
    }

    for(let i = 0; i < slidesBackEnd.length; i++){
        slidesBackEnd[i].style.display = 'none';
    }

    for(let i = 0; i < slidesOthers.length; i++){
        slidesOthers[i].style.display = 'none';
    }

    slideIndexFrontEnd++;
    slideIndexBackEnd++;
    slideIndexOthers++;
    if(slideIndexFrontEnd > slidesFrontEnd.length){slideIndexFrontEnd = 1;}
    if(slideIndexBackEnd > slidesBackEnd.length){slideIndexBackEnd = 1;}
    if(slideIndexOthers > slidesOthers.length){slideIndexOthers = 1}

        slidesFrontEnd[slideIndexFrontEnd-1].style.display = 'block';
        slidesBackEnd[slideIndexBackEnd-1].style.display = 'block';
        slidesOthers[slideIndexOthers-1].style.display = 'block';
        setTimeout(showSlides, 2500);
}

function main() {
    tagStatus();
    showSlides();
    
}


window.load = main();