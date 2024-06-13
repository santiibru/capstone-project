import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className='my-5'>
      <h1 className='products-title'>Welcome to Grön</h1>
      <h5 className='fst-italic'>Are you looking for the last sticker card to complete your album?</h5>
      <h5 className='fst-italic'>Your old game table is boring and want a new one? </h5>
      <h5 className='fst-italic'>Are you a collectionist?</h5>
      <h5 className='fst-italic'>Don't use anymore your bike?</h5>
      <span className='fs-3 products-title'>Grön is your site</span>
      <p>Our site is the best place to trade your old stuff with new one. Doesn't matter what are you looking for, someone could have it!</p>
      <p>Gives a new life to your products, accumulate Grön points and find the perfect article for you</p>
      <p>Our site is free, secure and obviously... Green!</p>
      <div>
        <Link to="/about">
          <button className='btn btn-outline-primary'>How it works?</button>
        </Link>
        <Link to="/products">
          <button className='btn btn-outline-primary ms-3'>Go shopping!</button>
        </Link>
        <Link to="categories">
          <button className='btn btn-outline-primary ms-3'>Our Categories</button>
        </Link>
        <Link to="/sell">
          <button className='btn btn-outline-primary ms-3'>Sell your product</button>
        </Link>
      </div>
    </Container>
  )
}
