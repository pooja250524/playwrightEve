import {test} from "@playwright/test";

test("Simple alert" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog" ,dialog =>
    {
        dialog.accept();
    })

    await page.getByRole("button" ,{name : "Simple Alert"});
    //await page.waitForEvent(5000);
   
}
)
test("Confirmation alert" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog" ,dialog =>
    {
        dialog.dismiss();
    })
    await page.getByRole("button" ,{name : "Confirmation Alert"}).click();


   
}
)
test("Prompt alert" ,async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog" ,dialog =>
    {
        dialog.accept("Bharat");
    })
 
    await page.getByRole("button" ,{name : "Prompt Alert"}).click();
   // await page.waitForTimeout(30000);
   
}
)

test.only("multiple pop ups handing " ,async ({page}) =>
{

     await page.goto("https://testautomationpractice.blogspot.com/");
       

      //window dialog nahdler
       page.on("dialog" ,(dialog) =>
       {
        const message = dialog.message();
          if(message.includes("I am an alert box!"))
          {
             dialog.accept();
          }
          if(message.includes("Press a button!"))
          {
             dialog.dismiss();
          }
          if(message.includes("Please enter your name:"))
          {
             dialog.accept("Pooja");
          }
          
       })

    
    await page.getByRole("button" ,{name : "Simple Alert"}).click();
    await page.getByRole("button" ,{name : "Confirmation Alert"}).click();
    await page.getByRole("button" ,{name : "Prompt Alert"}).click();

}
)