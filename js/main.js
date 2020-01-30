exports.emailValidation = (email) => {
    let re = /\w+/;
    let answer = re.test(email);
    return answer;
}

//input.addEventListener('submit', validationEmail());
//let input = document.querySelector('#email-address');