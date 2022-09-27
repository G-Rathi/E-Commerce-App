import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductSingle from './pages/ProductSingle';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound'


function Routers() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/*" element={<PageNotFound />} />
      <Route path="/products" element={<ProductList />} />
      {/* <Route path="/products/:category" element={<ProductList />} /> */}
      <Route path="/products/:id" element={<ProductSingle />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Routers