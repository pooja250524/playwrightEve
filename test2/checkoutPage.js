exports.checkoutPage = class checkoutPage
{
     constructor(page)
     {
        this.page=page;
        this.addTocart=".btn-success";
        this.cart="#cartur";
        this.name="#name";
        this.country="#country";
        this.city="#city";
        this.card="#card";
        this.month="#month";
        this.year="#year";
     }

     async addProduct()
     {
         await this.page.locator(this.addTocart).click();
     }

     async cartItem()
     {
        await this.page.locator(this.cart).click();
     }

     async placeorder(rName,rCountry,rCity,rcard,rMonth,rYear)
     {
        await this.page.getByRole("button" ,{name : "Place Order"}).click();
        await this.page.locator(this.name).fill(rName);
        await this.page.locator(this.country).fill(rCountry);
        await this.page.locator(this.city).fill(rCity);
        await this.page.locator(this.card).fill(rcard);
        await this.page.locator(this.month).fill(rMonth);
        await this.page.locator(this.year).fill(rYear);
     }
}



