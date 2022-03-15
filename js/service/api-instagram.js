import { instagramItemTemplate } from "../templates/index.js";

const fetchInstagramMediaData = async (container) => {
    const URLbase = 'https://vanribeiro-github-io-backend.vercel.app';

    await fetch(`${URLbase}/api/meu-instagram`)
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