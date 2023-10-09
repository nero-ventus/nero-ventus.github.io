// Hobbies.js
import React from 'react';
import Card from 'react-bootstrap/Card';

function Hobbies() {
  return (
    <section>
      <h2>Hobbies</h2>
      <div>
        <Card>
            <Card.Img variant="top" src="1366_2000.jpeg" alt="Hobbie 1" />
            <Card.Body>
                <Card.Title>Videojuegos</Card.Title>
            </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
            <Card.Img variant="top" src="asta.jpeg" alt="Hobbie 2"  />
            <Card.Body>
                <Card.Title>Anime y Manga</Card.Title>
            </Card.Body>
        </Card>
      </div>
      <div>
      <Card>
            <Card.Img variant="top" src="PXL_20230819_035040306.jpg" alt="Hobbie 3"/>
            <Card.Body>
                <Card.Title>Gym</Card.Title>
            </Card.Body>
        </Card>
      </div>
      <div>
        {/* Agrega más imágenes y/o vídeos de hobbies */}
      </div>
    </section>
  );
}

export default Hobbies;
