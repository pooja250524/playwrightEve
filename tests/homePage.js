exports.homePage=class homePage
{
    constructor(page)
    {
        this.page=page;
        this.search ="#small-searchterms";
        this.searchBtn =".search-box-button";
       
        this.productItem =".product-item";

    }

    async searchItem(Item)
    {
        await this.page.locator(this.search).fill(Item);
        await this.page.locator(this.searchBtn).click();
        //await this.page.locator(this.adToCart).click();

    }
    async cart(itemName)
    {
        await this.page.locator(this.productItem).filter({hasText : itemName}).getByRole("button" ,{name: "Add to cart"}).click();
    }
}