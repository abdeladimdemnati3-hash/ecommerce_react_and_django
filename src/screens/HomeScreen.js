import { Row, Col, Container } from 'react-bootstrap';
import Product from '../component/Product';
import React, { useState, useEffect } from 'react'
import axios from 'axios' 

function HomeScreen() {
   const [products, setProducts] = useState([])
   
   useEffect(() => {
     async function fetchProducts() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
     }
     fetchProducts()
     },[])



     
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Latest Products</h1>
      <Row className="g-4">
        {products.map(product => (   
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
          ))}
      </Row>
    </Container>
  )
}

export default HomeScreen