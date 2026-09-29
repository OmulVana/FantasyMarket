export class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    const info = page.locator('[class*="productInfoSection"]');
    this.title = info.getByRole('heading', { level: 1 });
    this.price = info.locator('[class*="productPrice"]');
    this.category = info.locator('[class*="productCategory"]');
    this.description = info.locator('[class*="productDescription"]');
    this.image = page.locator('[class*="productImageSection"] img');
    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
    this.notFoundMessage = page.getByText('Product not found');
  }

  async goto(productId) {
    await this.page.goto(`/products/${productId}`);
  }
}
