const path = require("path");
const serverPath = path.resolve(
  "/usr/share/selenium-server/selenium-server-standalone.jar"
);

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",

  selenium: {
    start_process: true,
    server_path: serverPath,
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": "/usr/bin/chromedriver"
    }
  },

  test_settings: {
    default: {
      launch_url: "https://vikingcodeschool.com",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: true,
        path: "screenshots"
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  }
};
