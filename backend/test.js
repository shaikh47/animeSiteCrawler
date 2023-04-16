const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://9animetv.to/watch/summoned-to-another-world-for-a-second-time-18346?ep=100086"
  ); 

  const iframeSelector = "iframe"; // replace with the selector for the iframe element
  await page.waitForSelector(iframeSelector);

  const iframeElement = await page.$(iframeSelector);
  const iframeHtml = await page.evaluate((el) => el.outerHTML, iframeElement);
  console.log(iframeHtml);

  const src = await page.evaluate((el) => el.src, iframeElement);
  console.log(src);

  await browser.close();
})();
