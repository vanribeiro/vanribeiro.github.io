const input = document.querySelector('#email');
const msg = document.querySelector('#msg');

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

let validationEmail = () =>{
    let p = document.createElement('p');
    if(isAnEmail(input.value) == false){
        p.appendChild = 'Please, provide a valid e-mail!'
    }
    msg.appendChild(p);
}

input.addEventListener('submit', validationEmail());


// exports.isAnEmail = isAnEmail;