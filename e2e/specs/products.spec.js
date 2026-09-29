import { test, expect } from '../fixtures.js';
import { PROMO_PRODUCTS, REGULAR_PRODUCTS } from '../data/products.js';

test.describe('Product browsing', () => {
  test.beforeEach(async ({ loginAs }) => {
    await loginAs('customer');
  });

  test('home page shows every promotional item with a promo badge', async ({ homePage }) => {
    await expect(homePage.featuredHeading).toBeVisible();
    await expect(homePage.productCards).toHaveCount(PROMO_PRODUCTS.length);

    for (const product of PROMO_PRODUCTS) {
      const card = homePage.product(product.name);
      await expect(card.title).toBeVisible();
      await expect(card.price).toContainText(`${product.price}`);
      await expect(card.category).toHaveText(product.category);
      await expect(card.promoBadge).toBeVisible();
    }
  });

  test('product list shows every regular item without promo badges', async ({ header, productListPage }) => {
    await header.productsLink.click();

    await expect(productListPage.productCards).toHaveCount(REGULAR_PRODUCTS.length);
    for (const product of REGULAR_PRODUCTS) {
      const card = productListPage.product(product.name);
      await expect(card.title).toBeVisible();
      await expect(card.price).toContainText(`${product.price}`);
      await expect(card.category).toHaveText(product.category);
      await expect(card.promoBadge).toHaveCount(0);
    }
  });

  test('clicking a product card opens its details page', async ({ page, header, productListPage, productDetailsPage }) => {
    const product = REGULAR_PRODUCTS[0];
    await header.productsLink.click();
    await productListPage.product(product.name).open();

    await expect(page).toHaveURL(new RegExp(`/products/${product.id}$`));
    await expect(productDetailsPage.title).toHaveText(product.name);
    await expect(productDetailsPage.price).toContainText(`${product.price} Gold`);
    await expect(productDetailsPage.category).toHaveText(product.category);
    await expect(productDetailsPage.description).toHaveText(product.description);
    await expect(productDetailsPage.image).toBeVisible();
    await expect(productDetailsPage.addToCartButton).toBeVisible();
  });

  test('promotional items open their details page from the home page', async ({ page, homePage, productDetailsPage }) => {
    const product = PROMO_PRODUCTS[2];
    await homePage.product(product.name).open();

    await expect(page).toHaveURL(new RegExp(`/products/${product.id}$`));
    await expect(productDetailsPage.title).toHaveText(product.name);
    await expect(productDetailsPage.price).toContainText(`${product.price} Gold`);
  });

  test('"Add to Cart" on a card does not open the product page', async ({ page, header, productListPage }) => {
    await header.productsLink.click();
    await productListPage.product(REGULAR_PRODUCTS[1].name).addToCart();

    await expect(page).toHaveURL(/\/products$/);
  });

  test('an unknown product id shows "Product not found"', async ({ productDetailsPage }) => {
    await productDetailsPage.goto('no-such-item');

    await expect(productDetailsPage.notFoundMessage).toBeVisible();
  });
});
