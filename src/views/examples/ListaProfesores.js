import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Button,
  Row,
  Col,
  
} from "reactstrap";

import  { useEffect,useState } from 'react'


const Home = () => {
  const url = "https://proyec-back.herokuapp.com/profesor/get";
 
  const {materia}=useParams()

  const [stateProfesor, setStateProfesor] = useState([])
  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          console.log(res)
          setStateProfesor(res)
      } catch (error) {console.log(error)}
  }

  
  useEffect(() => {
    
      fetchDataProfesionales()
   
  },[])
  
  if ( !stateProfesor) {
  
    return(null)
    
  }
  


  return (
      
  <div className="container-login100">
     <Col lg="500" md="500">
              <h5 className="text-on-back">PROFESORES</h5>
                  <span className="text-white"></span>
              
              </Col>
              <div class="container mt-2">
        
        <div class="row" id="data">
        
            {

               stateProfesor.length > 0 ? stateProfesor.map(item => { 
                    
                   if (item.materia==materia) {
                     
                   
                    return(

      <div className="content-center">
        <Row className="row-grid justify-content-between align-items-center text-left">
         
          <div class="card mx-5" style={{width: "18rem", textAlign:"center"}}>
              <img  alt="..."
              className="img-fluid animate_animated animate_pulse"
              src={require("assets/img/etherum.png").default}></img>
          <div class="card-body">

             <h4 class="card-text">{item.userId.nombre_completo}</h4> 


             <p>Nivel: <b>{item.nivel}</b></p> 
            <p>Honorarios: <b>{item.honorarios}</b></p> 

            <Button color="success" size="lg" >
             contactar
              </Button>
                                
          </div>
          </div>
        </Row>
      </div>

    
                    )
                  }
                }): <h1 style={{margin:'auto', color:'white'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
                    
            }      
        </div>    
    </div>
</div>  

  )
}

export default Home;
