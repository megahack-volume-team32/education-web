import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from '../src/Pages/LoginPage'
import HomePage from '../src/Pages/HomePage'
import DashBordPage from "./Pages/DashBordPage";

const Routes = () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/login" component={() => <LoginPage />} />
      <Route path="/dashbord" component={() => <DashBordPage />} />


      <Route path="*" component={() => <h1>Pagina Não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;