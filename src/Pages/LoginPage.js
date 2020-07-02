import React from "react";
import "./LoginPage.scss";
import "./GlobalStyles.css";

import { Button, Card, Form } from "react-bootstrap";

function LoginPage() {
  return (
    <div className="Container FlexCenterColumn Background">
      <div className="LoginForm">
        <div className="LoginTitleContainer">
          <h1>Login</h1>
        </div>
        <div className="TextBox">
          <input type="text" placeholder="Username" />
        </div>

        <div className="TextBox">
          <input type="password" placeholder="Password" />
        </div>

        <input type="submit" value="Login" class="LoginButton" />
      </div>
    </div>
  );
}

export default LoginPage;
