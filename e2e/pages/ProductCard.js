// The app uses CSS Modules, so class names are hashed (e.g. "_productCard_x1y2_1");
// matching on the readable part keeps selectors stable without touching app code.
export const PRODUCT_CARD_SELECTOR = '[class*="productCard"]';

export class ProductCard {
  constructor(page, name) {
    this.page = page;
    this.root = page
      .locator(PRODUCT_CARD_SELECTOR)
      .filter({ has: page.getByRole('heading', { name, exact: true }) });
    this.title = this.root.getByRole('heading', { name, exact: true });
    this.price = this.root.locator('[class*="productPrice"]');
    this.category = this.root.locator('[class*="productCategory"]');
    this.promoBadge = this.root.getByRole('img', { name: 'Promo' });
    this.addToCartButton = this.root.getByRole('button', { name: 'Add to Cart' });
  }

  async open() {
    await this.title.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

export function allProductCards(page) {
  return page.locator(PRODUCT_CARD_SELECTOR);
}
