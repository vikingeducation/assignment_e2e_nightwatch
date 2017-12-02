require("dotenv").config();

module.exports = {
  "User creation": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("#loki-navbar", 1000)
      .saveScreenshot("screenshots/1.jpg")
      .url("http://www.vikingcodeschool.com/sign_in")
      .waitForElementVisible(".text-center", 1000)
      .saveScreenshot("screenshots/2.jpg")
      .setValue('input[id="user_email"]', "memyselfandhai@gmail.com")
      .setValue('input[id="user_password"]', process.env.PASS)
      .submitForm("#new_user")
      .pause(1000)
      .url(
        "https://www.vikingcodeschool.com/dashboard#/testing-javascript/assignment-viking-code-school-exploration"
      )
      .pause(1000)
      .click("img.checkbox-image")
      .pause(1000)
      .saveScreenshot("screenshots/3.jpg")
      .click("img.user-icon")
      .pause(1000)
      .click("li.last")
      .pause(1000)
      .saveScreenshot("screenshots/4.jpg")
      .end();
  }
};
