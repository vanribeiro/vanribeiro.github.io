const instagramItemTemplate = (caption, media_type, permalink, thumbnail_url, media_url) =>{
    return `
        <a href="${permalink}" rel="noreferrer noopener" target="_blank">
            <figure class="instagram-posts__image-container">
                <img 
                    style="height:1080; width:1080px;"
                    loading="lazy"
                    class="img-responsive instagram-posts__image lazyload" 
                    src="./../assets/img/placeholders/placeholder-image.svg" 
                    data-src="${media_type === 'VIDEO' ? thumbnail_url : media_url}" 
                    alt="${caption}"
                >
            </figure>
        </a>
    `;
}

export default instagramItemTemplate;