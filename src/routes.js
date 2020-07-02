import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/login" component={() => <LoginPage />} />

      <Route path="*" component={() => <h1>Pagina Não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
