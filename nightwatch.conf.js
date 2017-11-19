"use strict";

const path = require("path");
const serverPath = path.resolve("./bin/selenium-server-standalone-3.7.1.jar");

module.exports = {
	src_folders: ["tests"],
	output_folder: "reports",

	selenium: {
		start_process: true,
		server_path: serverPath,
		port: 4444
		// cli_args: {
		//   "webdriver.chrome.driver": "./bin/chromedriver.exe"
		// }
	},

	test_settings: {
		default: {
			launch_url: "https://www.vikingcodeschool.com/",
			selenium_port: 4444,
			selenium_host: "localhost",
			silent: true,
			screenshots: {
				enabled: true,
				path: "screenshots"
			},
			//changing nightwatch default browser from firefox to chrome since firefox doesn't execute through the tests as flawlessly as chrome as of 2017-11
			desiredCapabilities: {
				browserName: "chrome"
			}
		},

		//additional chrome option here
		chrome: {
			desiredCapabilities: {
				browserName: "chrome"
			}
		}
	}
};
