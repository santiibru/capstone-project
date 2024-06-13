import React from 'react'
import { Button, Col, Form, Row, Container, Image, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css"


export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate()
  const [addProductBtn, setAddProductBtn] = useState(false);


  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    transformFile(file)
  };
  const transformFile = (file) => {
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
    } else {
      setImage("")
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("products", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          price: price,
          category: category,
          image: image
        }),
        headers: {
          "Content-type": "application/json"
        }
      });
      if (res.ok) {
        alert("Product added successfully")
        setTimeout(() => {
          setAddProductBtn(true)
        }, 2000)
        setTitle("");
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
      <h1 className='products-title'>Add your product</h1>
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3 align-items-center">
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
              accept="image/"
              onChange={handleProductImageUpload}
            />
        </Form.Group>
            {image ?
           <Image as={Col} src={image} className='image-preview mt-5'></Image>
           : null}
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
        <Button type='submit'>Add Product</Button>
      </Form>
      {addProductBtn &&
        <Alert variant='success'>
          <Alert.Heading>Product added succesfully</Alert.Heading>
          <Alert.Link href='/cart'>Checkout now</Alert.Link>
        </Alert>}
    </Container>
	);
}


