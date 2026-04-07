import{test,expect} from "@playwright/test";
require('dotenv').config();
 test("env" ,async({page})=>
 {
   console.log(process.env.BASE_URL);
   console.log(process.env.USERNAME);
   console.log(process.env.PASSWORD);

   await page.goto(process.env.BASE_URL);

 }
)
