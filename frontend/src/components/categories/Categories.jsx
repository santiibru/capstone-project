import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sports from "../../assets/Sports.jpeg"
import luxury from "../../assets/luxury.png"
import retrogames from "../../assets/retrogames.jpeg"
import tech from "../../assets/tech.jpeg"
import vintage from "../../assets/vintage.jpeg"
import tradingcards from "../../assets/tradingcards.jpeg"
import clothes from "../../assets/clothes.webp"
import more from "../../assets/more.jpeg"
import "./Categories.css"

export default function Categories() {
  return (
    <Container className='mt-5'>
        <h1 className='categories-title'>Categories</h1>
      <Row>
        <Col lg={3} md={4} sm={6} className="mb-5" >
        <Link to={`/products/Sports`}>
          <Card className="card-categories">
            <Card.Img variant="top" src={Sports} className='card-img'/>
            <Card.Body className='body-categories'>
              <Card.Title className="categories-card-title">Sports</Card.Title>
            </Card.Body>
          </Card>
        </Link>
          </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={tech} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Tech</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}  className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={luxury} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Luxury</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={retrogames} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Retro Games</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={vintage} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Vintage</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={clothes} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Fashion & Lifestyle</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={tradingcards} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Trading Cards</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-5">
          <Card className="card-categories">
            <Card.Img variant="top" src={more} className='card-img'/>
            <Card.Body>
              <Card.Title className="categories-card-title">Various</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
