const {email, password} = require('../settings.json')

module.exports = {

  'User creation': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/1.jpg')
      .useXpath()  
      .click("//a[text()='Sign In']")
      .useCss() 
      .saveScreenshot('screenshots/2.jpg')
      .setValue('input[id="user_email"]', email)
      .setValue('input[id="user_password"]', password)
      .submitForm('#new_user')
      .waitForElementVisible('#angular-loki', 1000)
      .saveScreenshot('screenshots/3.jpg')
      .useXpath()
	    .click('(//input[@value="javascript"])[2]/parent::label')
	    .waitForElementVisible('//strong[text()="2: Testing JavaScript"]', 5000)
	    .click('//strong[text()="2: Testing JavaScript"]')
	    .waitForElementVisible("//h5[text()[contains(., 'Viking Code School exploration')]]", 5000)
	    .click("//h5[text()[contains(., 'Viking Code School exploration')]]")
	    .pause(5000)
      .waitForElementVisible(
      	"(//img[@ng-title='LN01368: Assignment: Viking Code School exploration'])[1]", 5000)
	    .click("(//img[@ng-title='LN01368: Assignment: Viking Code School exploration'])[1]")
	    .pause(3000)
	    .saveScreenshot('screenshots/4.jpg')
	    .useCss()
	    .click("img.user-icon")
      .pause(1000)
      .click('#account-dropdown-menu a[href="/sign_out"]')
      .pause(1000)
      .saveScreenshot("screenshots/5.jpg")
      .pause(1000)
      .end();
  }
};
