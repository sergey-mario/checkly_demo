// @ts-check
const { test, expect } = require('@playwright/test')

test('locked user', async ({ page }) => {
  // Hello world
  await page.goto('https://www.saucedemo.com/');
  await page.type('#user-name', 'locked_out_user')
  await page.type('#password', 'secret_sauce')
  await page.click('#login-button')
  await expect(page.locator('h3[data-test="error"]'))
      .toHaveText('Epic sadface: Sorry, this user has been locked out.')
});
