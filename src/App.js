import './App.css';
import React, {useEffect} from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Hobbies from './components/Hobbies';
import Cryptography from './components/Cryptography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  useEffect(() => {
    document.title = "Rangel Kevin - Web Page";
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col><Education /></Col>
          <Col><Contact /></Col>
          <Col><SocialMedia /></Col>
        </Row>
        <Row>
          <Col><Hobbies /></Col>
          <Col><Cryptography /></Col>
        </Row>
        <Row>
          <Col><Button href="Resume-2023.pdf" download>Descargar CV</Button></Col>
          <Col><Button href="publicRSA.txt" download>RSA Llave Pública</Button></Col>
          <Col><Button href="publicDH.txt" download>DH Llave Pública</Button></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;