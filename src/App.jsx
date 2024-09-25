import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import ProductListPage from "./Components/ProductListPage";
import CartPage from "./Components/CartPage";
import NotFound from "./Components/NotFound";
import CheckoutPage from "./Components/CheckoutPage";
import ProductPage from "./Components/ProductPage";
import LoginPage from "./Components/LoginPage";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import VendorDashboard from "./Components/VendorDashboard"

function AppContent() {
  const location = useLocation();
  const shouldShowHeaderFooter = location.pathname !== "/login"; // Conditionally show Header and Footer

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </CartProvider>
    </Router>
  );
}
export default App;
