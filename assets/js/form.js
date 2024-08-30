/**
 * window.onload: Inicializa a função principal ao carregar a página.
 * const: emailInput, nameInput, messageTextarea, submitButton fazem referência aos elementos do formulário.
 * const: emailRegex é valida o formato do e-mail.
 * function: validateForm() verifica se o formulário é válido e habilita/desabilita o botão de envio.
 * @args: emailRegex.test() verifica se o e-mail está no formato correto.
 * @args: toggle('valid', emailValid) aplica ou remove a classe 'valid' conforme a validade dos inputs.
 * @args: toggle('invalid', !emailValid) aplica ou remove a classe 'invalid' conforme a validade dos inputs.
 * @event: input nos elementos de e-mail, nome e mensagem para validar enquanto o usuário digita.
 * @event: submit para enviar o formulário com o EmailJS e manipular a resposta.
 * @autor: alex cesar
 **/
window.onload = function () {
    emailjs.init(CONFIG.PUBLIC_KEY)
    const emailInput = document.querySelector('input[name="user_email"]')
    const nameInput = document.querySelector('input[name="user_name"]')
    const messageTextarea = document.querySelector('textarea[name="message"]')
    const submitButton = document.querySelector('input[type="submit"]')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function validateForm() {
        const emailValid = emailRegex.test(emailInput.value)
        const nameValid = nameInput.value.trim() !== ''
        const messageValid = messageTextarea.value.trim().length >= 5

        emailInput.classList.toggle('valid', emailValid)
        emailInput.classList.toggle('invalid', !emailValid)
        nameInput.classList.toggle('valid', nameValid)
        nameInput.classList.toggle('invalid', !nameValid)
        messageTextarea.classList.toggle('valid', messageValid)
        messageTextarea.classList.toggle('invalid', !messageValid)

        submitButton.disabled = !(emailValid && nameValid && messageValid)
        submitButton.classList.toggle('active', emailValid && nameValid && messageValid)
    }
    emailInput.addEventListener('input', validateForm)
    nameInput.addEventListener('input', validateForm)
    messageTextarea.addEventListener('input', validateForm)
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault()
        emailjs.sendForm(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, this)
            .then(() => {
                console.log('SUCESSO!')
                alert('Mensagem enviada com sucesso!')
                this.reset()
                submitButton.disabled = true
                submitButton.classList.remove('active')
            })
            .catch(error => console.log('FALHOU...', error))
    })
    submitButton.disabled = true
}
