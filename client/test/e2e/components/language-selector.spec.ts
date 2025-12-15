import { test, expect } from '@playwright/test';

test.describe('E2E :: Components :: Language Selector', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/status');
  });

  test('should display language selector button', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await expect(languageButton).toBeVisible();
  });

  test('should open language dropdown menu on click', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    const menu = page.getByTestId('language-selector-menu');
    await expect(menu).toBeVisible();

    await expect(page.getByTestId('language-option-pt-BR')).toBeVisible();
    await expect(page.getByTestId('language-option-en-US')).toBeVisible();
    await expect(page.getByTestId('language-option-es-ES')).toBeVisible();
  });

  test('should change language to English', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    await page.getByTestId('language-option-en-US').click();

    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText('API Status');
  });

  test('should change language to Spanish', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    await page.getByTestId('language-option-es-ES').click();

    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText('Estado de la API');
  });

  test('should display language flags in dropdown', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    const menu = page.getByTestId('language-selector-menu');
    await expect(menu).toBeVisible();

    await expect(menu).toContainText('🇧🇷');
    await expect(menu).toContainText('🇺🇸');
    await expect(menu).toContainText('🇪🇸');
  });
});
