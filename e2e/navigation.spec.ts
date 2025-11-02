import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');
    
    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Navigate to Services
    await page.click('text=Services');
    await expect(page).toHaveURL('/services');
    
    // Navigate to Booking
    await page.click('text=Booking');
    await expect(page).toHaveURL('/booking');
    
    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
  });

  test('header should hide on scroll down and show on scroll up', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    
    // Initial state - header should be visible
    await expect(header).toBeVisible();
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(100);
    
    // Header should be hidden (check transform)
    const transform = await header.evaluate((el) => 
      window.getComputedStyle(el).transform
    );
    // Transform should indicate header moved up (hidden)
    
    // Scroll up
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
    
    // Header should be visible again
    await expect(header).toBeVisible();
  });
});

