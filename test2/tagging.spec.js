import {test, expect } from '@playwright/test';

// Run: npx playwright test --grep "@tagname"

test("test 1 @sanity", async ({ page }) => {
    console.log("sanity test");
});

test("test 2 @reg", async ({ page }) => {
    console.log("its a regression test");
});

test("test 3 @smoke", async ({ page }) => {
    console.log("smoke test");
});