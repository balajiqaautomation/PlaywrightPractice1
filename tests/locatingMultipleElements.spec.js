import { test, expect } from '@playwright/test'
import { link } from 'node:fs'

test('Locating Multiple Elements', async({page})=> {
    await page.goto('https://www.demoblaze.com/index.html')

    // // $$ symbol is used for locating multiple elements
    // const Links = await page.$$('a')

    // for(const link of Links){
    //     const linkText = await link.textContent();
    //     console.log(linkText)
    // }

    // print the products

    const Products = await page.$$("//div[@id='tbodyid']//h4//a")

    for(const product of Products){
        const productList = await product.textContent()
        console.log(productList)
    }


})