import image from '../Assets/img/blue-logo.png'
import { Button } from 'react-bootstrap'
import Parallax from 'react-rellax'
import React from 'react'
import Desk from '../Assets/img/desk.png'


export default function Home() {
  return (
    <div>

      <div className="bg-card divided-color">
        Nuestros servicios
        <Parallax speed={2}>
          <div className="app1">
            {/* Servicios */}
            <div className="left-side">

              <Parallax speed={5}>
                <p className="">Marketing </p>
              </Parallax>
              <Parallax speed={2}>
                <p className="">Procesos </p>
              </Parallax>
              <Parallax speed={1}>
                <p className="">Digitales </p>
              </Parallax>
              <br />
              <Button variant="danger" size="lg">Boton  </Button>
            </div>

            <div className="right-side">
              <Parallax speed={0}>
                <img src={Desk} alt="" className="blue-logo" />
              </Parallax>
            </div>
          </div>
        </Parallax>
      </div>
      <br />
      <div className="bg-card bg-purple">
        Digital
      </div>
    </div >
  )
}

