const footerPages = document.querySelector('footer');

const date = new Date();

const template = `
    <p>
        © 2022 - ${date ? date.getFullYear() : '2024'} <a class="link" href="mailto:vanribeiro.dev@gmail.com" rel="noreferrer noopener"
            target="_blank">vanessa ribeiro</a>
    </p>
`;

function footer() {
    footerPages.innerHTML = template;
}

export default footer;