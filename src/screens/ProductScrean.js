import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../products';
import { Col, ListGroup, Row, Card, Button, Form, Container } from 'react-bootstrap';
import Rating from '../component/Rating';

import axios from 'axios';

function ProductScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Try fetching from API
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        // Fallback to local products array if API fails
        const localProduct = products.find((p) => p._id === id);
        setProduct(localProduct || null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <h2>Loading...</h2>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product Not Found</h2>
        <Button className="mt-3" onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button
        variant="light"
        className="my-3"
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </Button>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush" className="border rounded">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={'#f8e825'}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong> ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Brand:</strong> {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Category:</strong> {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <span className={product.countInStock > 0 ? 'text-success' : 'text-danger'}>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={1}
                        onChange={(e) => console.log('Selected quantity:', e.target.value)}
                      >
                        {[...Array(Math.min(product.countInStock, 10)).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="btn-block w-100"
                  variant="primary"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={() => navigate(`/cart/${id}?qty=1`)}
                >
                  {product.countInStock > 0 ? 'Add To Cart' : 'Out of Stock'}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
