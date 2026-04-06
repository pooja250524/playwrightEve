import {test} from "@playwright/test";
test("register",async ({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("pooja@gmail.com");
    await page.locator("#Password").fill("1234");
    await page.locator("#RememberMe").check();
    await page.locator(".button-1.login-button").click();
}
)