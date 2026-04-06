import {expect, test} from "@playwright/test";
//  test("Test case 1: Positive LogIn test" , async ({page})=>
// {
//     await page.goto("https://practicetestautomation.com/practice-test-login/");
//     await page.locator("#username").fill("student");
//     await page.locator("#password").fill("Password123");
//     await page.locator("#submit").click();
//     const msg =page.locator(".post-title");
//     await expect(msg).toHaveText('Logged In Successfully');
//        const logout =page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color");
//        await expect(logout).toBeVisible();
// }
//  )

//  test("Test case 2: Negative username test" ,async ({page})=>
//  {
//         await page.goto("https://practicetestautomation.com/practice-test-login/");
//             await page.locator("#username").fill("incorrectUser");
//             await page.locator("#password").fill("Password123");
//             await page.locator("#submit").click();
//             const error_message =page.locator(".show");
//             await expect(error_message).toBeVisible();
//             await expect(error_message).toHaveText("Your username is invalid!");


//  }
// )
test("Test case 3: Negative password test", async ({page})=>
{
          await page.goto("https://practicetestautomation.com/practice-test-login/");
            await page.locator("#username").fill("student");
            await page.locator("#password").fill("incorrectPassword");
            await page.locator("#submit").click();
            const error_msg = page.locator(".show");
            await expect(error_msg).toBeVisible();
            await expect(error_msg).toHaveText('Your password is invalid!');
}
)