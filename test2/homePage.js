exports.homePage= class homePage
{
constructor(page)
{
    this.page=page;
    this.productTitle=".card-title a";
   
}
async findProduct(itemName)
{
    
   
  await this.page.getByRole('link', { name: itemName }).click();
}
}

