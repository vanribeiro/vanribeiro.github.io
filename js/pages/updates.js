import { playOnProgressBarAnimation } from "../components/progress-bar.js";
import githubSection from "../components/github-section.js";
import aluraSection from "../components/alura-section.js";
import { getRandomUrlSource } from "../components/site-iframe.js";


githubSection();

const handleLoad = async () => {
    await aluraSection();
    setTimeout(playOnProgressBarAnimation, 5 * 100);
    getRandomUrlSource();
}

window.addEventListener('load', handleLoad);
