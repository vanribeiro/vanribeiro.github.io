const URL_BASE_API = 'https://vanribeiro-github-io-backend.vercel.app/api';
const URL_BASE_API_GITHUB = 'https://api.github.com/users/vanribeiro/repos';

const endpoint = {
  ALURA: `${URL_BASE_API}/alura/dashboard`,
  GITHUB: `${URL_BASE_API_GITHUB}`,
  DEV_TO_POSTS: `${URL_BASE_API}/dev-to/posts`,
  DEV_TO_POSTS_SUMMARY: `${URL_BASE_API}/dev-to/posts-summary`,
};

export default endpoint;