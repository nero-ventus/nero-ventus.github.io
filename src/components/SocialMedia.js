// SocialMedia.js
import React from 'react';
import Button from 'react-bootstrap/Button';


function SocialMedia() {
  return (
    <section>
      <h2>Redes Sociales</h2>
      <div>
        <Button href="https://www.linkedin.com/in/kevinsrangellozada/" target="_blank" rel="noopener noreferrer">
            Linkedin
        </Button>
        <p> </p>
        <Button href="https://github.com/nero-ventus" target="_blank" rel="noopener noreferrer">
          Github
        </Button>
      </div>
      {/* Agrega más botones de redes sociales si es necesario */}
    </section>
  );
}

export default SocialMedia;
