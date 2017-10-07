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
			.useXpath()
			.waitForElementPresent(
				'//*[@id="student-dashboard"]/div/div[2]/div[2]/div/div/label[3]/input',
				10000
			)
			.click(
				//this doesnt click
				'//*[@id="student-dashboard"]/div/div[2]/div[2]/div/div/label[3]/input'
			)
			.waitForElementVisible(
				'//*[@id="testing-javascript"]/div[1]/a/h3/strong',
				5000
			)
			.click('//*[@id="testing-javascript"]/div[1]/a/h3/strong')
			.end();
	}
};
