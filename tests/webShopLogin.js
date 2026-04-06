//this will be the login page commands/test
exports.loginPage = class loginPage
{
    constructor(page)
    {
        this.page=page;
        this.loginLink=".ico-login";
        this.userMail="#Email";
        this.userPassword="#Password";
        this.loginButton=".login-button";
    }

    async gotoUrl()
    {
        await this.page.goto("https://demowebshop.tricentis.com/login")

    }
    //* login("bharat007@gmail.com" ,"bharat@007")
    async login(email ,pass)
    {
         await this.page.locator(this.loginLink).click();
         await this.page.locator(this.userMail).fill(email);
         await this.page.locator(this.userPassword).fill(pass);
         await this.page.locator(this.loginButton).click();
    }
}