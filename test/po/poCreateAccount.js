module.exports = {
    elements: {
        titleForm: {
            selector: '#account-creation_form'
        },
        genderMale: {
            selector: '#id_gender1'
        },
        firstName: {
            selector: '#customer_firstname'
        },
        lastName: {
            selector: '#customer_lastname'
        },
        password: {
            selector: '#passwd'
        },
        day: {
            selector: '#days'
        },
        month: {
            selector: '#months'
        },
        year: {
            selector: '#years'
        },
        address: {
            selector: '#address1'
        },
        city: {
            selector: '#city'
        },
        country: {
            selector: '#id_country'
        },
        state: {
            selector: '#id_state'
        },
        postalCode: {
            selector: '#postcode'
        },
        mobilePhone: {
            selector: '#phone_mobile'
        },
        alias: {
            selector: '#alias'
        },
        submitAccount: {
            selector: '#submitAccount'
        },
        valCSS: {
            locateStrategy: 'xpath',
            selector: '//label[@for="customer_firstname"]/..'
        }
    }
}