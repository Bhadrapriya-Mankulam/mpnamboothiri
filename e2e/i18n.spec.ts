import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test('should display content in default language', async ({ page }) => {
    await page.goto('/');
    
    // Check English content is displayed
    await expect(page.getByText('Vedic Priest in Mumbai')).toBeVisible();
    await expect(page.getByText('Book a Puja')).toBeVisible();
  });

  // Note: Full i18n implementation with language toggle would be tested here
  // This is a placeholder test structure
  test('should persist language selection', async ({ page }) => {
    await page.goto('/');
    
    // This would test localStorage persistence if i18n toggle is implemented
    // For now, just verify page loads
    await expect(page.getByText('Vedic Priest in Mumbai')).toBeVisible();
  });
});

