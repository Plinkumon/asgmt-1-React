import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import Navbar1 from './components/Navbar';
import Carousel1 from './components/Carousel3';
import CardComponent from './components/Cards'
import FooterSection from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Array of vegetable data
  const vegetables = [
    {
      title: "Okra/Lady's Finger",
      description: "₹ 60/kg",
      image: "/Images/okra1.jpg"
    },
    {
      title: "Tomato",
      description: "₹ 90/kg",
      image: "/Images/tomato1.jpg"
    },
    {
      title: "Chinese Potato",
      description: "₹ 75/kg",
      image: "/Images/Chinese Potato.jpg"
    },
    {
      title: "Cucumber",
      description: "₹ 50/kg",
      image: "/Images/cucumber1.jpg"
    },
    {
      title: "Bitter Gourd",
      description: "₹ 50/kg",
      image: "/Images/Bitter Gourd.jpg"
    },
    {
      title: "Brinjal",
      description: "₹ 27/kg",
      image: "/Images/brinjal.jpg"
    },
    {
      title: "Ivy Gourd",
      description: "₹ 30/kg",
      image: "/Images/ivy gourd1.jfif"
    },
    {
      title: "Long Beans",
      description: "₹ 80/kg",
      image: "/Images/Long Beans.jpg"
    },
    {
      title: "Mango",
      description: "₹ 150/kg",
      image: "/Images/mango.jpg"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar1 />
        <Carousel1 />
        <h1 style={{ fontSize: '36px', color: 'green', textAlign: 'center', marginTop: '40px' }}>Deal of the week</h1>
      </header>

      {/* Vegetable Cards */}
      <Container>
        <Row>
          {vegetables.map((vegetable, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <CardComponent
                title={vegetable.title}
                description={vegetable.description}
                image={vegetable.image}
              />
            </Col>
          ))}
          
        </Row>
      </Container>
      <FooterSection />
    </div>
  );
  
}


export default App;

