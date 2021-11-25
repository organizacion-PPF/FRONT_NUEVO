import React from "react";
import { useParams } from 'react-router';
import  { useEffect,useState } from 'react'
import 'animate.css';
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  FormGroup,
  Input,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/layout/ExamplesNavbar";
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

  //conectar materias con la BD

  const {proid} = useParams();
	//console.log(proid)

	const [stateProfesionales, setStateProfesionales] = useState(null)
	const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/"+proid;

  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
         // console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
      fetchDataProfesionales()
  },[proid])
	
	if(!stateProfesionales){
		return null;
	}





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
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="500" md="500">
              <h5 className="text-on-back">MATERIAS</h5>
                  <span className="text-white"></span>
              
              </Col>
              <div class="card" style={{width: "18rem"}}>
                  <img  alt="..."
                  className="img-fluid animate__animated animate__pulse"
                  src={require("assets/img/etherum.png").default}></img>
              <div class="card-body">
                 <h4 class="card-text">HISTORIA</h4>
              </div>
              </div>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
