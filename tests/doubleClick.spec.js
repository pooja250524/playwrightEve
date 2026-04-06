test("double click action" ,async ({page})=>
{

    await page.gotto("https://testautomationpractice.blogspot.com/");

    await page.getByRole("button" ,{name : "copy Text"}).dblclick();

    await page.waitForTimeout(3000);
})