import {test ,expect} from  "@playwright/test";

test.describe("group 1" , ()=>
{

      test("test1" , async({page})=>
      {
         console.log("HI");
      }
    )
    test("test2" , async({page})=>
    {
        console.log("hello");
    }
)
}
)