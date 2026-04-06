import {test} from "@playwright/test";
 test("first test case",async ({browser})=>
 {
     const context = await browser.newContext();
     const page    = await context.newPage();
      
     await page.goto("https://www.flipkart.com/");

 }
)
// we can use page directly also for running one tab 
 test("second test case ", async ({page})=>
 {
    await page.goto("https://www.flipkart.com/");
 }
)
