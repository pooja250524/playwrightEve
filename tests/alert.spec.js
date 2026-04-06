import {test ,expect} from "@playwright/test";
 
test("alert" ,async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

     await page.getByLabel("user").last().click();
     await page.getByRole("button" ,{name: "Okay"}).click();
     await page.waitForTimeout(10000);




}




)
