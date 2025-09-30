import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { useNavigate } from 'react-router';

function Product({ product }) {
  const navigate = useNavigate();
  // console.log(product);
  return ( 
    <Card className='my-3 p-3 rounded '
        onClick={() => navigate(`/product/${product._id}`)}>
        <Card.Img src={product.image} />
      <Card.Body>
        <Card.Title as='div'>
         <strong>{product.name}</strong>
        </Card.Title>
        <Card.Title as='div'>
          <div className='my-3'>  ${product.price}</div>
        </Card.Title>
        <Card.Text as='div'>
          
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
        </Card.Text>   
        </Card.Body> 
        <Card.Text as="h3">
          ${product.price}
          </Card.Text>    
    </Card>
  )
}

export default Product