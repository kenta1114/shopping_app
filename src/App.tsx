import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderComplete } from './pages/OrderComplete';
import { useCartStore } from './store/useCartStore';

function App() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2 text-indigo-600">
                <Store size={24} />
                <span className="font-semibold text-lg">ショッピングアプリ</span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;