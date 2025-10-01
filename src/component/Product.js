import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  // Create a URL-friendly slug from the product name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
  };
  
  const productSlug = createSlug(product.name);
  const productUrl = `/product/${product._id}/${productSlug}`;
  
  return ( 
    <Card className='my-3 p-3 rounded shadow-sm h-100'>
      <Link to={productUrl} className="text-decoration-none">
        <Card.Img src={product.image} variant="top" className="product-img" />
        <Card.Body>
          <Card.Title as='div' className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='div' className="my-3">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
          </Card.Text>
          <Card.Text as="h3" className="product-price">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Product