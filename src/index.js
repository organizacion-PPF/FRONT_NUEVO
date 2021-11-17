/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import HomePage from "views/examples/HomePage.js";
import LoginPage from "views/examples/LoginPage.js";
import Materias from "views/examples/Materias";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterProf from "views/examples/RegisterProf.js";
import ListaProfesores from "views/examples/ListaProfesores"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/home-page"
        render={(props) => <HomePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={(props) => <LoginPage {...props} />}
      />
       <Route
        path="/materias-page"
        render={(props) => <Materias {...props} />}
      />
       <Route
        path="/registerProf"
        render={(props) => <RegisterProf {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/lista-prof"
        render={(props) => <ListaProfesores {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);