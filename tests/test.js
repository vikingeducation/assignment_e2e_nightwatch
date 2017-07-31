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
      .setValue('input[name="user_email"]', "edtriplett@gmail.com")
      .setValue('input[name="user_password"]', "temporary" )
      .saveScreenshot('screenshots/3.jpg')
      .useXpath()
      .click("//[text()='2: Testing Javascript']")



      .end();
  }
}
