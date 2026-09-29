import { test, expect } from '../fixtures.js';
import { PROMO_PRODUCTS, REGULAR_PRODUCTS } from '../data/products.js';

test.describe('Shopping cart', () => {
  test.beforeEach(async ({ loginAs }) => {
    await loginAs('customer');
  });

  test('cart starts empty with no badge in the header', async ({ header, cartPage }) => {
    await expect(header.cartBadge).toHaveCount(0);

    await header.cartLink.click();
    await expect(cartPage.emptyMessage).toBeVisible();
    await expect(cartPage.items).toHaveCount(0);
    await expect(cartPage.checkoutButton).toHaveCount(0);
  });

  test('items added from the home page, product list and product page all land in the cart', async ({
    header,
    homePage,
    productListPage,
    productDetailsPage,
    cartPage,
  }) => {
    const fromHome = PROMO_PRODUCTS[0];
    const fromList = REGULAR_PRODUCTS[1];
    const fromDetails = REGULAR_PRODUCTS[2];

    await homePage.product(fromHome.name).addToCart();
    await expect(header.cartBadge).toHaveText('1');

    await header.productsLink.click();
    await productListPage.product(fromList.name).addToCart();
    await expect(header.cartBadge).toHaveText('2');

    await productListPage.product(fromDetails.name).open();
    await expect(productDetailsPage.title).toHaveText(fromDetails.name);
    await productDetailsPage.addToCartButton.click();
    await expect(header.cartBadge).toHaveText('3');

    await header.cartLink.click();
    await expect(cartPage.items).toHaveCount(3);
    for (const product of [fromHome, fromList, fromDetails]) {
      const item = cartPage.item(product.name);
      await expect(item.root).toBeVisible();
      await expect(item.image).toBeVisible();
      await expect(item.price).toHaveText(`${product.price} Gold`);
    }
  });

  test('cart contents survive navigating around the site', async ({ header, homePage, cartPage }) => {
    const product = PROMO_PRODUCTS[1];
    await homePage.product(product.name).addToCart();

    await header.productsLink.click();
    await header.homeLink.click();
    await header.cartLink.click();

    await expect(cartPage.items).toHaveCount(1);
    await expect(cartPage.item(product.name).root).toBeVisible();
  });

  test('checkout button takes the user to the checkout page', async ({ page, header, homePage, cartPage }) => {
    await homePage.product(PROMO_PRODUCTS[3].name).addToCart();
    await header.cartLink.click();
    await cartPage.checkoutButton.click();

    await expect(page).toHaveURL(/\/checkout$/);
    await expect(page.getByRole('heading', { name: 'Checkout Page' })).toBeVisible();
  });
});
