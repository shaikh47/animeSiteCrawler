/* eslint-disable max-len */
const puppeteer = require('puppeteer');

const concatenate = async (num1, num2) => {
  console.log(num1, num2);
  return { num1, num2 };
};

const searchAnime = async (search) => {
  const url = `https://9animetv.to/search?keyword=${search}`;
  let animeSerial = 1;
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);
  const contents = [];

  while (true) {
    try {
      const [element1] = await page.$x(
        `//*[@id="main-content"]/section[2]/div[1]/div[1]/div[${animeSerial}]/div[2]/h3/a`
      );
      const [element2] = await page.$x(
        `//*[@id="main-content"]/section[2]/div[1]/div[1]/div[${animeSerial}]/div[1]/img`
      );

      const srcText = await element1.getProperty("textContent");
      const srcLink = await element1.getProperty("href");
      const srcImage = await element2.getProperty("src");
      const srcImageAltText = await element2.getProperty("alt");

      const rawImage = await srcImage.jsonValue();
      const rawTxt = await srcText.jsonValue();
      const rawLink = await srcLink.jsonValue();
      const rawImageAltText = await srcImageAltText.jsonValue();

      contents.push({ rawTxt, rawLink, rawImage, rawImageAltText });
      animeSerial++;
    } catch (err) {
      return contents;
    }
  }
};

module.exports = {
  concatenate,
  searchAnime
};
