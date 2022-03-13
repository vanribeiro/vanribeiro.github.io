import getGithubRepoData from "../service/api-github.js";

const githubCardsContainer = document.querySelector('.github-repos__cards');

getGithubRepoData(githubCardsContainer);
