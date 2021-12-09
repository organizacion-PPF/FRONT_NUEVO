import React from 'react'


import {
    Button,
  } from "reactstrap";

  const logaut = () => {

localStorage.getItem('LoginPage');
window.location.href="/registerProf"

}


export const BotonRegisProf = () => {

    return(

        <Button color="success" onClick = {logaut} size="lg" >
         REGISTRATE 
         COMO 
         PROFESOR
        </Button>
        
    )
    

}