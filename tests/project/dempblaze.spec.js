import {test ,expect} from "@playwright/test";
import {login} from "./login.js";
 test("end to end testing " ,async ({page})=>
{
     //dialog handler --> simple alert 
     page.on("dialog" ,dialog =>
      {
          dialog.accept();



     }
)
}
    )
     
    
    test("demo blaze" ,async ({page})=>
    {
    const loginTest= new login(page);

     await page.goto();
     await  loginTest.login("pooja12234" ,"123456")

     await page.waitForTimeout(5000);
}
)
