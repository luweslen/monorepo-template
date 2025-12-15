import { test, expect } from '@playwright/test';

test.describe('E2E :: Components :: Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/status');
  });

  test('should display theme toggle button', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    await expect(themeButton).toBeVisible();
  });

  test('should toggle theme on click', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    const html = page.locator('html');

    const initialTheme = await html.getAttribute('class');

    await themeButton.click();
    await page.waitForTimeout(300);

    const newTheme = await html.getAttribute('class');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('should persist theme changes', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    const html = page.locator('html');

    await themeButton.click();
    await page.waitForTimeout(300);

    const themeAfterToggle = await html.getAttribute('class');

    await page.reload();
    await page.waitForTimeout(500);

    const themeAfterReload = await html.getAttribute('class');
    expect(themeAfterReload).toBe(themeAfterToggle);
  });

  test('should toggle theme multiple times', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    const html = page.locator('html');

    await themeButton.click();
    await page.waitForTimeout(300);
    const firstToggle = await html.getAttribute('class');

    await themeButton.click();
    await page.waitForTimeout(300);
    const secondToggle = await html.getAttribute('class');

    await themeButton.click();
    await page.waitForTimeout(300);
    const thirdToggle = await html.getAttribute('class');

    expect(firstToggle).not.toBe(secondToggle);
    expect(firstToggle).toBe(thirdToggle);
  });
});
