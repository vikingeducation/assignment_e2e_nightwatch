"use strict";

const WAIT_TIME = 5000; // 5 seconds
const USERNAME = process.env.VUSERNAME || "username123";
const PASSWORD = process.env.VPASSWORD || "password123";

const ARE_YOU_READY =
	"div.wide-content:nth-child(8) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)";
const SIGN_IN = "ul.nav-right > li:nth-child(3) > a:nth-child(1)";
const OFFICE_HOURS_SCHEDULE =
	"ui-view.ng-scope:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > h3:nth-child(1)";
const JS_NODE =
	"ui-view.ng-scope:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(3) > input:nth-child(1)";
const TESTING_JAVASCRIPT =
	"ui-view.ng-scope:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > unit:nth-child(5) > div:nth-child(1) > a:nth-child(1) > h3:nth-child(2) > strong:nth-child(1)";
const ASSIGNMENT =
	"ui-view.ng-scope:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > unit:nth-child(5) > div:nth-child(2) > curriculum-section:nth-child(4) > div:nth-child(1) > lesson:nth-child(7) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3) > h5:nth-child(1)";
const PURPLE_UNCHECKED =
	"(//img[@ng-src='https://s3.amazonaws.com/viking_education/icons/lesson_icons/icon_project_incomplete.svg'])[1]";
const PURPLE_CHECKED =
	"(//img[@ng-src='https://s3.amazonaws.com/viking_education/icons/lesson_icons/icon_project_complete.svg'])[1]";
const LOGOUT_STEP_1of2 = ".user-icon";
const LOGOUT_STEP_2of2 = ".last";

module.exports = {
	"viking e2e": browser => {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible(ARE_YOU_READY, WAIT_TIME)
			.saveScreenshot("screenshots/1homepage.jpg")
			// "2 of 5 - Signin": browser => {
			.click(SIGN_IN)
			.waitForElementVisible("#user_email", WAIT_TIME)
			.saveScreenshot("screenshots/2login.jpg")
			// "3 of 5 - Dashboard": browser => {
			.setValue("#user_email", USERNAME)
			.setValue("#user_password", PASSWORD)
			.submitForm("#new_user")
			.waitForElementVisible(OFFICE_HOURS_SCHEDULE, WAIT_TIME)
			.saveScreenshot("screenshots/3something.jpg")
			// "4 of 5 - Purple check": browser => {
			.click(JS_NODE)
			.waitForElementVisible(TESTING_JAVASCRIPT, WAIT_TIME)
			.click(TESTING_JAVASCRIPT)
			.waitForElementVisible(ASSIGNMENT, WAIT_TIME)
			.click(ASSIGNMENT)
			.useXpath()
			.waitForElementVisible(PURPLE_UNCHECKED, WAIT_TIME)
			.click(PURPLE_UNCHECKED)
			.waitForElementVisible(PURPLE_CHECKED, WAIT_TIME)
			.useCss()
			.saveScreenshot("screenshots/4purplecheck.jpg")
			// "5 of 5 - Purple check": browser => {
			.click(LOGOUT_STEP_1of2)
			.waitForElementVisible(LOGOUT_STEP_2of2, WAIT_TIME)
			.click(LOGOUT_STEP_2of2)
			.waitForElementVisible(ARE_YOU_READY, WAIT_TIME)
			.saveScreenshot("screenshots/5logout.jpg")
			.end();
	}
};
