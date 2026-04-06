import {test ,expect} from "@playwright/test";
import {login} from "./login.js";
import { homePage } from "./homePage.js";
import { checkoutPage } from "./checkoutPage.js";
 test("end to end testing " ,async ({page})=>
{
     //dialog handler --> simple alert 
     page.on("dialog" ,dialog =>
      {
          dialog.accept();
      }
    )

    const loginTest= new login(page);
    await loginTest.goto();
    await loginTest.loginUser("pooja12234","123456");
    const homeTest = new homePage(page);
    await homeTest.findProduct("Nexus 6") ;
    await page.waitForTimeout(5000);
    const checkoutTest = new checkoutPage(page);
    await checkoutTest.addProduct();
    
    await checkoutTest.cartItem();
    await checkoutTest.placeorder("pooja","India","Gwalior","visa","03","2023");
    await page.waitForTimeout(5000);
} 
)
