let monthly = document.querySelectorAll('.monthly-price');
let annually = document.querySelectorAll('.annually-price');
let toggleBtn = document.querySelector('#toggle-price');

function togglePrice(){

    if(toggleBtn.checked){
        for(let i = 0; i < monthly.length; i++){
            annually[i].style.display = 'none';
            monthly[i].style.display = 'inline-table';
            monthly[i].style.width = '100%';
        }   
    } else{
        for(let i = 0; i < annually.length; i++){
            monthly[i].style.display = 'none';
            annually[i].style.display = 'inline-table';
            annually[i].style.width = '100%';
        }
    }
}