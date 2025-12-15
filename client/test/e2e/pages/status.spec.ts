import { test, expect } from '@playwright/test';

test.describe('E2E :: Pages :: Status Page', () => {
  test('should display the status page with correct title', async ({ page }) => {
    await page.goto('/status');

    await expect(page).toHaveURL(/.*status/);

    await expect(page.locator('h1')).toContainText('Status da API');
  });

  test('should display status information card', async ({ page }) => {
    await page.goto('/status');

    await page.waitForTimeout(1000);

    await expect(page.getByText('Status Geral')).toBeVisible();
    await expect(page.getByText('Versão')).toBeVisible();
    await expect(page.getByText('Tempo de Resposta')).toBeVisible();
    await expect(page.getByText('Última Verificação')).toBeVisible();
  });
})
