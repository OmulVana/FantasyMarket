export class LoginPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Login' });
    // Labels in the app are not linked to their inputs, so target by input type.
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Invalid email or password');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login({ email, password }) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
