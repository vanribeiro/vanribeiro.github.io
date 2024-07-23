import { URL_BASE_API_ALURA, URL_BASE_API_GITHUB } from "./config.js";

const fetchGithubReposData = async () => {
    const response = await fetch(`${URL_BASE_API_GITHUB}?sort=updated&direction=desc`);
    const data = await response.json();
    return data;        
}

const fetchInstagramMediaData = async () => {
    const response = await fetch(`${URL_BASE_API}/api/meu-instagram`);
    const data = await response.json();
    return data;        
}

const fetchAluraDashboardData = async () => {
    const response = await fetch(`${URL_BASE_API_ALURA}?collection=progresso`);
    const result = await response.json();
    return [ response, result ];        
}

export {
    fetchGithubReposData,
    fetchInstagramMediaData,
    fetchAluraDashboardData
};