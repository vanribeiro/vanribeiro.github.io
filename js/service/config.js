const URL_BASE_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://vanribeiro-github-io-backend.vercel.app';

const URL_BASE_GITHUB = 'https://api.github.com/users/vanribeiro/repos';

export { 
  URL_BASE_API,
  URL_BASE_GITHUB
}