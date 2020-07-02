
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>NewPage</h1> } />
        
        
        <Route path="*" component={() => <h1>Pagina Não Encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;