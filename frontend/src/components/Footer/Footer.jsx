import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const copyRightYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>Ecommerce Shop &copy; {copyRightYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
