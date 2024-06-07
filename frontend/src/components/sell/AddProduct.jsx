import React from 'react'
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate()

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("products", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          image: image,
          description: description,
          price: price,
          category: category,
        }),
        headers: {
          "Content-type": "application/json"
        }
      });
      if (res.ok) {
        alert("Product added successfully")
        setTitle("");
        setImage("");
        setDescription("");
        setPrice("");
        setCategory("");
        navigate ("/products")
      } else {
        throw new Error("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className='mt-5 mb-5'>
      <h1>Add your product</h1>
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col} className='mt-4'>
					<Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
				</Form.Group>

				<Form.Group as={Col} className='mt-4'>
        <Form.Label className='form.file'>Add an image</Form.Label>
            <Form.Control
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
      </Form.Group>
			</Row>

			<Form.Group className="mb-3">
				<Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
			</Form.Group>

			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>Price</Form.Label>
            <Form.Control
              placeholder='$'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
						  <option>Sports</option>
              <option>Luxury</option>
              <option>Retro Games</option>
              <option>Tech</option>
              <option>Trading Cards</option>
              <option>Vintage</option>
              <option>Fashion & Lifestyle</option>
              <option>Various</option>
					</Form.Select>
				</Form.Group>
			</Row>
			<Button variant="primary" type="submit">
				Add Product
			</Button>
    </Form>
    </Container>
	);
}


