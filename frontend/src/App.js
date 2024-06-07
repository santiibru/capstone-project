import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import SignUp from './components/login/SignUp';
import Login from './components/login/Login';
import Home from './components/home/Home';
import MyNavbar from './components/navbar/Navbar';
import HiddenNavbar from './components/login/HiddenNavbar';
import "bootstrap/dist/css/bootstrap.min.css"
import Categories from './components/categories/Categories';
import AddProduct from './components/sell/AddProduct';
import Footer from './components/footer/footer';
import Products from './components/products/Products';
import Details from './components/products/Details';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Me from './components/myaccount/Me';
import Policy from './components/about/Policy';
import Shipping from './components/about/Shipping';
import NotFound from './components/about/notFound/NotFound';
import { CartProvider } from 'react-use-cart';

function App() {
  const [inputProduct, setInputProduct] = useState("");
  return (
    <BrowserRouter>
      <HiddenNavbar>
        <MyNavbar inputProduct={inputProduct} setInputProduct={setInputProduct} />
      </HiddenNavbar>
        <CartProvider>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/products" element={<Products inputProduct={inputProduct} />}></Route>
          <Route path="/products/:id" element={<Details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        <Route path="/sell" element={<AddProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
        </CartProvider>
        <Footer />
    </BrowserRouter>

  )
}

export default App
