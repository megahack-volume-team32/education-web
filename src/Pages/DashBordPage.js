import React from 'react';
import { Row, Col, Container, Collapse} from 'react-bootstrap';
import { Link } from "react-router-dom";

import notifica from '../img/notification.svg'
import curso from '../img/online-course.svg'
import user from '../img/user.svg'
import logo from '../img/logo.png'
import visu from '../img/eye.svg'

import lineData from "../Components/Lines/data.json"
import pieData from "../Components/Pies/data.json"
import barData from "../Components/Bar/data.json"
import MyResponsiveLine from "../Components/Lines/Lines"
import MyResponsivePie from "../Components/Pies/Pie"
import MyResponsiveBar from "../Components/Bar/Bar"



import "./DashBordPage.css";

function DashBordPage(){
    return(
        <div className="body">
            <Row className="position-logo d-flex align-items-center">
                <Col >
                <img src={logo}
                className="logo"/>  
                </Col>
                <Col >
                    <Link class="nav-menu">ANALYZE</Link>
                </Col>
                <Col >
                    <Link class="nav-menu">DASHBOARD</Link>
                </Col>
                <Col  >
                    <Link class="nav-menu" >REPORT</Link>
                </Col>
            </Row>

            <Row>
                <Col className="categoriaA">

               
                <span className="quantidade">18000 Notificações</span>
                <img
                    src={notifica}
                    className="icon"
                />
                

                </Col>
                <Col className="categoriaB">
                <span className="quantidadeu">8000 Users  </span>
                <img
                    src={user}
                    className="iconu"
                />
                </Col>
                <Col className="categoriaC">
                <span className="quantidadev">1.302.954 visualizações </span>
                <img
                    src={visu}
                    className="iconv"
                />


                </Col>
                <Col className="categoriaD">
                <span className="quantidadea">35 cursos  </span>
                <img
                    src={curso}
                    className="icona"
                />

                </Col>
            </Row>
            
            <Row className="space-graf">
                 <Col className="space-grafi"> 
                    <h2>Cursos Favoritos</h2>
                   <MyResponsivePie data={pieData} />
                </Col> 
                <Col className="space-grafi"> 
                    <h2>Horarios Favoritos</h2>
                   <MyResponsiveLine data={lineData} />
                </Col> 
            </Row> 
            <Row className="space-graf">
                 <Col className="space-grafi1"> 
                 <h2>Tempo Ativo</h2>
                 <MyResponsiveBar data={barData} />
                </Col> 
              
            </Row> 
       
        </div>
        
    )
}
export default DashBordPage;