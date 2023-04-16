const puppeteer = require("puppeteer");

let search = "one punch man";
search = search.replace(" ", "+");
const URL = `https://9animetv.to/search?keyword=${search}`;

async function scrapeAnime(url) {
  let animeSerial = 1;
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  while (true) {
    try {
      const [element1] = await page.$x(`//*[@id="main-content"]/section[2]/div[1]/div[1]/div[${animeSerial}]/div[2]/h3/a`);
      const [element2] = await page.$x(`//*[@id="main-content"]/section[2]/div[1]/div[1]/div[${animeSerial}]/div[1]/img`);
      

      const srcText = await element1.getProperty("textContent");
      const srcLink = await element1.getProperty("href");
      const srcImage = await element2.getProperty('src');
      const srcImageAltText = await element2.getProperty('alt');

      const rawImage = await srcImage.jsonValue();
      const rawTxt = await srcText.jsonValue();
      const rawLink = await srcLink.jsonValue();
      const rawImageAltText = await srcImageAltText.jsonValue();

      console.log({ rawTxt, rawLink, rawImage, rawImageAltText });
      animeSerial++;
    } catch (err) {
      break;
    }
  }
  browser.close();
}

scrapeAnime(URL);