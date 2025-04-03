import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4} className="text-center text-md-left mb-4">
            <h5>About Us</h5>
            <p>
            We are committed to delivering the best services and products to our customers. Quality and satisfaction are our top priorities.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="text-center text-md-left mb-4">
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Button variant="link" href="#">Home</Button></li>
              <li><Button variant="link" href="#">Services</Button></li>
              <li><Button variant="link" href="#">About Us</Button></li>
              <li><Button variant="link" href="#">Contact</Button></li>
              <li><Button variant="link" href="#">Blog</Button></li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col md={4} className="text-center text-md-left mb-4">
            <h5>Contact Us</h5>
            <p>3300 Musgrave Street,Kakkanad, Kochi</p>
            <p>Email: organicfruitsandvegetables@yahoo.com</p>
            <p>Phone: +91 974 567 890</p>
          </Col>
        </Row>

        {/* Social Media Icons */}
        <Row className="mt-3">
          <Col className="text-center">
            <h5>Follow Us</h5>
            <div style={{ fontSize: '24px' }}>
              <Button variant="link" href="https://www.facebook.com" target="_blank" style={{ color: '#3b5998', fontSize: '30px' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </Button>
              <Button variant="link" href="https://twitter.com" target="_blank" style={{ color: '#00acee', fontSize: '30px' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </Button>
              <Button variant="link" href="https://www.instagram.com" target="_blank" style={{ color: '#E4405F', fontSize: '30px' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
              <Button variant="link" href="https://www.linkedin.com" target="_blank" style={{ color: '#0e76a8', fontSize: '30px' }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
