import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SingleProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'

export default function SingleProduct(props) {
  const { image, title, price, _id } = props;

  return (
    <Link to={`/products/${_id}`} className="details-link">
          <Card>
              <Card.Img variant="top" src={image} className='card-image'/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
          <Card.Text>
          <FontAwesomeIcon className='mx-1 text-warning' icon={faCoins} />
            {price}
          </Card.Text>
            </Card.Body>
          </Card>
    </Link>
  );
}
