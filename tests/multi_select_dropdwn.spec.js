import {test} from "@playwright/test"

test("multi-select" , async ({page})=>{
 
     await page.goto("https://testautomationpractice.blogspot.com/");

     await page.getBylabel("Colors:").selectOption(["Red ","Blue" ,"Green"])
    


})
