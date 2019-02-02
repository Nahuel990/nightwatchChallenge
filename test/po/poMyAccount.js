module.exports = {
    elements: {
        orderHistory: {
            locateStrategy: 'xpath',
            selector: '//a[@title="Orders"]//span'
        },
        creditSlips: {
            locateStrategy: 'xpath',
            selector: '//a[@title="Credit slips"]//span'
        },
        myAddresses: {
            locateStrategy: 'xpath',
            selector: '//a[@title="Addresses"]//span'
        },
        personalInfo: {
            locateStrategy: 'xpath',
            selector: '//a[@title="Information"]//span'
        },
        whishlist: {
            locateStrategy: 'xpath',
            selector: '//a[@title="My wishlists"]//span'
        }
    }
}