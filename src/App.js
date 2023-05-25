import logo from './logo.svg';
import './style/App.css';


import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import NotFoundPage from './pages/Exceptions/NotFoundPage'
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import { useState } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

function App() {
  const [categories, setCategories] = useState();
  const [buyedItems, setBuyedItems] = useState(new Array());
  const [actualCost, setCost] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<HomePage buyItems={buyedItems} />} />
          <Route path="/cart" element={<Cart buyItems={buyedItems} costSetter={setCost} />} />
          <Route path="/checkout" element={<Checkout  buyItems={buyedItems} cost={actualCost} />} />
          <Route path="/shop" element={<Shop buyItems={buyedItems}/>}  />
          <Route path="/contact" element={<ContactUs  buyItems={buyedItems} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes >
      </Router>

    </div>
  );
}

export default App;
