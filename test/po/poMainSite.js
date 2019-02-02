module.exports = {
  url: function () {
    return this.api.launchUrl + '/index.php';
  },
  elements: {
    signIn: {
      selector: '.login'
    },
    searchBox: {
      selector: '#search_query_top'
    },
    mailFieldToCreateAccount: {
      selector: '#email_create'
    },
    clickCreateAccount: {
      selector: '#SubmitCreate'
    }

  }
};