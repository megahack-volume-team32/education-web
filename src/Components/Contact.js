import React from 'react';

import {Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import tel from '../img/phone-call.svg'
import place from '../img/you-are-here.svg'
import hour from '../img/clock.svg'
import english from '../img/america.jpg'

function Contact(){
    return(  
    <Row className="acess" style={{margin:0}}>
    <Col>
    <p className="welcome d-inline">Bem vindo a empresa Aune Educacional</p>
    </Col>
    <Col className="langue-style ">
    <img src={english} className="english-style"/>
    <spam className="d-inline langue ">English</spam>
    </Col>
    <Col>
        <Link className="login-style d-flex justify-content-end" to="/login">Login Empresas</Link>
    </Col>
        </Row>  )
}
export default Contact;