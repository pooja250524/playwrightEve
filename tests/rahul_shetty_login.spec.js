import {test ,expect} from "@playwright/test";
 
test("add to cart" ,async({page})=>
{
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.getByPlaceholder("email@example.com").fill("bharat007@gmail.com");
   await page.getByPlaceholder("enter your passsword").fill("Bharat@007");
   await  page.getByRole("button",{name: "login"}).click();
  await page.waitForLoadState('networkidle');
   await page.getByRole("button" , {name:"   ORDERS"}).click();

      const products = page.locator(".card-body");

      await products.filter({hasText: "iphone 13 pro"}).getByRole("button" ,{name : "Add To Cart"}).click();
     const message = await page.getByRole("link" ,{name :"Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire"});
     await expect(message).toContainText("Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire");

     await page.waitForLoadState("networkidle");
     await page.locator("button[routerlink='/dashboard/cart']").click();
     await page.getByText("Checkout").click();

     //await page.locator(".input.txt.text-validated").fill("4542 9931 9292 2293");
     await page.locator(".ddl").first().selectOption("03");
     await page.locator(".ddl").last().selectOption("24");
     await page.getByPlaceholder("Select Country").pressSequentially("Ind");
     await page.waitForLoadState("networkidle");
     await page.getByRole('button' ,{name :' India'}).click();
     await page.getByText("Place Order").click();

     
     const order_msg =await page.locator(".hero-primary");
      await expect(order_msg ).toContainText(" Thankyou for the order. ");

      const created_order_id= await page.locator("label[class='ng-star-inserted']").textContent();
      console.log();
        table_id =await page.locator("table tbody tr th");
    const count_table_id =table_id.count();
    console.log(table_id);
      for(let i =0 ;i<count_table_id;i++)
         {
      for(let i =0 ;i<count_table_id;i++)
             if(created_order_id==count_table_id)
             {
                console.log("Id got verified in order Table")
             }

         }


      




}
)
