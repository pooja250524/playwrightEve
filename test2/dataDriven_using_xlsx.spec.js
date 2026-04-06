import {test ,expect} from "@playwright/test";
 import fs from 'fs';

 import * as XLSX from "xlsx";
  
 const xlsxFilePath = "test-data/data.xlsx"
  const workBook = XLSX.readFile(xlsxFilePath);
   
  const sheet = workBook.SheetNames[0];
  const worksheet = workBook.Sheets[sheet];

   const loginData = XLSX.utils.sheet_to_json(worksheet);

    for(let {email ,password} of loginData)
    {
         test(`data driven test ${email}` ,async ({page})=>
                {
                await page.goto("https://demowebshop.tricentis.com/");
                await page.locator(".ico-login").click();
                await page.locator("#Email").fill(email);
                await page.locator("#Password").fill(password);
                await page.locator(".button-1.login-button").click();
                }
            )
             }
    