const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require('assert');

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('https://stg-rbac.mbitsel.com/incentive-engine/login');
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//input[@id="add_username"]')).sendKeys('superadmin_hf');
    await driver.findElement(By.xpath('//input[@id="add_password"]')).sendKeys('password', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
    await driver.sleep(5000);
  } finally {
    let verifyText = await driver.findElement(By.xpath(`(//div[@class='ant-card-body'])[2]`)).getText().then(function(value){
        return value;
    });

    assert.strictEqual(verifyText,'Welcome back!');
    // await driver.quit()
  }
})()