// Your code here ...

module.exports = {
  'Home test': browser => {
    browser
      .url(browser.launchUrl)
      .saveScreenshot('.screenshots/homepage.png')
      .waitForElementVisible('body', 1000)
      .click('#loki-navbar a[href="/sign_in"]')
      .saveScreenshot('screenshots/login.jpg')
      .setValue('#user_email', '')
      .setValue('#user_password', '')
      .click('#new_user input[type="submit"]')
      .saveScreenshot('screenshots/dashboard.jpg')
      .click('strong[value="2: Testing Javascript"]');
  }
};
