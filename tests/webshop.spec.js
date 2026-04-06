//this will be our main test file
import {test ,expect} from "@playwright/test";

import {loginPage} from "./webShopLogin.js";
import { homePage } from "./homePage.js";
import {shopping_cart} from "./shopping_cart.js";
 
test("web shop test" ,async ({page})=>
{

    //now we have to call the class with a new variable

    const logintest= new loginPage(page);
    const hometest = new homePage(page);
    const shopping_cartTest = new shopping_cart(page);
    await logintest.gotoUrl();

    await logintest.login("pooja19@gmail.com" ,"123456");

    await page.waitForTimeout(5000);

    await hometest.searchItem("gift");

    await hometest.cart("$5 Virtual Gift Card");
    await page.waitForTimeout(5000);

    await shopping_cartTest.addTocart("pooja" ,"pooja19@gmail.com");
    await page.waitForTimeout(5000);

     await shopping_cartTest.verifyMsg("The product has been added to your ");
 
     await page.waitForTimeout(5000);
    

}
)