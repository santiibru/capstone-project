import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"
export default function Cart({ cartProducts, handleAddProduct, handleRemoveProduct, handleClearCart }) {

  const totalPrice = cartProducts.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <Container className='cart-items my-4'>
      <div className='d-flex justify-content-between'>
        <h1 className='cart-items-title'>Cart Items</h1>
        {cartProducts.length >= 1 && (
        <button className='btn btn-outline-danger cart-items-clear' onClick={handleClearCart}>Clear Cart</button>
        )}
      </div>
      {cartProducts.length === 0 && (
        <h4 className='cart-items-empty'>No items added</h4>
      )}
         {cartProducts.map((item) => (
          <Col key={item._id} className='cart-item-list d-flex align-items-center justify-content-between mb-3'>
            <img src={item.image}
              alt={item.image}
              className='cart-items-image'
            />
            <p>{item.title}</p>
            <button className='btn btn-danger' onClick={() => handleRemoveProduct(item)}>-</button>
            <p>{item.quantity}</p>
            <button className='btn btn-primary' onClick={() => handleAddProduct(item)}>+</button>
            <p>Grön Points
              <FontAwesomeIcon className='mx-1 text-warning' icon={faCoins} />{item.price}</p>
           </Col>
         ))}
      <Col>
        {cartProducts.length !== 0 && (
        <div className='d-flex align-items-center justify-content-between cart-items-total'>
          <p className='fs-4 pt-3'>Total Grön Points
            <FontAwesomeIcon className='mx-1 text-warning' icon={faCoins} />{totalPrice}</p>
          <button className='btn btn-outline-primary fs-4'>Buy Now</button>
        </div>
        )}
      </Col>
    </Container>



  )
}
