import {test ,expect} from "@playwright/test";
 
test("handling window" , async ({browser})=>
{
     const context = await browser.newContext();

     const page1 = await context.newPage();
     page1.goto("https://demowebshop.tricentis.com/");
      page1.screenshot({path :"img1.png"});

      const page2 = await context.newPage();
       page2.goto("https://next.practiz.xyz/login");
       page2.screenshot({path:"img2.png"});
} 
)