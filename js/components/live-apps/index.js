import urlDictionary from './site-iframe-urls.js';
const iframe = document.querySelector('.live-jobs__source');
const link = document.querySelector('.live-jobs__link');
const span = link.querySelector('.live-jobs__link__url');

function getRandomNumber(min, max) {
    const MIN = Math.ceil(min);
    const MAX = Math.floor(max);
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function liveAppsRandomly () {
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

export default liveAppsRandomly;