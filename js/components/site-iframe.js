const iframe = document.querySelector('.live-jobs__source');
const link = document.querySelector('.live-jobs__link');
const span = link.querySelector('.live-jobs__link__url');

const urlDictionary = [
    {
        title: 'abrir em outra aba: 30 day of JavaScript - WesBos Challenge',
        url: 'https://vanribeiro-30daysofjavascript.netlify.app'
    },
    {
        title: 'abrir em outra aba: Know more about countries app - Frontend Mentor Challenge',
        url: 'https://know-more-about-countries-app.vercel.app'
    }, 
    {
        title: 'abrir em outra aba: Advice Generator App - Frontend Mentor Challenge',
        url: 'https://advice-generator-app-cyan.vercel.app',
    } 
];

function getRandomNumber(min, max) {
    const MIN = Math.ceil(min);
    const MAX = Math.floor(max);
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function getRandomUrlSource () {
    const urlDictionarySize = Object.keys(urlDictionary).length;
    const randomUrl = urlDictionary[getRandomNumber(0, urlDictionarySize)];

    if(urlDictionarySize === 0) {
        iframe.style.border = '1px solid #242424';
        iframe.style.boxShadow = '1px 1px 5px #242424'
    }

    iframe.setAttribute('src', randomUrl.url);
    link.setAttribute('href', randomUrl.url);
    span.textContent = randomUrl.title;
}

export {
    getRandomUrlSource
}