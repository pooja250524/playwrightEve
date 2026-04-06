import {test ,expect} from "@playwright/test";
test("end to End" ,async({page})=>
{
     await page.goto("https://demowebshop.tricentis.com/");
            await page.locator(".ico-login").click();
           await page.locator("#Email").fill("pooja19@gmail.com");
           await page.locator("#Password").fill("123456");
           await page.locator("#RememberMe").check();
           await page.locator(".button-1.login-button").click();
           await page.locator("ul li a[href$='/books']").first().click();

           const products= await page.locator(".product-item");
              const count=  await page.locator(".product-item").count();

            for(let i=0;i<count;++i)
            {
                  console.log("Hi");
                     if(await products.nth(i).locator("h2 a").textContent()==="Health Book")
                     {
                         console.log("hello");
                        await products.nth(i).locator(".button-2").click();

                     }
            }

})
