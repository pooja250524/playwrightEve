import {test} from  "@playwright/test";

 test("screenshot 1" ,async ({page})=>
 {
     await page.goto('https://testautomationpractice.blogspot.com/');

     //visble page screenshot
     await page.screenshot({path : "image.png"});
 }
)
 test("screenshot 2" ,async ({page})=>
 {
     await page.goto('https://testautomationpractice.blogspot.com/');

     //visble page screenshot
     await page.screenshot({fullPage:true ,path : "Image2.png"});
 }
)
 test("screenshot 3" ,async ({page})=>
 {
     await page.goto('https://testautomationpractice.blogspot.com/');

     //visble page screenshot
     await page.locator(".header-inner").screenshot({path:"Image3.png"});
 }
)