// Your code here ...

module.exports = {
  'VCS test': browser => {
    browser
      .url(browser.launchUrl)
      .saveScreenshot('screenshots/1.jpg')
      .useXpath()  
      .click("//a[text()='Sign In']")
      .useCss()
      .saveScreenshot('screenshots/2.jpg')






      .end();
  }
}
