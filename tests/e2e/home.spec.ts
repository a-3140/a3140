import { test, expect } from "@playwright/test";

test("should not redirect the homepage", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveURL("http://localhost:3000/");
});
