import { test, expect } from '@playwright/test';

test.describe('Status Page', () => {
  test('should display the status page with correct title', async ({ page }) => {
    await page.goto('/');

    // Verifica se foi redirecionado para /status
    await expect(page).toHaveURL(/.*status/);

    // Verifica o título da página
    await expect(page.locator('h1')).toContainText('API Status');
  });

  test('should display status information card', async ({ page }) => {
    await page.goto('/status');

    // Aguarda o carregamento dos dados
    await page.waitForTimeout(1000);

    // Verifica se o card de informações está presente
    await expect(page.getByText('General Status')).toBeVisible();
    await expect(page.getByText('Version')).toBeVisible();
    await expect(page.getByText('Response Time')).toBeVisible();
    await expect(page.getByText('Last Check')).toBeVisible();
  });
})
