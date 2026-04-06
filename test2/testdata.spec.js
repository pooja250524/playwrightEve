import {test,expect} from "@playwright/test";
 import fs from 'fs';
 import {parse} from "csv-parse/sync";


   //step1 : hold on to the csv path
    const csvpath ="test-data/data.csv";

    //store data in the given file
     const fileContent = fs.readFileSync(csvpath ,'utf-8');  
     //store only the required data and remove empty lines

     const records =parse(fileContent,{
            columns: true,
            skip_empty_lines:true


        }

     )

     for(let data of records)
     {
        test(`data driven test ${data.email}` ,async ({page})=>
        {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(data.email);
        await page.locator("#Password").fill(data.password);
        await page.locator(".button-1.login-button").click();
        }
    )
     }

