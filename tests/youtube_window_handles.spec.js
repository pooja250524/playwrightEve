import {test ,expect} from "@playwright/test";

 test("handling youtube window" , async ({browser})=>
 {
      const context = await browser.newContext();

       const page  = await context.newPage();

        await page.goto("https://demowebshop.tricentis.com/");

        const Event = context.waitForEvent('page');

        await page.locator('a[href="http://www.youtube.com/user/nopCommerce"]').click();

        const childPage = await Event;

        await childPage.screenshot({path : "childPage1.png"});

 }
)