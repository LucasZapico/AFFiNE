import { expect, type Page } from '@playwright/test';

export const coreUrl = 'http://localhost:8080';

export async function openHomePage(page: Page) {
  await page.goto(coreUrl);
}

export async function open404Page(page: Page) {
  await page.goto(`${coreUrl}/404`);
}

export async function openJournalsPage(page: Page) {
  await page.getByTestId('slider-bar-journals-button').click();
  await expect(
    page.locator('.doc-title-container:has-text("Today")')
  ).toBeVisible();
}
