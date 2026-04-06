exports.login= class login
{
constructor(page)
{
    this.page=page;
    this.login= "#login2";
    this.username ="#loginusername";
    this.password="#loginpassword";
    this.loginBtn ="button[onclick='logIn()']";
}
 
async goto()
    {
        await this.page.goto("https://www.demoblaze.com/index.html")

    }
async loginUser(email,pass)
{
    await this.page.locator(this.login).click();
    await this.page.locator(this.username).fill(email);
    await this.page.locator(this.password).fill(pass);
    await this.page.locator(this.loginBtn).click();

}
}