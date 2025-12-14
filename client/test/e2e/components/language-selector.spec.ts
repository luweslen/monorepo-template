import { test, expect } from '@playwright/test';

test.describe('Language Selector', () => {
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

    // Verifica se o menu está visível
    const menu = page.getByTestId('language-selector-menu');
    await expect(menu).toBeVisible();

    // Verifica se as opções de idioma estão visíveis
    await expect(page.getByTestId('language-option-pt-BR')).toBeVisible();
    await expect(page.getByTestId('language-option-en-US')).toBeVisible();
    await expect(page.getByTestId('language-option-es-ES')).toBeVisible();
  });

  test('should change language to English', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    // Seleciona English
    await page.getByTestId('language-option-en-US').click();

    // Aguarda a mudança de idioma
    await page.waitForTimeout(500);

    // Verifica se o título mudou para inglês
    await expect(page.locator('h1')).toContainText('API Status');
  });

  test('should change language to Spanish', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    // Seleciona Español
    await page.getByTestId('language-option-es-ES').click();

    // Aguarda a mudança de idioma
    await page.waitForTimeout(500);

    // Verifica se o título mudou para espanhol
    await expect(page.locator('h1')).toContainText('Estado de la API');
  });

  test('should display language flags in dropdown', async ({ page }) => {
    const languageButton = page.getByTestId('language-selector-button');
    await languageButton.click();

    // Verifica se os emojis de bandeiras estão presentes
    const menu = page.getByTestId('language-selector-menu');
    await expect(menu).toContainText('🇧🇷');
    await expect(menu).toContainText('🇺🇸');
    await expect(menu).toContainText('🇪🇸');
  });
});
