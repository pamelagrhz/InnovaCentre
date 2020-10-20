import React from 'react';
import { Card } from 'react-bootstrap';


export default function Footer() {
  return (
    <div>
      <Card className="footer" >
        <Card.Body>
          <Card.Title>Innova Centre</Card.Title>
          <Card.Text>
            Si quieres saber más sobre nosotros?, encuentranos en nuestras redes sociales:
    </Card.Text>
          {/* links temporales */}
          <a href="https://www.facebook.com/innovacentre.mx/" target="_blank" rel="noopener noreferrer">Facebook </a>
          <a href="https://twitter.com/innovacenter_mx" target="_blank" rel="noopener noreferrer">Twitter </a>
          <a href="https://www.linkedin.com/company/innovacentre/" target="_blank" rel="noopener noreferrer">Linkedin </a>
          <a href="https://www.instagram.com/innovacentre/" target="_blank" rel="noopener noreferrer">Instagram </a>
          <a href="https://www.youtube.com/channel/UCC9WkXQZaImSIGTe0IyupOQ" target="_blank" rel="noopener noreferrer">Youtube </a>
        </Card.Body >
      </Card >
    </div >
  )
}