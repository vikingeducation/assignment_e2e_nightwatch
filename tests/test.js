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
      .click("input[name='activeTrack']")
      .pause(5000)
      // .useXpath()
      // .click("//*[contains(text(), '2: Testing JavaScript')]")
      // .pause(1000)
      // .saveScreenshot("./screenshots/4.jpg")
      .end();
  }
};
