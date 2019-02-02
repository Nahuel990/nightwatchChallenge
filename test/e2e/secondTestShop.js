require('../../nightwatch.conf.js');
var data = require('../data.json')

module.exports = {
    "Navigate to shop section": function (client) {
        const mainSite = client.page.poMainSite();

        mainSite.navigate()
            .waitForElementVisible('@searchBox', 1000)
            .assert.title('My Store')

    },
    "Search an item to buy": function (client) {
        const mainSite = client.page.poMainSite();
        const search = client.page.poSearchSection();

        mainSite
            .setValue('@searchBox', ['Dress', client.Keys.ENTER])
        search
            .moveToElement('@item', 0, 0)
            .click('@addCart')
            .waitForElementVisible('@checkOut', 2000)
            .click('@checkOut')
    },
    "Checkout": function (client) {
        const checkout = client.page.poCheckout();

        var totShip = 0;
        var totProd = 0;

        checkout
            .assert.containsText('@avail', 'In stock')
            .assert.cssClassPresent('@avail', 'label-success')
            .getText('@totalProduct', function (result) { totProd = result.value; console.log(result.value) })
            .getText('@totalShipping', function (result) { totShip = result.value; console.log(result.value) })
            .getText('@totalPriceWOT', function (result) { let tot = result.value; client.verify.equal(parseFloat(tot.substring(1)), parseFloat(totProd.substring(1)) + parseFloat(totShip.substring(1))) })
            .click('@proceedCheckout')
            .waitForElementVisible('@step2', 1000)
            .assert.containsText('@step2', '02. Sign in')
    },
    "Login": function (client) {
        const login = client.page.poLogin();
        login
            .moveToElement('@signInButton', 0, 0)
            .waitForElementVisible('@email', 1000)
            .clearValue('@email')
            .setValue('@email', data.existingUser.email)
            .clearValue('@password')
            .setValue('@password', data.existingUser.password)
            .assert.cssClassPresent('@emailCSS', 'form-ok')
            .click('@signInButton')

    },
    "Address": function (client) {
        const checkout = client.page.poCheckout();

        checkout
            .assert.containsText('@step3', '03. Address')
            .click('@checkout')

    },
    "Shipping": function (client) {
        const checkout = client.page.poCheckout();
        checkout
            .assert.containsText('@step4', '04. Shipping')
            .click('@terms')
            .click('@checkout')
    },
    "Payment": function (client) {
        const checkout = client.page.poCheckout();

        checkout
            .assert.containsText('@step5', '05. Payment')
            .click('@payCheck')
            .assert.containsText('@titleCheck', 'CHECK PAYMENT')
            .click('@checkout')
            .waitForElementVisible('@finishOrder', 1000)
            .assert.containsText('@finishOrder', 'Your order on My Store is complete.')
            .end()
    }
}