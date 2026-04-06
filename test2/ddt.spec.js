import {test ,expect} from "@playwright/test";

const products = ["laptop" ,"gift card" ,"book" ,"computer"];

for(let item of products){
test(`Data driven test using array for the product ${item}`, async ({page})=>
{
     await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("pooja19@gmail.com");
    await page.locator("#Password").fill("123456");
    await page.locator("#RememberMe").check();
    await page.locator(".button-1.login-button").click();

    await page.locator("#small-searchterms").fill(item);
    await page.locator(".search-box-button").click();

   const productItems= await page.locator("h2 a").first().textContent();
    console.log(productItems);
}                       
)
}