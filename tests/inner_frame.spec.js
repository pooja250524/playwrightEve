import {test} from "@playwright/test";

  test("handling frames" , async({browser})=>
{
     const context =await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://ui.vision/demo/webtest/frames/");

     //get hold on the required frame  available on the website
     const frame3 = await page.frame({ url : "https://ui.vision/demo/webtest/frames/frame_3.html"});

     //get all the child /inner-frame in the frame to container

     const childFrames = await frame3.childFrames();

     //access the inner-frame using index values

      const googleForm = await  childFrames[0];
      await googleForm.getByLabel("I am a human").click();
})