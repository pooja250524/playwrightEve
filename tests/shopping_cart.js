const { expect } = require("@playwright/test");

exports.shopping_cart=class shopping_cart
{
    constructor(page)
    {
        this.page=page
        this.cart=".add-to-cart-button";
        this.rName =".recipient-name";
        this.rMail =".recipient-email";
        this.message =".content";

   }

   async addTocart(name ,email)
   {
      await this.page.locator(this.rName).fill(name);
      await this .page.locator(this.rMail).fill(email);
      await this.page.locator(this.cart).click();

    const cartMessage = await this .page.locator(this.message);
    
   }

  async verifyMsg(msg)
   {
    const cartMessage = await this.page.locator(this.message);
     expect( cartMessage).toContainText(msg);
   }
}