import {test} from "@playwright/test"
 test("drag and drop" , ({page})=>

     await page.goto("https://testautomationpractice.blogspot.com/");

      //const item =await page.locator("#draggable");
      //const container =await page.locator("#droppable");

       await item.dragTo(container);
)

test.skip("drag and drop2" , ({page})=>
{
     await page.goto("https://testautomationpractice.blogspot.com/");

      const item =await page.locator("#draggable");
      const container =await page.locator("#droppable");

       await  page.dragAndDrop
}
)