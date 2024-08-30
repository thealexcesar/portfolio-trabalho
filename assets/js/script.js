
/*
* headerHTML carrega o header diretamente pelo JavaScript
* footerHTML carrega o footer diretamente pelo JavaScript
* afterbegin insere o header no início do body
* veforebegin insere o footer no final do body
* setActive() define a classe 'active' no link de navegação ativo
* @autor: alex cesar
* */
document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
        <header>
            <div class="container flex">
               <a href="index.html" style="font-weight:700;" class="nav-link">Início</a>
                <nav>
                    <a href="about.html" class="nav-link">Sobre</a>
                    <a href="education.html" class="nav-link">Formação</a>
                    <a href="contact.html" class="nav-link">Contato</a>
                    <a href="https://alexcesar.dev" target="_blank">Portfólio</a>
                </nav>
            </div>
        </header>
    `
    const footerHTML = `<footer style="justify-content: center">&copy; 2024 Alex Cesar da Silva</footer>`
    document.body.insertAdjacentHTML('afterbegin', headerHTML)
    document.body.insertAdjacentHTML('beforeend', footerHTML)
    setActiveNavLink()
})

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('nav a')
    const currentPath = window.location.pathname

    navLinks.forEach(link => {
        link.getAttribute('href') === currentPath.split('/').pop()
            ? link.classList.add('active') : link.classList.remove('active')
    })
}
