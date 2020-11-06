import image from '../Assets/img/blue-logo.png'
import { Button } from 'react-bootstrap'
import Parallax from 'react-rellax'
import React from 'react'
import { ReactComponent as Wave1 } from '../Assets/svg/Wave1.svg'
import { ReactComponent as Wave2 } from '../Assets/svg/WaveTop.svg'
import WebPage from '../Assets/img/web-page.png'
import Earth from '../Assets/img/earth.png'
import Location from '../Assets/img/location.png'
import Airpods from '../Assets/img/airpod.png'


export default function Home() {
  return (
    <div>

      <div className="app1">
        <div className="left-side">
          <Parallax speed={7}>
            <p className="paragraph">Este es un texto de prueba</p>
          </Parallax>
          <Parallax speed={5}>
            <p className="paragraph">Este es un texto de prueba</p>
          </Parallax>
          <Parallax speed={3}>
            <p className="paragraph">Este es un texto de prueba</p>
          </Parallax>
          <Parallax speed={1}>
            <p className="paragraph">Este es un texto de prueba</p>
          </Parallax>
          <Button>Boton  </Button>
        </div>

        <div className="right-side">
          <Parallax speed={-6}>
            <img src={image} alt="" className="blue-logo" />
          </Parallax>
        </div>
      </div>
      <Wave2 />

      {/* Area morada */}
      <div className="web-page-section">
        <Parallax speed={-2}>
          <h2>Pagina web</h2>
          <h4>Una página web sirve como sistema de generación de confianza a través de los contenidos, artículos, fotografias. A ella deben dirigir las publicaciones de Facebook, los perfiles en redes sociales como Instagram, y del resto de redes sociales… Las campañas promocionadas en redes sociales.
          </h4>
          <h4>.kjlihnkvbjgv</h4>
        </Parallax>
        <div className="app1">
          <div className="left-side" />

          <div className="rigth-side">
            <Parallax speed={-4}>

              <img src={Airpods} alt="this slowpoke moves" width="100%" />
            </Parallax >
          </div>
        </div>

        <Parallax speed={-2}>
          <img className="image-center" src={WebPage} alt="" />
        </Parallax>
        <div className="app1">
          <span>
            <Parallax speed={2}>
              <img className=" rigth-side" src={Earth} alt="" />
            </Parallax>
          </span>
          <span>
            <Parallax speed={2}>
              <img className="left-side" src={Location} alt="" />
            </Parallax>
          </span>
        </div>
      </div>
      <Wave1 />
      <div>

        {/* Blanco */}
        <h2>Pagina web</h2>

        <h4>Una página web sirve como sistema de generación de confianza a través de los contenidos, artículos, fotografias. A ella deben dirigir las publicaciones de Facebook, los perfiles en redes sociales como Instagram, y del resto de redes sociales… Las campañas promocionadas en redes sociales.
          </h4>
        <h4>.kjlihnkvbjgv</h4>
        <br />
      </div>

      <img src="https://cdn.dribbble.com/users/451967/screenshots/7109556/media/fa3394883fab046220bfaa9e7c4e57e0.gif" alt="this slowpoke moves" width="100%" />

    </div >
  )
}

