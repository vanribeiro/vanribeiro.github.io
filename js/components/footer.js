const footerPages = document.querySelector('footer');

const template = `
    <p>
        © 2022 - 2024 <a class="link" href="mailto:vanribeiro.dev@gmail.com" rel="noreferrer noopener"
            target="_blank">vanessa ribeiro</a>
    </p>
`;

function footer() {
    footerPages.innerHTML = template;
}

export default footer;