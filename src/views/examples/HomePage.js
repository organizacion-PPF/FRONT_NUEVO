import React from "react";
// react plugin used to create charts

import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavLink,
  Container,
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
          <Col lg="7" md="8">
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
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Ranking</CardTitle>
                                <p />
                                <p className="card-category">de profesores</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="7" xs="6">
                              <div className="numbers">
                                <CardTitle tag="p">Teach
                                Coin</CardTitle>
                                <p />
                                <p className="card-category"></p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Premios</CardTitle>
                                <p />
                                <p className="card-category">todos los meses</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Todas </CardTitle>
                                <p />
                                <p className="card-category">las formas de pago</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      ENCONTRA TU <br />
                      PROFE IDEAL
                    </h1>
                 
                    <br />
                    <NavLink tag={Link} to="/materias-page">
                    <Button color="success" size="lg" >BUSCA UN PROFESOR</Button>
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
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
              <Col lg="10000" md="10000">
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
              <Col lg="4" md="8">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                /> 
              </Col>
            </Row>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
