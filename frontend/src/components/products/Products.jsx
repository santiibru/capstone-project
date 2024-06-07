import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import SingleProduct from "./SingleProduct"

export default function Products({ inputProduct }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(products)

  let filters = ["Sports", "Luxury", "Retro Games", "Tech", "Vintage", "Trading Cards", "Fashion", "More"]
  
  useEffect(() => {
    getProducts()
  }, []);

    const getProducts = async () => {
      try {
        let res = await fetch("products")
        console.log(res)
          let data = await res.json()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    const handelFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
    useEffect(() => {
      filterProducts();
    }, [selectedFilters]);
  
    const filterProducts = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = products.filter((item) => item.category === selectedCategory);
          return temp;
        });
        setFilteredProducts(tempItems.flat());
      } else {
        setFilteredProducts([...products]);
      }
    }
  return (
    <Container className='mt-5'>
      <h1>Products</h1>
        {filters.map((category, i) => (
          <button
          onClick={() => handelFilterButtonClick(category)}
          className={`button ${
            selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={`filters-${i}`}
              >
            {category}
          </button>
        ))}
      <Row>
        {filteredProducts.filter(el =>
          el.title.toLowerCase().includes(inputProduct)).map((product, i) => {
            return(
            <Col
              className='my-4'
              lg={3}
              md={4}
              sm={6}
              key={`item-${i}`}
            >
              <SingleProduct key={product.title} {...product} />
            </Col>
        )}
      )}
      </Row>
    </Container>
  )
}
