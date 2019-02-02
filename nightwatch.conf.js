'use strict'
const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports = {
  "src_folders": [
    "test/e2e"
  ],
  "page_objects_path": ["test/po"],
  "output_folder": "./reports",
  "selenium": {
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "http://automationpractice.com",
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": "./screen",
        "on_failure": true
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "elementScrollBehavior": 1
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "elementScrollBehavior": 1
      }
    }
  }
}