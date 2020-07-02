import React from "react";
import "./LoginPage.scss";

import { Button, Card, Form } from "react-bootstrap";

function LoginPage() {
  return (
    <div className="LoginScreen">
      <div className="LoginForm">
        <div>
          <h1>Login</h1>
        </div>
        <div className="LoginInput">
          <input type="text" placeholder="Username" />
        </div>

        <div className="LoginInput">
          <input type="password" placeholder="Password" />
        </div>

        <input type="submit" value="Login" class="LoginButton" />
      </div>
    </div>
  );
}

export default LoginPage;
