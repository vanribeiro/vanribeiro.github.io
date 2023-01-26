import { URL_BASE_API, URL_BASE_API_GITHUB } from "./config.js";

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
    const response = await fetch(`${URL_BASE_API}/api/estudando-na-alura`);
    const data = await response.json();
    return data;        
}

export {
    fetchGithubReposData,
    fetchInstagramMediaData,
    fetchAluraDashboardData
};