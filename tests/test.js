// Your code here ...

module.exports = {
  'VCS test': browser => {
    browser
      .url(browser.launchUrl)
      .saveScreenshot('screenshots/1.jpg')
      .click('@sign_in')
      .saveScreenshot('screenshots/2.jpg')






      .end();
  }
}
