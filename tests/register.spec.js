import {test} from "@playwright/test";
test("register", async ({page})=>
{
     await page.goto("https://demowebshop.tricentis.com/");
     
     await page.locator(".ico-register").click();
     await page.locator("#gender-male").check;
     await page.waitForLoadState('networkidle');
     await page.locator("#FirstName").fill("pooja");
     await page.locator("#LastName").fill("saxena");
     await page.locator("#Email").fill("pooja@gmail.com");
     await page.locator("#Password").fill("1234");
     await page.locator("#ConfirmPassword").fill("1234");
     await page.locator("#register-button").click;




}




)