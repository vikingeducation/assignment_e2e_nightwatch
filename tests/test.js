const config = require('../config');

module.exports = {
  Test: browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.nav-right', 3000)
      .saveScreenshot('screenshots/1.jpg')
      .useXpath()
      .click('//a[text()="Sign In"]')
      .saveScreenshot('screenshots/2.jpg')
      .useCss()
      .waitForElementVisible('.simple_form', 3000)
      .setValue('input[type="email"]', config.email)
      .setValue('input[type="password"]', config.password)
      .submitForm('#new_user')
      .waitForElementVisible('.footer-wrapper', 3000)
      .saveScreenshot('screenshots/3.jpg')
      .useXpath()
      .click('(//input[@value="javascript"])[2]/parent::label')
      .waitForElementVisible('//strong[text()="2: Testing JavaScript"]', 3000)
      .click('//strong[text()="2: Testing JavaScript"]')
      .waitForElementVisible('//h5[text()[contains(., "exploration")]]', 3000)
      .click('//h5[text()[contains(., "exploration")]]')
      .pause(4000)
      .waitForElementVisible('(//img[@alt="checkbox"])[1]', 3000)
      .click('(//img[@alt="checkbox"])[1]')
      .saveScreenshot('screenshots/4.jpg')
      .useCss()
      .click('.user-avatar')
      .waitForElementVisible('#account-dropdown-menu', 3000)
      .click('#account-dropdown-menu a[href="/sign_out"]')
      .waitForElementVisible('.nav-right', 3000)
      .saveScreenshot('screenshots/5.jpg')
      .end();
  }
};
