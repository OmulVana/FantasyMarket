import { test, expect } from '../fixtures.js';
import { USERS, INVALID_USER } from '../data/users.js';

test.describe('Authentication', () => {
  test('root URL redirects to the login page without header or footer', async ({ page, loginPage }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/login$/);
    await expect(loginPage.heading).toBeVisible();
    await expect(page.locator('header')).toHaveCount(0);
    await expect(page.locator('footer')).toHaveCount(0);
  });

  test('customer can log in and lands on the home page', async ({ page, loginPage, header, homePage }) => {
    await loginPage.goto();
    await loginPage.login(USERS.customer);

    await expect(page).toHaveURL(/\/home$/);
    await expect(homePage.welcomeHeading).toBeVisible();
    await expect(header.siteName).toBeVisible();
    await expect(header.vendorDashboardLink).toHaveCount(0);
  });

  test('vendor can log in and lands on the vendor dashboard', async ({ page, loginPage, header }) => {
    await loginPage.goto();
    await loginPage.login(USERS.vendor);

    await expect(page).toHaveURL(/\/vendor-dashboard$/);
    await expect(page.getByRole('heading', { name: 'Vendor Dashboard' })).toBeVisible();
    await expect(header.vendorDashboardLink).toBeVisible();
  });

  test('wrong password shows an error and stays on login', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login({ email: USERS.customer.email, password: 'not-the-password' });

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('unknown email shows an error and stays on login', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(INVALID_USER);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('empty form is blocked by browser validation', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.submitButton.click();

    await expect(page).toHaveURL(/\/login$/);
    await expect(loginPage.errorMessage).toHaveCount(0);
    expect(await loginPage.emailInput.evaluate((el) => el.validity.valueMissing)).toBe(true);
  });

  test('malformed email is blocked by browser validation', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login({ email: 'not-an-email', password: 'whatever' });

    await expect(page).toHaveURL(/\/login$/);
    expect(await loginPage.emailInput.evaluate((el) => el.validity.typeMismatch)).toBe(true);
  });
});
