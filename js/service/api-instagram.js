import { instagramItemTemplate } from "../templates/index.js";
import { URL_BASE_API } from "./config.js";

const populateCards = (item, container) => {
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

const fetchInstagramMediaData = async (container) => {
    await fetch(`${URL_BASE_API}/api/meu-instagram`)
        .then(response => response.json())
        .then(insta => {
                insta.data
                .slice(0, 15)
                .map(item => populateCards(item, container));
        })
        
}

export default fetchInstagramMediaData;