import React from 'react';
import "./LoginPage.css";
import { Link } from "react-router-dom";
import {Row,Col,Form,Button } from 'react-bootstrap'
function LoginPage(){
    return(
        <div>
            <Row style={{margin:0}} className="section4">
        <div className="login ">
          <h3 className="login-call">Login Empresa</h3>
          <Form className="login-form">
          <Form.Group>
            <Form.Label className="d-flex justify-content-center">User Empresa</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="d-flex justify-content-center">Senha</Form.Label>
            <Form.Control type="password"></Form.Control>
          </Form.Group>

          <div className="button-local d-flex justify-content-center">
          <Link to="/dashbord" className=" rounded button-link">
            Submit
          </Link>
          </div>

          </Form>
        </div>
        </Row>
        </div>
    )

}

export default LoginPage;