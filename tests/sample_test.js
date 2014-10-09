module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:8080/test")
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'hello')
      .end();
  }
};
