import React from 'react';
import logo from "../../assets/logo.png";
import { Nav, Navbar, Form, Container, Image} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function MyNavbar({ inputProduct, setInputProduct, cartProducts }) {
  return (
  <Navbar expand="lg" className="superNav border-bottom py-1 bg-white d-flex">
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Navbar.Brand href="/home">
          <Image className='logo-navbar' alt='logo' src={logo}></Image>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link mx-2 text-uppercase" aria-current="page">Home </Link>
          <Link to="/categories" className="nav-link mx-2 text-uppercase">Categories</Link>
          <Link to="/products" className="nav-link mx-2 text-uppercase">Products</Link>
          <Link to="/sell" className="nav-link mx-2 text-uppercase">Sell</Link>
          <Link to="/about" className="nav-link mx-2 text-uppercase">How it Works</Link>
        </Nav>
        <Nav className="me-auto">
          <Form.Group>
            <Form.Control
              style={{width:"300px"}}
              type="search"
              placeholder="Find a product..."
              value={inputProduct}
              onChange={(e) => setInputProduct(e.target.value)}
            />
          </Form.Group>    
        </Nav>
        <Nav className="ms-auto align-items-center">
            <Link to="/cart" className="nav-link mx-2 text-uppercase">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className='cart-counter-navbar'>
                {cartProducts.length === 0 ? "" : cartProducts.length}
              </span>
            </Link>
          <Link to="/me" className="nav-link mx-2 text-uppercase">My Account</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)
};