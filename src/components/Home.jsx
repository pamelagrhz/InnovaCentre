
import { Button, Carousel } from 'react-bootstrap'
import Parallax from 'react-rellax'
import React from 'react'
import Desk from '../Assets/img/desk.png'
import Logo from '../Assets/img/blue-logo.png'
import Build from '../Assets/img/build.jpg'
import IPad from '../Assets/img/ipad.jpg'
import Desktop from '../Assets/img/desk.jpg'
import Stars from './StyleComponent/Stars';
import { faBolt, faKeyboard, faRocket, faDribble, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import WebPage from '../Assets/img/wbpg.png'
export default function Home() {
  return (
    <div>
      <Stars></Stars>

      <div className="bg-card divided-color">
        Nuestros servicios
  <Parallax speed={2}>
          <div className="app1">
            {/* Servicios */}
            <div className="med-size">
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
            <div className="med-size">
              <Parallax speed={0}>
                <img src={Desk} alt="" className="" />
              </Parallax>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="color-ch ">
        <div className="app1">
          <div className="med-size">
            <img src={WebPage} alt="imagen" /></div>
          <div className="med-size">Pagina web basica
    <h6>A solo:</h6>
            <h4>$XX.XX MXN</h4>
            <Button variant="warning" size="lg">Más Información</Button></div>
        </div>
      </div>
      <Parallax speed={0}>
        <div className="bg-card bg-red">
          <div className="app1">
            <div className="med-size">
              <img src={WebPage} alt="imagen" /></div>
            <div className="med-size">Pagina web basica
    <h6>A solo:</h6>
              <h4>$XX.XX MXN</h4>
              <Button variant="warning" size="lg">Más Información</Button></div>
          </div>
        </div>
      </Parallax>
      <div className="app1">
        {/* Servicios */}



        <div className="med-size">
          <Parallax speed={0}>
            <img src={Desk} alt="" className="blue-logo" />
          </Parallax>
        </div>
        <div className="med-size">
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

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Desktop}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={IPad}
            alt="Third slide"
          />
          <Carousel.Caption className="white-shadow ">
            <h3 >Quiero organizar mi propio evento</h3>
            <p>Si lo que buscas es ser un organizador de eventos, contactate con nosotros y te guiaremos en el proceso</p>
            <Button>Contactar</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Build}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* Bolt */}
      <div className="bolt">
        <div class="ct" id="t1">
          <div class="ct" id="t2">
            <div class="ct" id="t3">
              <div class="ct" id="t4">
                <div class="ct" id="t5">
                  <ul id="menu">
                    <a href="#t1"><li className="icon" id="uno">Innova Centre</li></a>
                    <a href="#t2"><li className="icon" id="dos">Misión</li></a>
                    <a href="#t3"><li className="icon" id="tres"></li>Vision</a>
                    <a href="#t4"><li className="icon" id="cuatro">Servicios</li></a>
                    <a href="#t5"><li className="icon" id="cinco">otro</li></a>
                  </ul>
                  <div class="page" id="p1">
                    <section class="icon fa faBolt">
                      <span><img src={Logo} className="blue-logo" alt="" /> </span>
                      <span class="hint">Fundada en 2016, somos una agencia de servicios digitales. <br /> Analizamos e implementamos la tecnología que se adapte a tus necesidades</span>
                    </section>  </div>
                  <div class="page" id="p2">
                    <section class="icon fa faKeyboard"><span class="hint">Implementamos herramientas de ultima generación que permiten la adopción tecnológica de forma intuitiva,
            cumpliendo estandares de calidad y un gran servicio al cliente, con la finalidad de contribuir al desarrollo e impulso de las empresas</span></section>
                  </div>
                  <div class="page" id="p3">
                    <section class="icon fa faRocket"><span class="title">Visión</span><span class="hint">Ser la compañía líder en innovación de servicios digitales que satisfagan las necesidades de los clientes​</span></section>
                  </div>
                  <div class="page" id="p4">
                    <section class="icon fa faDribbble">
                      <span class="title">Dribbble</span>
                      <p class="hint">
                        Implementación de ecommerce, Diseño gráfico, Marketing Digital, Publicidad
                        , Community Manager, Consultoría de procesos​Desarrollo de páginas web, Apps de realidad aumentada, Blogs
              </p>
                    </section>
                  </div>
                  <div class="page" id="p5">
                    <section class="icon fa faPlusCircle">
                      <span class="title">Eventos</span>
                      <p class="hint">
                        Here are the news options for organizers</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

