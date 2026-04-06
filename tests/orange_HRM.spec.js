import {test} from "@playwright/test";
test("add user" , async ({page})=>
{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     await page.getByPlaceholder("Username").fill("Admin");
     await page.getByPlaceholder("Password").fill("admin123");

     await page.getByRole("button" , {name : " Login "}).click();

     await page.waitForLoadState("networkidle");

     await page.getByRole("link",{name:"Admin"}).click();

     await page.getByRole("button" ,{name : " Add "}).click();

     await page.waitForLoadState("networkidle");
     const dropDwn =await page.locator(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").first().click();
//      //dropDwn.click();
      const elements_count = await dropDwn.count();
     // console.log(elements_count);

      for(let i=0;i<elements_count;i++)
      {
           const text = await dropDwn.nth(i).textContent();
  console.log(text);
      }

      // await page.getByRole("Option" ,{name : "ESS"}).click();
}
)
