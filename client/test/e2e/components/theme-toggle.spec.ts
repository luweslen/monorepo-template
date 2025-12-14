import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
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

    // Verifica o tema inicial
    const initialTheme = await html.getAttribute('class');

    // Clica no botão para alternar o tema
    await themeButton.click();
    await page.waitForTimeout(300);

    // Verifica se o tema mudou
    const newTheme = await html.getAttribute('class');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('should persist theme changes', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    const html = page.locator('html');

    // Alterna o tema
    await themeButton.click();
    await page.waitForTimeout(300);

    const themeAfterToggle = await html.getAttribute('class');

    // Recarrega a página
    await page.reload();
    await page.waitForTimeout(500);

    // Verifica se o tema foi persistido
    const themeAfterReload = await html.getAttribute('class');
    expect(themeAfterReload).toBe(themeAfterToggle);
  });

  test('should toggle theme multiple times', async ({ page }) => {
    const themeButton = page.getByTestId('theme-toggle-button');
    const html = page.locator('html');

    // Primeiro toggle
    await themeButton.click();
    await page.waitForTimeout(300);
    const firstToggle = await html.getAttribute('class');

    // Segundo toggle
    await themeButton.click();
    await page.waitForTimeout(300);
    const secondToggle = await html.getAttribute('class');

    // Terceiro toggle
    await themeButton.click();
    await page.waitForTimeout(300);
    const thirdToggle = await html.getAttribute('class');

    // Verifica que os toggles alternaram corretamente
    expect(firstToggle).not.toBe(secondToggle);
    expect(firstToggle).toBe(thirdToggle);
  });
});
