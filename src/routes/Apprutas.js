import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {useEffect, useState} from 'react'

import HomePage from "views/examples/HomePage.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";

import LoginPage from "views/examples/LoginPage.js";
import Materias from "views/examples/Materias";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterProf from "views/examples/RegisterProf.js";
import ListaProfesores from "views/examples/ListaProfesores"
import Navbar from '../components/layout/IndexNavbar';


function Apprutas () {

  const url = "https://proyec-back.herokuapp.com/profesor/get";

  const [stateProfesionales, setStateProfesionales] = useState([])

  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          //console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
      fetchDataProfesionales()
  },[])

  return (
    <div>
       <BrowserRouter>
    <Switch>
    <Route
        exact path="/home-page" component={HomePage}
      />
      <Route
        exact path="/landing-page" component={LandingPage}
      />
      
      <Route
        exact path="/register-page" component={RegisterPage}
      />
      <Route
       exact path="/login-page" component={LoginPage}
      />
       <Route
       exact path="/materias-page" component={Materias}
      />
       <Route
       exact path="/registerProf" component={RegisterProf}
      />
      <Route
       exact path="/profile-page" component={ProfilePage}
      />
      <Route
       exact path="/lista-prof/:materia" component={ListaProfesores}
      />
      <Redirect from="/" to="/home-page" />
    </Switch>
  </BrowserRouter>,

  
     
      

    </div>
  )
}

export default Apprutas
