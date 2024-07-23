import playOnProgressBarAnimation from "../components/progress-bar/index.js";
import githubSection from "../components/github-section/index.js";
import aluraSection from "../components/alura-section/index.js";
import devToPostSection from "../components/dev-to-section/index.js";
import liveAppsRandomly from "../components/live-apps/index.js";

const handleLoad = async () => {
    await githubSection();
    await devToPostSection();
    await aluraSection();
    
    setTimeout(playOnProgressBarAnimation, 5 * 100);
    liveAppsRandomly();
}

window.addEventListener('load', handleLoad);
