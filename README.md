# FantasyMarket
Fantasy Market E-commerce Platform
Welcome to the Fantasy Market, a dynamic e-commerce platform where users can browse, explore, and purchase magical items. This project is a full-stack web application designed to provide a seamless shopping experience for both regular and promotional items with key features including a shopping cart, product pages, and a checkout system.

Key Features

1. Product Listing and Details
Browse through various magical items, including weapons, potions, wands, and armor.
Dynamic product pages with detailed information such as images, descriptions, and prices.
Promotional items section with special styles and features.
2. Shopping Cart
Add items to the cart from any page, including promotional and regular items.
Cart displays a list of added items with their images, descriptions, and prices.
Easily proceed to checkout with a button that triggers the checkout process.
3. Dynamic Styles
The Add to Cart button dynamically changes styles based on the type of product (promotional vs. regular items).
Responsive design for different screen sizes, ensuring an optimal experience across devices.
4. Routing and Navigation
Smooth navigation between pages using React Router.
Product cards are clickable and lead to their respective product details page.
Technologies Used
React.js: Frontend library for building the user interface and managing components.
React Router: Handles navigation and routing between different pages.
CSS Modules: Provides scoped and modular CSS for component styling.
Context API: Used for state management of the shopping cart system.
React Player: Embeds videos on the home page for an immersive experience.

  
How It Works

When a user clicks the Add to Cart button on a product, the item is dynamically added to the cart.
Cart data is managed globally using the Context API, allowing the cart to persist as the user navigates across pages.
The ProductPage component dynamically loads the corresponding product’s data from the MAGIC_ITEMS and PROMOTION_ITEMS arrays based on the product's ID.

Future Enhancements
Backend Integration: Connect with a backend API for dynamic data fetching and persistence.
User Authentication: Allow users to create accounts, login, and manage their orders.
Payment Gateway: Integrate a secure payment system for completing purchases.
