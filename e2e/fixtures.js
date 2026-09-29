import { test as base, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage.js';
import { Header } from './pages/Header.js';
import { HomePage } from './pages/HomePage.js';
import { ProductListPage } from './pages/ProductListPage.js';
import { ProductDetailsPage } from './pages/ProductDetailsPage.js';
import { CartPage } from './pages/CartPage.js';
import { USERS } from './data/users.js';

// Keeps runs fast and offline-safe: the home page embeds a YouTube player.
const EXTERNAL_MEDIA = /youtube\.com|youtube-nocookie\.com|ytimg\.com|googlevideo\.com|doubleclick\.net/;

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route(EXTERNAL_MEDIA, (route) => route.abort());
    await use(page);
  },

  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  header: async ({ page }, use) => use(new Header(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  productListPage: async ({ page }, use) => use(new ProductListPage(page)),
  productDetailsPage: async ({ page }, use) => use(new ProductDetailsPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),

  // Auth and cart live only in React state, so a full page load (page.goto) logs
  // the user out and empties the cart. After this, navigate by clicking.
  loginAs: async ({ page, loginPage }, use) => {
    await use(async (role) => {
      const user = USERS[role];
      await loginPage.goto();
      await loginPage.login(user);
      await expect(page).toHaveURL(role === 'vendor' ? /\/vendor-dashboard$/ : /\/home$/);
    });
  },
});

export { expect };
