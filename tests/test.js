// Your code here ...

module.exports = {
  Test: browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/1.jpg')
      .click('a[href="/sign_in"]')
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/2.jpg')
      .setValue('#user_email', 'tketron@gmail.com')
      .setValue('#user_password', REDACTED)
      .click('input[name=commit]')
      .waitForElementPresent('#student-dashboard', 20000)
      .saveScreenshot('screenshots/3.jpg')
      .click(
        'ui-view:not(.animo) > div > #student-dashboard > div > div.row.unit-container > div:nth-child(2) > div > div > label:nth-child(3)'
      )
      .click('#testing-javascript > div > a > h3 > strong')
      .waitForElementVisible(
        'ui-view:not(.animo) > div > main > div > div > div > div > #testing-javascript > div.dashboard-unit-body.col-xs-12.ng-scope > curriculum-section:nth-child(4) > div > lesson:nth-child(7) > div > div.col-md-11.col-sm-10.col-xs-9 > a > h5',
        5000
      )
      .click(
        'ui-view:not(.animo) > div > main > div > div > div > div > #testing-javascript > div.dashboard-unit-body.col-xs-12.ng-scope > curriculum-section:nth-child(4) > div > lesson:nth-child(7) > div > div.col-md-11.col-sm-10.col-xs-9 > a > h5'
      )
      .waitForElementVisible(
        '#angular-loki > ui-view > div > div > div > div > ui-view > ui-view > div.lesson-explanation.ng-scope > div.lesson-completion > lesson-completion > a > div > img.checkbox-image',
        10000
      )
      .click(
        '#angular-loki > ui-view > div > div > div > div > ui-view > ui-view > div.lesson-explanation.ng-scope > div.lesson-completion > lesson-completion > a > div'
      )
      .saveScreenshot('screenshots/4.jpg')
      .click('#account-dropdown > a')
      .click('#account-dropdown-menu > ul > a:nth-child(3) > li')
      .saveScreenshot('screenshots/5.jpg')
      .end();
  }
};
