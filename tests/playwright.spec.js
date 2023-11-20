// @ts-check
import {test,expect} from '@playwright/test'


test('PlayWrite practice',async ({page})=>{

await page.goto("https://selectorshub.com/xpath-practice-page/")
await page.fill('[id="userId"]','hellosrisri@gmail.com')
await page.fill('[id="pass"]','password')
await page.fill('[placeholder="Enter your company"]','naidu')
await page.fill('[placeholder="Enter your mobile number"]','8767645587')
await page.click('[value="Submit"]')


})

