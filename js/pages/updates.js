import { playOnProgressBarAnimation } from "../components/progress-bar.js";
import githubSection from "../components/github-section.js";
import aluraSection from "../components/alura-section.js";
import { getRandomUrlSource } from "../components/site-iframe.js";
import devToPostSection from "../components/dev-to-section.js";

const handleLoad = async () => {
    await githubSection();
    await devToPostSection();
    await aluraSection();
    
    setTimeout(playOnProgressBarAnimation, 5 * 100);
    getRandomUrlSource();
}

window.addEventListener('load', handleLoad);
