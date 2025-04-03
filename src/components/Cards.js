import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardComponent = ({ title, description, image }) => {
  return (
    
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" >ADD TO CART</Button>
    </Card.Body>
  </Card>
    
  );
}


export default CardComponent;