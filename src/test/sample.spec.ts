import { expect, test } from '@playwright/test'

test('Verify LUMA Website Home Page', async ({ page }) => {

    await test.step('Navigating to the Home Page', async () => {
        await page.goto('https://magento.softwaretestingboard.com/')
    })

    await test.step('Verify the Logo is displayed', async () => {
        await expect(page.locator('//*[@class="logo"]')).toBeVisible()
    })

    await test.step('Verify the Search Bar is displayed', async () => {
        await expect(page.locator('//*[@id="search"]')).toBeVisible()
    })

    await test.step('Verify all the Headings', async () => {
        await expect(page.locator('//*[@id="ui-id-2"]')).toBeVisible()
    })
})