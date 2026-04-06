import { test,expect } from "@playwright/test";


const loginTestData = [
  ["laura.taylor1234@example.com", "test123", "valid"],
  ["invaliduser@example.com", "test321", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
  ["", "", "invalid"],
];

for(let [email,password ,validity] of loginTestData)
    {
test(`Data driven test using array for the login ${email}` ,async ({page})=>
{
     await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);
   
    await page.locator(".button-1.login-button").click();
     if(validity==="invalid")
     {
         const error_message =await page.locator(".validation-summary-errors");
            expect(error_message).toBeVisible();
            console.log("InValid user try again");
     }
     else
        {
           const logout= await page.locator(".ico-logout");
            expect(logout).toBeVisible();
            console.log("Valid user logged in");

     }
}
)
}