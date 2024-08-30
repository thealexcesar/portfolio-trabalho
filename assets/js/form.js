window.onload = function () {
    emailjs.init(process.env.PUBLIC_KEY)

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

        if (emailValid && nameValid && messageValid) {
            submitButton.disabled = false
            submitButton.classList.add('active')
        } else {
            submitButton.disabled = true
            submitButton.classList.remove('active')
        }
    }

    emailInput.addEventListener('input', validateForm)
    nameInput.addEventListener('input', validateForm)
    messageTextarea.addEventListener('input', validateForm)

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault()
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, this)
            .then(() => {
                console.log('SUCESSO!')
                alert('Mensagem enviada com sucesso!')
                this.reset()
                submitButton.disabled = true
                submitButton.classList.remove('active')
            }, error => {
                console.log('FALHOU...', error)
                alert('Falha ao enviar a mensagem.')
            })
    })

    submitButton.disabled = true
}
