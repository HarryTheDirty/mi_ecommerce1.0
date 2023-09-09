import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import ProductDetail from './components/ProductDetail'; 
import products from './data/products';
import RegistrationForm from './components/RegistrationForm'; 
import LoginForm from './components/LoginForm'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/registro" element={<RegistrationForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
