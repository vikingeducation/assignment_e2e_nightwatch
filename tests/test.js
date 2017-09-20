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
      .setValue('input[id="user_email"]', "ed.triplett@gmail.com")
      .setValue('input[id="user_password"]', "temporary" )
      .click('input[type="submit"]')
      .pause(2000)
      .saveScreenshot('screenshots/3.jpg')
      .useXpath()
      .click("//a[//h3[text()='2: Testing Javascript']]")
      .pause(1000)
      .saveScreenshot('screenshots/test1.jpg')
      // .click("//a[text()='Sign In']")


      .end();
  }
}
