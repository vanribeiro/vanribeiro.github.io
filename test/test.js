const lib = require('../js/main.js');
const chai = require('chai');
const isAnEmailValid = lib.emailValidation;
const expect = chai.expect;

describe('isValidEmail()', function () {  
    it('Email válido!', () => {
        expect(isAnEmailValid('vanribeiro@gmail.com')).to.equal(true);
    });
});
