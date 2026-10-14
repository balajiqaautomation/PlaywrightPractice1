import { test, expect } from '@playwright/test'

test('Locators', async ({page})=> {
    await page.goto('https://www.demoblaze.com/index.html')

    //click on login button
    //await page.locator('id=login2').click()
    await page.click('id=login2')
    // provide username 
    await page.locator('#loginusername').fill('balaji3377')
    await page.locator('#loginpassword').fill('Balaji@3377')

    //click submit button
    await page.click('//button[normalize-space()="Log in"]')

    // verify the logout link is presencs
    const logoutlink = await page.locator('//a[normalize-space()="Log out"]')
    await expect(logoutlink).toBeVisible()


    

})