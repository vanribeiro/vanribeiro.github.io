import { instagramItemTemplate } from "../templates/index.js";

const setURL = () => {
    const localhost = 'http://localhost:3000';
    const URLbase = 'https://vanribeiro-github-io-backend.vercel.app';
    return window.location.port === "5500" ? localhost : URLbase;
}

const fetchInstagramMediaData = async (container) => {
    await fetch(`${setURL()}/api/meu-instagram`)
        .then(response => response.json())
        .then(insta => {
            insta["data"].slice(0, 15)
            .map(item => {
                const li = document.createElement('li');
                li.classList.add('instagram-posts__list-item');
                li.classList.add('swiper-slide');
                li.innerHTML = 
                    instagramItemTemplate(
                        item.caption, 
                        item.media_type, 
                        item.permalink, 
                        item.thumbnail_url,
                        item.media_url
                        );
                        
                    container.append(li);
                        
                }
            );
        })
        
}

export default fetchInstagramMediaData;