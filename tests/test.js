// Your code here ...
const env = require("../env.js");

module.exports = {
  "Testing the Viking Code School": browser => {
    browser
      .url(browser.launchUrl)
      //main page
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/main.png")
      .click("#loki-navbar > ul > li:nth-child(3) > a")
      //sigin page
      .saveScreenshot("./screenshots/login.png")
      .waitForElementVisible("body", 1000)
      .setValue("#user_email", env.userEmail)
      .setValue("#user_password", env.userPassword)
      .waitForElementVisible("body", 1000)
      .click("#new_user > div.form-actions > input")
      //dashboard
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/dashboard.png")
      /*drill down into the menu*/
      //click that radio
      .waitForElementVisible(
        "ui-view[ng-if='dashboard()'] label:last-child",
        1000
      )
      .click("ui-view[ng-if='dashboard()'] label:last-child", () => {
        console.log("things were clicked");
      })
      .saveScreenshot("./screenshots/buttonClicked.png")
      .click("#testing-javascript > div.unit-header > a > div > img")
      .waitForElementVisible(
        'a[href="#/testing-javascript/assignment-viking-code-school-exploration"]',
        1000
      );
    browser
      .click(
        'a[href="#/testing-javascript/assignment-viking-code-school-exploration"]',
        () => {
          console.log("clicked it!");
        }
      )
      .waitForElementVisible("body", 1000)
      .click(".checkbox-image")
      .saveScreenshot("./screenshots/completedCheckBox.png")
      .click(".user-icon")
      .waitForElementVisible("li.menu-item.last", 1000)
      .click("li.menu-item.last")
      //logged out
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/loggedOut.png")
      .end();
  }
};
