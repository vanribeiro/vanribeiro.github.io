const input = document.querySelector('#email');
const msg = document.querySelector('#msg');
const form = document.querySelector('form');

/**
 * This function was written using the RegExp of below link:
 * https://codigofonte.com.br/codigos/validacao-completa-de-email-com-javascript-e-expressao-regular
 */

function isAnEmail (email) {
    let exclude = /[^@\.\w]|^[\_@\.\-]|[\.\_\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    let check = /@[\w\-]+./;
    let checkend = /\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||
        (email.search(check) == -1))||
        (email.search(checkend) == -1)){
            return false;
    } else{
        return true;
    }
}

form.addEventListener('submit', (event) =>{
    let p = document.createElement('p');
    let value = input.value;

    if(isAnEmail(value) == false || value == ''){
        event.preventDefault();
        p.textContent = 'Please, provide a valid e-mail!';
        input.classList.add('error-msg');
    }
    msg.appendChild(p);
});
