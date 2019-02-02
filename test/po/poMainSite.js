module.exports = {
  url: function () {
    return this.api.launchUrl + '/index.php';
  },
  elements: {
    signIn: {
      selector: '.login'
    },
    mailFieldToCreateAccount: {
      selector: '#email_create'
    },
    clickCreateAccount: {
      selector: '#SubmitCreate'
    }

  }
};