import React from "react";
// react plugin used to create charts
import 'assets/css/homePage.css'
import { Link } from "react-router-dom";
// reactstrap components
import {
 
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components

import HomeNavbar from "components/layout/HomeNavbar";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <HomeNavbar />
    
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
            
            <h5 className="text-on-back">BIENVENIDO</h5>
           
          </Col>
          <Col lg="7" md="8" style={{display:"block",margin:"auto"}}>
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                /> 
              </Col>
            </Row>
          </div>
        </div>
       
        <section className="section section-lg">
         
       
          <div className="page-header">
        
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="5" md="2">
                <h1 className="text-white">
                        ¿Que es ?<br />
                  <span className="text-white">Les´t Teach</span>
                </h1>
                <p className="text-white mb-3">
                   Somos la plataforma que conecta alumnos con profes particulares.
                </p>
                <h4>
                ✅ Registrate gratis
                </h4>
                <h4>
                ✅ Buscá eso que te gustaría aprender
                </h4>
                <h4>
                ✅ ¡Conectá con expertos!
                </h4>
                <p className="text-white mb-3">
                Encontrá clases, cursos y talleres de todas las temáticas. Desde apoyo estudiantil hasta arte, música, deportes, idiomas, hobbies, tecnología y capacitación profesional.
                ¡Aprovechá tu tiempo con las actividades que te gusten, encontrando hobbies y hasta sumando nuevas habilidades!
                </p>
               
              </Col>

              <Col lg="5" md="2">
                <h1 className="text-white">
                Enseñá<br />
                  <span className="text-white">eso que te apasiona</span>
                </h1>
                <p>
                 
               ¿Sos experto tocando un instrumento, bilingüe en algún idioma, estudiante avanzado o profesional?

               Publicá tus clases y sumate a nuestra comunidad de profesores. Inscribirte es gratis y vos ponés el precio
               de tus clases. Manejá tus horarios como quieras desde el calendario en tiempo real y conseguí nuevos alumnos.
                </p>
              </Col>



              <Col lg="6" md="7">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            </Row>
          </div>
        </div>
        
        </section>
        <Footer />

        <div className="texto">
        <div className="texto">
        <h1 className="enseña">ENSEÑA</h1>
        </div>
        <div className="texto">
        <h1 className="enseña">ENSEÑA</h1>
        </div>

        <div className="texto">
        <h1 className="enseña">ENSEÑA</h1>
        </div>
        <div className="texto">
        <h1 className="enseña">ENSEÑA</h1>
        </div>
        
        </div>
        <div className="texto2">
        <div className="texto2"> <h1 className="aprende">APRENDE</h1></div>
        <div className="texto2"> <h1 className="aprende">APRENDE</h1></div>
        <div className="texto2"> <h1 className="aprende">APRENDE</h1></div>
        <div className="texto2"> <h1 className="aprende">APRENDE</h1></div>
        
        </div>
      </div>
    </>
  );
}
