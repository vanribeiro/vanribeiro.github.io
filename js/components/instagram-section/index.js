import endpoint from "../../service/config.js";
import { fetchData } from "../../service/api.js";
import { instagramItemTemplate } from "./instagram-item-template.js";

const instagramListContainer = document.querySelector('.instagram-posts__list');

const populateCards = (item) => {
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
            
        instagramListContainer.append(li);
}

const instagramSection = async () => {
    return await fetchData(`${endpoint.ALURA}/api/meu-instagram`) 
                .then(insta => { 
                    insta.data.slice(0, 15)
                    .map(item => populateCards(item))
                });        
}

export default instagramSection;