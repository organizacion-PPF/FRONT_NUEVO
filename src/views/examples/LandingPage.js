import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

import { useState, useEffect } from "react";
import 'assets/css/burbujas.css'
// reactstrap components
import {
  Button,
  Card,
  
  CardBody,
  
  CardTitle,

  Container,
 
  Row,
  Col,

} from "reactstrap";

// core components
import ExamplesNavbar from "components/layout/ExamplesNavbar";
import Footer from "components/Footer/Footer.js";
//import RegisterPage from "views/examples/RegisterPage";

import bigChartData from "variables/charts.js";
import { Link } from "react-router-dom";

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



export default function LandingPage(props) {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);

 /*  const url = "https://proyec-back.herokuapp.com/profesor/get";

const [stateUsuario, setStateUsuario] = useState([])

const fetchDataUsuario= async () => {
    try {
        const peticion = await fetch(url)
        const res = await peticion.json()
        console.log(res)
        setStateUsuario(res)
    } catch (error) {console.log(error)}
}

useEffect(() => {
  fetchDataUsuario()
},[])

if ( !stateUsuario) {

  return(null)
  
} */



  return (
    <>
      <ExamplesNavbar />
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
          
         
          <div className="content-center" >
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="500" md="500">
              <h5 className="text-on-back">BIENVENIDO</h5>
                  <span className="text-white"></span>
              
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
                    <Link  to="/materias-page">

                      <Button color="success" size="lg" >
                        BUSCA UN PROFESOR
                      </Button>
                      </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <Footer />

        {/* hacer burbuja */}

        <div className="burbuja">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        </div>
        <div className="burbuja2">
        <div className="burbuja2"></div>
        <div className="burbuja2"></div>
        <div className="burbuja2"></div>
        <div className="burbuja2"></div>
        </div>

      </div>
    </>
  );
}
