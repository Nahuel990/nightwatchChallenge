module.exports = {
    elements: {
        emailCSS: {
            locateStrategy: 'xpath',
            selector: '//*[@id="email"]/..'
        },
        email: {
            selector: '#email'
        },
        password: {
            selector: '#passwd'
        },
        signInButton: {
            selector: '#SubmitLogin'
        }
    }
}