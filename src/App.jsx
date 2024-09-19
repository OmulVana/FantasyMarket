import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import ProductListPage from './Components/ProductListPage';
import CartPage from './Components/CartPage';
import NotFound from './Components/NotFound';
import CheckoutPage from './Components/CheckoutPage';
import ProductPage from './Components/ProductPage'
import { CartProvider } from './CartContext';

function App() {
  return (
    <>
      <Router>
        <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </CartProvider>
      </Router>
    </>
  )
}

export default App
