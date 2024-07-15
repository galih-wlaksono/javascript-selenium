const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const robot = require("@jitsi/robotjs");

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
        //old tech
    // await driver.get('https://demo.imacros.net/Automate/FileUploadDemo');
    // await driver.sleep(10000);
    // await driver.findElement(By.xpath('//*[@id="uploaded_file"]')).sendKeys('C:\\Users\\Asus\\Downloads\\WhatsApp Image 2024-05-08 at 13.26.36.jpeg');
    
        //new tech
    await driver.get('https://fileport.io/');
    await driver.findElement(By.xpath('//*[@id="upload-button"]')).click();
    await driver.sleep(10000);
    await robot.typeString("E:\\My Videos\\ANJI - DIA  l Klipnya Unik - Cover by Dodi Hidayatullah ft Yudha, Fauzan, Yayank.mp4");
    await driver.sleep(5000);
    await robot.keyTap("enter");
    await driver.wait(until.elementLocated(By.xpath('//*[@id="upload-complete-text"]')));
    await driver.sleep(5000);

    let hasilUpload = await driver.findElement(By.xpath('//*[@id="upload-link"]')).getAttribute('href');
  
    console.log(hasilUpload);
    await driver.quit();
  
})()