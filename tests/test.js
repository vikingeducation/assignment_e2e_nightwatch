// Your code here ...
const secret = require("../secret");

module.exports = {
	"VCS test": browser => {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible(".language-bash ", 3000)
			.saveScreenshot("screenshots/1.jpg")
			.click('a[href="/sign_in"')
			.saveScreenshot("screenshots/2.jpg")
			.setValue('input[name="user[email]"]', secret.email)
			.setValue('input[name="user[password]"]', secret.password)
			.submitForm("#new_user")
			.waitForElementVisible("#angular-loki", 5000)
			.saveScreenshot("screenshots/3.jpg")
			.waitForElementPresent("#student-dashboard", 20000)
			.useCss()
			.waitForElementPresent(
				"#student-dashboard > div > div.row.unit-container > div:nth-child(2) > div > div > label:nth-child(3)",
				10000
			)
			.click("ui-view[ng-if='dashboard()'] label:nth-child(3)")
			.moveToElement(
				"#student-dashboard > div > div.row.unit-container > div:nth-child(2) > div > div > label:nth-child(3)",
				0,
				0
			)
			.mouseButtonClick(0)
			.useXpath()
			.waitForElementVisible(
				'//*[@id="testing-javascript"]/div[1]/a/h3/strong',
				5000
			)
			.click('//*[@id="testing-javascript"]/div[1]/a/h3/strong')
			.waitForElementVisible(
				'//*[@id="testing-javascript"]/div[2]/curriculum-section[4]/div/lesson[6]/div/div[1]/div/div[2]/lesson-completion/a/div/img[1]',
				5000
			)
			.click(
				'//*[@id="testing-javascript"]/div[2]/curriculum-section[4]/div/lesson[6]/div/div[1]/div/div[2]/lesson-completion/a/div/img[1]'
			)
			.pause(2000)
			.saveScreenshot("screenshots/4.jpg")
			.click('//*[@id="account-dropdown"]/a/img')
			.waitForElementVisible(
				'//*[@id="account-dropdown-menu"]/ul/a[3]/li',
				5000
			)
			.click('//*[@id="account-dropdown-menu"]/ul/a[3]/li')
			.useCss()
			.waitForElementVisible(".language-bash ", 5000)
			.saveScreenshot("screenshots/5.jpg")
			.end();
	}
};
