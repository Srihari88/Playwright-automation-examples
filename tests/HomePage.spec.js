// @ts-check
const { test, expect } = require('@playwright/test')

test('HomePage', async ({ page }) => {

    await page.goto('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')
    const pageTitle = await page.title();
    console.log('Web Page Title is: ', pageTitle)
    await expect(page).toHaveTitle('OrangeHRM')

    const pageURL = await page.url();
    console.log('Web Page URL: ', pageURL)

    await expect(page).toHaveURL('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')

    await page.fill('id=txtUsername', 'Admin')
    await page.fill('id=txtPassword', 'admin123')

    await page.click('[id="btnLogin"]')

    const validatonMessage = page.locator('id=spanMessage')

    await expect(validatonMessage).toBeVisible()



})