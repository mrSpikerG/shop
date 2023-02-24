import logo from './logo.svg';
import './style/App.css';


import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import NotFoundPage from './pages/Exceptions/NotFoundPage'
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import { useState } from 'react';





function App() {
  const [categories, setCategories] = useState();
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes >
      </Router>
     
    </div>
  );
}

export default App;
