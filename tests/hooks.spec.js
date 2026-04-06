import {test ,expect} from  "@playwright/test";
 
 let context;
 let page;


//test.beforeEach("login test" , async ({page})=>
    test.beforeAll("login test" , async ({browser})=>
{
      context = await browser.newContext();
      page = await context.newPage();
     const username  = "pooja19@gmail.com";
     const password ="123456";

      //const context = browser.newContext();

      
     await page.goto("https://demowebshop.tricentis.com/login");
     await page.getByRole("link" ,{name :"Log in"}).click();
     await page.getByLabel("Email:").fill(username);
     await page.getByLabel("Password:").fill(password);
     await page.getByRole("button" ,{name : "Log in"}).click();
})
test("finding laptop" ,async ()=>
{
     await page.locator("#small-searchterms").fill("laptop");
     await page.locator(".button-1.search-box-button").click();
     const laptopName =await page.locator("h2 a[href$='/141-inch-laptop']").textContent();
    console.log(laptopName);
}
)
test("finding giftcard" ,async ()=>
{
     await page.locator("#small-searchterms").fill("gift");
     await page.locator(".button-1.search-box-button").click();
     const cardName =await page.locator('h2 a[href="/100-physical-gift-card"]').textContent();
    console.log(cardName);
}
)

//test.afterEach("logout test" , async ({page})=>
    test.afterAll("logout test" , async ()=>
{
     page.getByRole("link" ,{name :"Log out"}).click();

}
)