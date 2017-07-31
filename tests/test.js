// Your code here ...
const env = require("../env.js");

module.exports = {
  "Testing the Viking Code School": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("body", 1000)
      .saveScreenshot("../screenshot.png")
      .click("#loki-navbar > ul > li:nth-child(3) > a")
      .saveScreenshot("../screenshot.png")
      .waitForElementVisible("body", 1000)
      .setValue(
        "#new_user > div.form-inputs > div.input.email.optional.user_email",
        "Vlad"
      )
      .setValue(
        "#new_user > div.form-inputs > div.input.password.optional.user_password",
        "Zelinschi"
      )
      .click("#new_user > div.form-actions > input")
      // .assert.containsText("h1", "New User")
      .end();
  }
};
