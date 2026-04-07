import {test ,expect ,request} from "@playwright/test";
let token;

 const loginPayload={userEmail : "bharat007@gmail.com" , userPassword : "Bharat007@gmail.com"};

 test.beforeAll(async()=>
 {
     const apiContext = await request.newContext();
     const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client/#/auth/login",
        {data:loginPayload}
     );
     const loginResponseJSON =  await loginResponse.json;

      token = await loginResponseJSON.token;
 }
)

test("api calls" ,async({page})=>{

    await page.addInitScript(value =>
    {
        window.localStorage.setItem("token" ,value)} ,token);

         await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
)

