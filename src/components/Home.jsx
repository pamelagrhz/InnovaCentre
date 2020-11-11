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
                <h3>¿Que serviciospuedes encontrar en InnovaCentre?</h3>
                <h4 className="">Marketing </h4>
              </Parallax>
              <Parallax speed={2}>
                <h4 className="">Procesos </h4>
              </Parallax>
              <Parallax speed={1}>
                <h4 className="">Digitales </h4>
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

      <div className="app1">
        {/* Servicios */}



        <div className="right-side">
          <Parallax speed={0}>
            <img src={Desk} alt="" className="blue-logo" />
          </Parallax>
        </div>
        <div className="left-side">
          <Parallax speed={0}>
            <p className=""> Implementación de ecommerce  </p>
          </Parallax>
          <Parallax speed={0}>
            <p className="">Diseño gráfico  ​</p>
          </Parallax>
          <Parallax speed={0}>
            <p className="">Marketing Digital</p>
          </Parallax>
          <Parallax speed={0}>
            <p className="">Publicidad </p>
          </Parallax>
          <Parallax speed={0}>
            <p className="">Community Manager </p>
          </Parallax>
          <br />
          <Button variant="danger" size="lg">Boton  </Button>
        </div>
      </div>

    </div >
  )
}

