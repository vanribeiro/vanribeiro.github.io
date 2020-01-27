/** Preciso resolver isso */
function togglePrice(){
    let monthly = document.querySelectorAll('.monthly-price');
    let annually = document.querySelectorAll('.annually-price');

    for(let i = 0; i < monthly.length; i++){
        if(monthly[i].style.display == 'none'){
            monthly[i].style.display = 'block';
            annually[i].style.display = 'none'
        } else{
            monthly[i].style.display = 'none';
            annually[i].style.display = 'block';
        }
    }
}