import {test ,expect} from "@playwright/test";

 test("handling CHILD window" , async ({browser})=>
 {
      const context = await browser.newContext();

       const page  = await context.newPage();

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Event = context.waitForEvent('page');

        await page.locator('a[href="http://www.orangehrm.com"]').click();

        const childPage = await Event;

        await page.screenshot({path : "childPage.png"});

 }
)