const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    //buka tab 1
    await driver.get('https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl');
    
    //extract id tab 1
    const tab1 = await driver.getWindowHandle();
    
    //buka tab baru (tab2)
    await driver.switchTo().newWindow('tab');
    await driver.get('https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl');
    
    //extract id tab 2
    const tab2 = await driver.getWindowHandle();

    //pindah tab 1
    await driver.switchTo().window(tab1);
    await driver.findElement(By.xpath('//textarea[@id="APjFqb"]')).sendKeys('bayer leverkusen', Key.RETURN);
    
    //pindah tab 2
    await driver.switchTo().window(tab2);
    await driver.close();


    // await driver.sleep(10000);
    // await driver.findElement(By.xpath('//input[@id="add_password"]')).sendKeys('password', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  } finally {
    // await driver.quit()
  }
})()