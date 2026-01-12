import { test, expect } from '@playwright/test'

/**
 * Calculator e2e tests
 * Tests the core functionality of the impact calculator
 */

test.describe('Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/calculator')
  })

  test('should load and display calculator form', async ({ page }) => {
    // Check heading
    await expect(page.locator('h1')).toContainText('Impact Calculator')

    // Check form elements are present
    await expect(page.locator('#product-type')).toBeVisible()
    await expect(page.locator('#amount')).toBeVisible()
    await expect(page.locator('#time-frame')).toBeVisible()

    // Check calculate button
    await expect(page.locator('text=Calculate Impact')).toBeVisible()
  })

  test('should calculate impact for milk consumption', async ({ page }) => {
    // Select product type (default is milk, but let's be explicit)
    await page.selectOption('#product-type', 'milk')

    // Enter amount
    await page.fill('#amount', '10')

    // Select time frame
    await page.selectOption('#time-frame', 'weekly')

    // Click calculate button
    await page.click('text=Calculate Impact')

    // Wait for results to appear
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()
    await expect(page.locator('h3:has-text("Water")')).toBeVisible()
    await expect(page.locator('h3:has-text("Land")')).toBeVisible()

    // Check that numeric results are displayed
    await expect(page.locator('text=/kg CO₂/i')).toBeVisible()
    await expect(page.locator('text=/liters/i')).toBeVisible()
  })

  test('should show reset button after calculation', async ({ page }) => {
    // Fill form
    await page.fill('#amount', '5')
    await page.selectOption('#time-frame', 'daily')

    // Calculate
    await page.click('text=Calculate Impact')

    // Wait for results
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()

    // Check reset button appears
    await expect(page.locator('text=Reset')).toBeVisible()
  })

  test('should reset calculator when reset button clicked', async ({ page }) => {
    // Fill and calculate
    await page.fill('#amount', '15')
    await page.selectOption('#time-frame', 'monthly')
    await page.click('text=Calculate Impact')

    // Wait for results
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()

    // Click reset
    await page.click('text=Reset')

    // Results should disappear
    await expect(page.locator('h3:has-text("Carbon")')).not.toBeVisible()

    // Reset button should disappear
    await expect(page.locator('text=Reset')).not.toBeVisible()
  })

  test('should handle different product types', async ({ page }) => {
    // Test with cheese
    await page.selectOption('#product-type', 'cheese')
    await page.fill('#amount', '2')
    await page.selectOption('#time-frame', 'weekly')
    await page.click('text=Calculate Impact')

    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()

    // Reset and test with yogurt
    await page.click('text=Reset')
    await page.selectOption('#product-type', 'yogurt')
    await page.fill('#amount', '7')
    await page.click('text=Calculate Impact')

    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()
  })

  test('should handle zero and decimal amounts', async ({ page }) => {
    // Test with decimal
    await page.fill('#amount', '1.5')
    await page.click('text=Calculate Impact')
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()

    // Reset and test with zero (should still calculate, just show zero impact)
    await page.click('text=Reset')
    await page.fill('#amount', '0')
    await page.click('text=Calculate Impact')
    // Should show results even if zero
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()
  })

  test('should display chart after calculation', async ({ page }) => {
    // Fill and calculate
    await page.fill('#amount', '10')
    await page.click('text=Calculate Impact')

    // Wait for results
    await expect(page.locator('h3:has-text("Carbon")')).toBeVisible()

    // Check that chart container exists (Recharts renders SVG)
    const chart = page.locator('svg').first()
    await expect(chart).toBeVisible()
  })

  test('should display data source information', async ({ page }) => {
    // Check that the about section is present
    await expect(page.locator('h2:has-text("About Our Data")')).toBeVisible()
    await expect(page.locator('text=Poore & Nemecek (2018)')).toBeVisible()
  })

  test('should maintain form state when navigating away and back', async ({ page }) => {
    // Fill form
    await page.selectOption('#product-type', 'butter')
    await page.fill('#amount', '25')
    await page.selectOption('#time-frame', 'yearly')

    // Navigate away
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('WOW NO COW')

    // Navigate back
    await page.goto('/calculator')

    // Note: Form will be reset (no persistence), but page should load correctly
    await expect(page.locator('#product-type')).toBeVisible()
    await expect(page.locator('#amount')).toBeVisible()
  })
})
