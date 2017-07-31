env = require("../env");

module.exports = {
  "Load the site and save a screenshot": browser => {
    browser
      .url("http://www.vikingcodeschool.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/1.jpg")
      .click('a[href="/sign_in"')
      .saveScreenshot("./screenshots/2.jpg")
      .setValue("#user_email", env.username)
      .setValue("#user_password", env.password)
      .submitForm("#new_user")
      .pause(1000)
      .saveScreenshot("./screenshots/3.jpg")
      .waitForElementVisible(
        "ui-view[ng-if='dashboard()'] label:last-child",
        3000
      )
      .click("ui-view[ng-if='dashboard()'] label:last-child")
      .pause(3000)
      .useXpath()
      .click("//*[contains(text(), '2: Testing JavaScript')]")
      .pause(4000)
      .click("//*[contains(text(), '21.')]")
      .pause(4000)
      .useCss()
      .waitForElementVisible(
        "div.lesson-explanation div.lesson-completion img:first-child",
        1000
      )
      .click("div.lesson-explanation div.lesson-completion img:first-child")
      .pause(2000)
      .saveScreenshot("./screenshots/4.jpg")
      .click("img.user-icon")
      .pause(1000)
      .click('#account-dropdown-menu a[href="/sign_out"]')
      .pause(1000)
      .saveScreenshot("./screenshots/5.jpg")
      .pause(1000)
      .end();
  }
};
