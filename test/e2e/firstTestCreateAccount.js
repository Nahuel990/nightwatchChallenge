require('../../nightwatch.conf.js');
var data = require('../data.json')

module.exports = {
    "Navigate to main site": function (browser) {
        data.email = "user" + Math.floor(Math.random() * 10000000) + "@mailinator.com"
        const mainSite = browser.page.poMainSite();
        mainSite.navigate()
            .waitForElementVisible('@signIn', 1000)
            .assert.title('My Store')
            .click('@signIn')
    },
    "Go to Create Account": function (browser) {
        const mainSite = browser.page.poMainSite();
        const createAccount = browser.page.poCreateAccount();

        mainSite
            .waitForElementVisible('@mailFieldToCreateAccount', 1000)
            .setValue('@mailFieldToCreateAccount', data.email)
            .click('@clickCreateAccount')
        createAccount
            .waitForElementVisible('@titleForm', 5000)
            .assert.containsText('@titleForm', 'YOUR PERSONAL INFORMATION')

    },
    "Fill the profile and submit": function (browser) {
        const createAccount = browser.page.poCreateAccount();
        const myAccount = browser.page.poMyAccount();
        createAccount
            .click('@genderMale')
            .setValue('@firstName', data.firstName)
            .setValue('@lastName', data.lastName)
            .assert.cssClassPresent('@valCSS', 'form-ok')
            .setValue('@password', data.password)
            .setValue('@day', data.day)
            .setValue('@month', data.month)
            .setValue('@year', data.year)
            .setValue('@postalCode', data.postalCode)
            .setValue('@address', data.street)
            .setValue('@city', data.city)
            .setValue('@country', data.country)
            .setValue('@state', data.state)
            .setValue('@mobilePhone', data.mobilePhone)
            .clearValue('@alias')
            .setValue('@alias', data.alias)
            .click('@submitAccount')
            .assert.title('My account - My Store')
        myAccount
            .assert.containsText('@orderHistory', 'ORDER HISTORY AND DETAILS')
            .assert.containsText('@creditSlips', 'MY CREDIT SLIPS')
            .assert.containsText('@myAddresses', 'MY ADDRESSES')
            .assert.containsText('@personalInfo', 'MY PERSONAL INFORMATION')
            .assert.containsText('@whishlist', 'MY WISHLISTS')
            .end()
    }
};