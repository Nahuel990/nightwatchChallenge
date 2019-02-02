module.exports = {
    elements: {
        avail: {
            locateStrategy: 'xpath',
            selector: '//*[@class="cart_avail"]//span'
        },
        checkout: {
            selector: 'button.btn.btn-default.button-medium'
        },
        proceedCheckout: {
            selector: '.button.btn.btn-default.standard-checkout.button-medium'
        },
        totalProduct: {
            selector: '#total_product'
        },
        totalShipping: {
            selector: '#total_shipping'
        },
        totalPriceWOT: {
            selector: '#total_price_without_tax'
        },
        step2: {
            locateStrategy: 'xpath',
            selector: '//*[@class="step_current second"]'
        },
        step3: {
            locateStrategy: 'xpath',
            selector: '//*[@class="step_current third"]'
        },
        step4: {
            locateStrategy: 'xpath',
            selector: '//*[@class="step_current four"]'
        },
        terms: {
            selector: '#cgv'
        },
        step5: {
            locateStrategy: 'xpath',
            selector: '//*[@class="step_current last"]'
        },
        payCheck: {
            selector: '[title="Pay by check."]'
        },
        titleCheck: {
            selector: '[class="page-subheading"]'
        },
        finishOrder: {
            selector: '.alert.alert-success'
        }

    }
}