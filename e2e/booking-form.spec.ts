import { test, expect } from '@playwright/test';

test.describe('Booking Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/booking');
  });

  test('should display booking form', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
    await expect(page.getByLabel(/Full Name/)).toBeVisible();
    await expect(page.getByLabel(/Phone Number/)).toBeVisible();
    await expect(page.getByLabel(/Email/)).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /Submit Booking/ });
    
    // Try to submit empty form
    await submitButton.click();
    
    // Browser validation should prevent submission
    const nameField = page.getByLabel(/Full Name/);
    await expect(nameField).toBeVisible();
    
    // Fill in required fields
    await nameField.fill('Test User');
    await page.getByLabel(/Phone Number/).fill('1234567890');
    await page.getByLabel(/Email/).fill('test@example.com');
    await page.getByLabel(/Service/).selectOption({ index: 1 });
    
    // Set date (future date)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    await page.getByLabel(/Preferred Date/).fill(dateStr);
    
    await page.getByLabel(/Location/).fill('Mumbai');
    
    // Form should be submittable now
    await expect(submitButton).toBeEnabled();
  });

  test('should handle form submission', async ({ page }) => {
    // Mock the API response
    await page.route('**/api/booking', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success' }),
      });
    });

    // Fill form
    await page.getByLabel(/Full Name/).fill('Test User');
    await page.getByLabel(/Phone Number/).fill('1234567890');
    await page.getByLabel(/Email/).fill('test@example.com');
    await page.getByLabel(/Service/).selectOption({ index: 1 });
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await page.getByLabel(/Preferred Date/).fill(tomorrow.toISOString().split('T')[0]);
    await page.getByLabel(/Location/).fill('Mumbai');
    
    // Submit
    await page.getByRole('button', { name: /Submit Booking/ }).click();
    
    // Should redirect to success page
    await expect(page).toHaveURL('/booking/success');
    await expect(page.getByText(/Booking Request Submitted/)).toBeVisible();
  });
});

