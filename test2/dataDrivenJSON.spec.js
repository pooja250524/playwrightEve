import {test} from "@playwright/test";

import fs from 'fs'
//fs module -->convert the given values or data into java script object

//create a variable to store the json file path
 const jsonPath="./test-data/data.json";

 //create another variable to store 

 const loginData=JSON.parse(fs.readFileSync(jsonPath));

 for(let [email,password ,validity] of loginTestData)
        {
    test(`ddt for the login ${email}` ,async ({page})=>
    {
         await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(password);
        await page.locator(".button-1.login-button").click();

       

 }
    )
};

