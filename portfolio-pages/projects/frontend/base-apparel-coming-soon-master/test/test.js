const lib = require('../js/main.js');
const chai = require('chai');
const isAnEmailValid = lib.isAnEmail;
const expect = chai.expect;

let emails = [
    {args: 'vanribeiro@gmail.com', expected: true},
    {args: 'vanribeiro.dev@gmail.com', expected: true},
    {args: 'vanribeiro@bol.com.br', expected: true},
    {args: 'van_ribeiro@bol.com.br', expected: true},
    {args: 'vanribeiro@gmail.com', expected: true},
    {args: 'vanribeiro.dev@bol.com.br', expected: true},
    {args: 'vanribeiro@bol', expected: false},
    {args: 'vanribeiro.@bol.com.br', expected: false},
    {args: 'v', expected: false},
    {args: '@bol.com.br', expected: false},
    {args: 'van ribeiro@bol.com.br', expected: false}
]

describe('isValidEmail()', () => {
    emails.forEach((test) => {
        it("E-mails: " + test.args + " - resposta experada: " + test.expected, ()=>{
            let res = isAnEmailValid(test.args);
            expect(res).to.equal(test.expected);
        });
    });
});