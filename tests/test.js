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
			.waitForElementVisible("#angular-loki", 3000)
			.saveScreenshot("screenshots/3.jpg")
			.end();
	}
};
