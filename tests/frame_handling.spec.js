import {test ,expect} from "@playwright/test";

 test("handling frames" , async({browser})=>
{
     const context =await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});

    await frame1.locator("//input[@type='text']").fill("pooja");

    const frame2 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_2.html"});

    await frame2.locator("//input[@type='text']").fill("Bharat");

    const frame3 = await page.frame({url :"https://ui.vision/demo/webtest/frames/frame_3.html"});
    await frame3.locator('//input[@type="text"]').fill("Rohini");
}
)