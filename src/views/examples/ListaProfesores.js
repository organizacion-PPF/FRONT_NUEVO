import React from "react";
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

import Footer from "components/Footer/Footer.js";
//import RegisterPage from "views/examples/RegisterPage";

import bigChartData from "variables/charts.js";







export default function ListaProfesores() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);

 

  return (
    <>
      
      <div className="wrapper">
        <div className="page-header">
          
         
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="10000" md="10000">
                <h1 className="text-white">
                  Lista de Profesores <br />
                  <span className="text-white"></span>
                </h1>
              </Col>
             
            </Row>
          </div>
        </div>
        
        
        <Footer />
      </div>
    </>
  );
}
