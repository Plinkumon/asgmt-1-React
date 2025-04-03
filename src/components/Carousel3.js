import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" src="/Images/Carousel1img.jpeg" alt='First'className="d-block w-100"/>
        <Carousel.Caption style={{fontSize:'20px',color:'black'}}>
          <h3>Feel the freshness</h3>
          <p>Have better flavor and a more appealing texture.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Second slide" src="/Images/carousel2.jpeg" alt='Second'className="d-block w-100"/>
        <Carousel.Caption >
          <h3>Taste better</h3>
          <p>Organic fruits and vegetables have a fresher taste, which can enhance overall eating
          experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Third slide" src="/Images/carosel3.jpeg" alt='Third' className="d-block w-100"/>
        <Carousel.Caption>
          <h3>Seasonal Eating</h3>
          <p>
          Choosing fresh, seasonal foods can lead to a more varied and nutritionally balanced diet.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;