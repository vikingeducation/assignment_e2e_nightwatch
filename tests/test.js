// Your code here ...

module.exports = {
  'VCS test': browser => {
    browser
    .url('http://www.vikingcodeschool.com')
    .waitForElementVisible('.nav-right', 1000)
    .saveScreenshot('screenshots/1.jpg')
    .click( 'a[href="/sign_in"]')
    .saveScreenshot('screenshots/2.jpg')
    .waitForElementVisible('.user_email', 1000)
    //–––––––––––––add email–––––––––––––
    .setValue('input[name="user[email]"]', 'LOGINEMAILHERE')
    //–––––––––––––add password–––––––––––––
    .setValue('input[name="user[password]"]', 'LOGINPASSWORDHERE')
    .submitForm('#new_user')
    .waitForElementVisible('.track-label-wrapper:not([display="none"])', 17000)
    .pause(4000)
    .waitForElementPresent( '#student-dashboard > input[value="javascript"]', 1000)
    .click('#student-dashboard > input[value="javascript"]')
    .useXpath() // every selector now must be xpath
    .waitForElementPresent("//strong[contains(text(), '2: Testing JavaScript')", 2000)
    .click("//strong[contains(text(), '2: Testing JavaScript')")
    .waitForElementPresent("//h5[contains(text(), 'Assignment: Viking Code School exploration')", 2000)
    .click("//h5[contains(text(), 'Assignment: Viking Code School exploration')")
    .useCss() // we're back to CSS now
    .waitForElementPresent(".checkbox-image", 3000)
    .click(".checkbox-image")
    .saveScreenshot('screenshots/3.jpg')
    //–––––––––––––add full name after title–––––––––––––
    .click("img[title='FULLNAMEHERE']")
    .waitForElementPresent(".menu-item-icon", 2000)
    .click(".menu-item-icon")
    .waitForElementVisible('.nav-right', 5000)
    .saveScreenshot('screenshots/4.jpg')
    .end();
  }
};
