import React from "react";
import { useParams } from 'react-router';
import  { useEffect,useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import 'assets/css/tarjetas.css'
import {
  Button,
 
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";



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

const url = "https://proyec-back.herokuapp.com/materias/get";

const [stateMaterias, setStateMaterias] = useState([])

const fetchDataProfesionales = async () => {
    try {
        const peticion = await fetch(url)
        const res = await peticion.json()
        //console.log(res)
        setStateMaterias(res)
    } catch (error) {console.log(error)}
}

useEffect(() => {
    fetchDataProfesionales()
},[])

if ( !stateMaterias) {

  return(null)
  
}

  return (
        
    <div class="container-login100" >
       <Col lg="500" md="500">
              <h5 className="text-on-back">MATERIAS</h5>
                  <span className="text-white"></span>
              </Col>

        <div class="container mt-2">
            <div class="row" id="data">

                {
                   stateMaterias.length > 0 ? stateMaterias.map(item => {    
                        return(
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
             
              <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
                  <img  alt="..."
                  className="img-fluid animate_animated animate_pulse"
                  src={require("assets/img/etherum.png").default}></img>
              <div class="card-body">

              <Link  to={`/lista-prof/${item.materia}`}>

             <Button color="success" size="lg" >
             {item.materia}
              </Button>
              </Link>
              </div>
              </div>
            </Row>
          </div>

                        )
                    }): <h1 style={{margin:'auto', color:'white'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
                        
                }      
            </div>    
        </div>
    </div>  

    )



  


}
