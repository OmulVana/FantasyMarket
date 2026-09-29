export class CartPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Shopping Cart' });
    this.emptyMessage = page.getByText('Your cart is empty.');
    this.items = page.locator('[class*="cartItem"]');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  item(name) {
    const root = this.items.filter({ has: this.page.getByRole('heading', { name, exact: true }) });
    return {
      root,
      image: root.getByRole('img', { name }),
      price: root.locator('[class*="price"]'),
    };
  }
}
