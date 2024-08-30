
/**
 * const: headerHTML carrega o header diretamente pelo JavaScript.
 * const: footerHTML carrega o footer diretamente pelo JavaScript.
 * @args: 'afterbegin' insere o header no início do body.
 * @args: veforebegin insere o footer no final do body.
 * function: setActive() faz o toggle da class 'active' no link de navegação ativo.
 * @autor: alex cesar
 **/
document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
        <header>
            <div class="container flex">
               <a href="index.html" style="font-weight:700;" class="nav-link">Início</a>
                <nav>
                    <a href="about.html" class="nav-link">Sobre</a>
                    <a href="education.html" class="nav-link">Formação</a>
                    <a href="contact.html" class="nav-link">Contato</a>
                    <a href="https://portfolio-thealexcesar.vercel.app" target="_blank">Portfólio</a>
                </nav>
            </div>
        </header>
    `
    const footerHTML = `<footer style="justify-content: center">&copy; 2024 Alex Cesar</footer>`
    document.body.insertAdjacentHTML('afterbegin', headerHTML)
    document.body.insertAdjacentHTML('beforeend', footerHTML)
    setActiveNavLink()
})

function setActiveNavLink() {
    document.querySelectorAll('nav a').forEach(link => {
        const currentPath = window.location.pathname.split('/').pop()
        link.getAttribute('href') === currentPath ? link.classList.add('active') : link.classList.remove('active')
    });
}