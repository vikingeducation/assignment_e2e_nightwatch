module.exports = {
  "VCS Explore": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("#loki-navbar", 1000)
      .saveScreenshot("screenshot/1.jpg")
      .click("a[href='/sign_in']")
      .saveScreenshot("screenshot/2.jpg")
      .setValue("input[id='user_email']", "IDHalverson@live.com")
      .setValue("input[id='user_password']", "Genesis1!")
      .click("input[type='submit']")
      .waitForElementVisible("#loki-navbar", 4000)
      .saveScreenshot("screenshot/3.jpg")
      .click("ui-view[ng-if='dashboard()'] label:last-child")
      .click("unit[id='testing-javascript']")
      .waitForElementVisible(
        'ui-view[ng-if="dashboard()"] a[href="#/testing-javascript/assignment-viking-code-school-exploration"]',
        4000
      )
      .click(
        'ui-view[ng-if="dashboard()"] a[href="#/testing-javascript/assignment-viking-code-school-exploration"]'
      )
      .waitForElementVisible(
        "div.lesson-explanation div.lesson-completion img:first-child",
        2000
      )
      .pause(5000)
      .click("div.lesson-explanation div.lesson-completion img:first-child")
      .waitForElementVisible(
        "img[src='https://s3.amazonaws.com/viking_education/icons/lesson_icons/icon_project_complete.svg']",
        2000
      )
      .pause(5000)
      .saveScreenshot("screenshot/4.jpg")
      .click("img[class='user-icon']")
      .click("a[href='/sign_out']")
      .saveScreenshot("screenshot/5.jpg")
      .end();
  }
};
