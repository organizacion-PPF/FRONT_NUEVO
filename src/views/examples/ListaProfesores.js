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
import  { useEffect,useState } from 'react'




/* export default function ListaProfesores() {


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
                  Lista de Materias<br />
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
} */

const Home = (props) => {
        
  const [listatadoCompleto, setListadoCompleto] = useState ([])

  useEffect(() => {
      //console.log(props + ' Home')
      if(props.location.users){setListadoCompleto(props.location.users.profesores)}
      else{setListadoCompleto([])}

      
  }, [props])

 

  return (
      
  <div className="container-login100">
     
      <div className="container mt-2">
      
          <div className="row" id="data">
              {
                  listatadoCompleto.length > 0 ? listatadoCompleto.map(item => { 
                      
                      
                      return(
                          <div className="col-md-3 col-sm-6">
                              <div className="card card-block mx-3 mb-5">
                
                              
                              <h5 className="card-title mt-3 mb-3">{item.nombre_completo}</h5>
                              
                              </div>
                          </div>
                      )
                  }): <h1 style={{margin:'auto', color:'white'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
                      
              }      
          </div>    
      </div>
  </div>  

  )
}

export default Home;
