const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    //tab 1
    await driver.get('https://www.tokopedia.com/');
    await driver.findElement(By.xpath('//input[@data-unify="Search"]')).sendKeys('ryusei official', Key.RETURN);
    await driver.sleep(3000);

    let getVolume = await driver.executeScript(`return document.querySelectorAll('div[data-testid="divProductWrapper"]').length`);
    let products = [];

    for (i = 1; i <= getVolume; i++){

    let namaProduct = await driver.findElement(By.xpath(`(//div[@data-testid="divProductWrapper"])[${i}]`)).getText();
    products.push(namaProduct);
    }
    console.log(products);
    // await driver.sleep(3000);
    await driver.quit()
})()