const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const download = require('image-downloader');

// options = {
//   url: 'https://upload.wikimedia.org/wikipedia/en/1/16/Kuala_Lumpur_City_F.C..png',
//   dest: 'D:\\learning\\nodejs\\testselenium\\testdownloadimage\\klc_logo.png',     // will be saved to /path/to/dest/photo.jpg
// };

// download.image(options)
//   .then(({ filename }) => {
//     console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
//   })
//   .catch((err) => console.error(err));
;(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build()

await driver.get('https://www.tokopedia.com/search?st=&q=mic%20condenser&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=');
let getNode = await driver.executeScript(`return document.querySelectorAll('div[data-testid="CPMProductItem"]').length`);

for (i = 1; i <= getNode; i++){
let imageUrl = await driver.findElement(By.xpath(`(//img[@decoding="async"])[${i}]`)).getAttribute('src');
        download.image({
            url : `${imageUrl}`,
            dest : `D:\\learning\\nodejs\\testselenium\\testdownloadimage\\mic${i}.jpg`
})
}

})()