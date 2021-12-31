const footerTemplate = `
    <p> © 2020-2021
        <a class="footer-link" href="mailto:vanribeiro.dev@gmail.com">
            Van Ribeiro
        </a>.
    </p>
    <p>Todos os direitos reservados.</p>`;


const addFooterTemplate = () => {
    const footer = document.querySelector('footer .footer');
    footer.innerHTML = footerTemplate;
}

export default addFooterTemplate;