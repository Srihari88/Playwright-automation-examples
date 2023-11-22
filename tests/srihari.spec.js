const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')
    const pageTitle = await page.title();
    console.log('Page Title is: ', pageTitle)
    await expect(page).toHaveTitle('STORE');
    const pageURL = page.url();
    console.log('Page URL: ', pageURL)
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.click('id=login2')
    await page.fill('id=loginusername', 'sriharinaidu')
    await page.fill('id=loginpassword', 'password123')
    await page.click('[onclick="logIn()"]')
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
})

test('Verify multiple links text in the webpage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const webPageLinks = await page.$$('a');
    for (const web of webPageLinks) {
        const linkText = await web.textContent();
        console.log(linkText);
    }
})


test('Verify multiple web elements in the webpage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const webPageProducts = await page.$$('//div[@id="tbodyid"]//div/h4');
    for (const product of webPageProducts) {
        const prods = await product.textContent();
        console.log(prods);
    }
})