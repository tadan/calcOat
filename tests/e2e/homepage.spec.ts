import { test, expect } from '@playwright/test'

/**
 * Homepage e2e tests
 * Tests critical user-facing content and navigation
 */

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/')

    // Check hero heading
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('WOW NO COW')

    // Check hero description (use p tag to target only main description, not footer)
    await expect(page.locator("p.text-xl:has-text(\"It's like milk but made for humans\")")).toBeVisible()

    // Check CTA button
    const ctaButton = page.locator('text=Calculate Your Impact')
    await expect(ctaButton).toBeVisible()
  })

  test('should display impact metrics', async ({ page }) => {
    await page.goto('/')

    // Check that key metrics are displayed
    await expect(page.locator('text=2.5kg')).toBeVisible()
    await expect(page.locator('text=CO₂ saved per liter')).toBeVisible()
    await expect(page.locator('text=600L')).toBeVisible()
    await expect(page.locator('text=Water saved per liter')).toBeVisible()
  })

  test('should navigate to calculator page', async ({ page }) => {
    await page.goto('/')

    // Click CTA button
    await page.click('text=Calculate Your Impact')

    // Verify navigation
    await expect(page).toHaveURL('/calculator')
  })

  test('should display products section', async ({ page }) => {
    await page.goto('/')

    // Check products section heading
    await expect(page.locator('text=Our Products Save The Planet')).toBeVisible()

    // Note: Products may or may not exist in Storyblok
    // So we just check the section renders without errors
  })

  test('should be accessible and have proper structure', async ({ page }) => {
    await page.goto('/')

    // Check that page has a main heading
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // Check that links are keyboard accessible
    await page.keyboard.press('Tab')
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON']).toContain(focusedElement)
  })
})
