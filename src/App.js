import './App.css';
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Hobbies from './components/Hobbies';
import Cryptography from './components/Cryptography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
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
          <Col><a href="resume.pdf" download>Descargar CV</a></Col>
          <Col><a href="">Mi Llave Pública</a></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;