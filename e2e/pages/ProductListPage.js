import { ProductCard, allProductCards } from './ProductCard.js';

export class ProductListPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Available Products' });
    this.productCards = allProductCards(page);
  }

  async goto() {
    await this.page.goto('/products');
  }

  product(name) {
    return new ProductCard(this.page, name);
  }
}
