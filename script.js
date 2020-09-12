const puppeteer = require('puppeteer');
const data = require("./config.json");

(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
    await page.type("input[name='username']", data.user, { delay: 100 });
    await page.type("input[name='password']", data.pwd, { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);
    await page.type("input[placeholder='Search']", "unforgettable_pawan");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);
    let numofPost = 60;
    await page.waitForSelector("._9AhH0", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._9AhH0"),
    ]);
    let i = 0;
    do {
        await page.waitForSelector(".fr66n button");
        await page.click(".fr66n button");
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
        i++;
    } while (i < numofPost)
    // _roy_7_rohit
    // await page.screenshot({ path: 'example.png' });

    await browser.close();
})();