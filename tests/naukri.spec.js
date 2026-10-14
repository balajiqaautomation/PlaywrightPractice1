import{expect, test} from '@playwright/test';

test('Open Naukri Profile', async({page})=> {
    await page.goto('https://www.naukri.com/');
    const pageTitle = await page.title();   
    //await expect(page).toHaveTitle('Jobs - Recruitment - Job Search -  Employment - Job Vacancies - Naukri.com')
    //console.log(pageTitle);

    const loginButton=  await page.getByTitle('Jobseeker Login')
    await loginButton.click();

    const enterUsername =  await page.getByPlaceholder('Enter your active Email ID / Username').fill('balajikrishnanqa333@gmail.com');
    const enterPassword = await page.getByPlaceholder('Enter your password').fill('P@ss02061995')

    const clickLoginButton = await page.locator("//button[text()='Login']");
    await clickLoginButton.click();

    const homePage = await page.title()
    //console.log(homePage)

    await expect(page).toHaveTitle('Home | Mynaukri')

    await page.screenshot({ path : 'screenshot.png'})



});