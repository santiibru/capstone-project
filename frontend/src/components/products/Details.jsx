import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./SingleProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'

export default function Details({ handleAddProduct}) {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        let response = await fetch("/products/" + id)
        console.log(response)
        if (response.ok) {
          let product = await response.json()
          setDetails(product)
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
    }
    getProductDetails();
    if (details) {
      setDetails(details);
    } else {
      navigate("/404")
    }
  }, [])
    return (
      <Container className='my-5'>
        <Row>
          <Col lg={7} md={12}>
            <Image className='details-image' src={details.image}></Image>
          </Col>
          <Col lg={5} md={12}>
            <h1>{details.title}</h1>
            <h3>Grön Points 
            <FontAwesomeIcon className='mx-1 text-warning' icon={faCoins} />
              {details.price}</h3>
            <p>{details.description}</p>
            <Button className='btn btn-success' onClick={()=> handleAddProduct(details)}>Add to cart</Button>
            <Link to="/products" className='btn btn-primary ms-3'>Back</Link>
          </Col>
        </Row>
      </Container>
  )
}
