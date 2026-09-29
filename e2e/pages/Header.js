export class Header {
  constructor(page) {
    this.page = page;
    this.root = page.locator('header');
    this.siteName = this.root.getByRole('heading', { name: 'Fantasy Black Market' });
    this.logoLink = this.root.getByRole('link', { name: /Fantasy Black Market/ });
    this.homeLink = this.root.getByRole('link', { name: 'Home', exact: true });
    this.productsLink = this.root.getByRole('link', { name: 'Products', exact: true });
    this.cartLink = this.root.getByRole('link', { name: /^Cart\b/ });
    this.cartBadge = this.cartLink.locator('.cart-badge');
    this.vendorDashboardLink = this.root.getByRole('link', { name: 'Vendor Dashboard' });
  }
}
