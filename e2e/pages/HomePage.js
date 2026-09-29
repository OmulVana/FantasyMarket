import { ProductCard, allProductCards } from './ProductCard.js';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to the Fantasy Market' });
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.featuredHeading = page.getByRole('heading', { name: 'Featured Products' });
    this.productCards = allProductCards(page);
  }

  product(name) {
    return new ProductCard(this.page, name);
  }
}
