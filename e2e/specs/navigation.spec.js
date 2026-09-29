import { test, expect } from '../fixtures.js';

test.describe('Navigation', () => {
  test.beforeEach(async ({ loginAs }) => {
    await loginAs('customer');
  });

  test('header links navigate between the main pages', async ({ page, header, productListPage, cartPage, homePage }) => {
    await header.productsLink.click();
    await expect(page).toHaveURL(/\/products$/);
    await expect(productListPage.heading).toBeVisible();
    await expect(header.productsLink).toHaveAttribute('aria-current', 'page');

    await header.cartLink.click();
    await expect(page).toHaveURL(/\/cart$/);
    await expect(cartPage.heading).toBeVisible();
    await expect(header.cartLink).toHaveAttribute('aria-current', 'page');

    await header.homeLink.click();
    await expect(page).toHaveURL(/\/home$/);
    await expect(homePage.welcomeHeading).toBeVisible();
    await expect(header.homeLink).toHaveAttribute('aria-current', 'page');
  });

  test('logo returns to the home page', async ({ page, header }) => {
    await header.productsLink.click();
    await header.logoLink.click();

    await expect(page).toHaveURL(/\/home$/);
  });

  test('"Shop Now" on the home page opens the product list', async ({ page, homePage, productListPage }) => {
    await homePage.shopNowButton.click();

    await expect(page).toHaveURL(/\/products$/);
    await expect(productListPage.heading).toBeVisible();
  });

  test('unknown routes show the 404 page', async ({ page, header }) => {
    await page.goto('/this-page-does-not-exist');

    await expect(page.getByRole('heading', { name: '404 - Page Not Found' })).toBeVisible();
    await expect(header.siteName).toBeVisible();
  });
});
