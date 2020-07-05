import React from 'react';
import {Row, Col, Carousel, Card,Form,FormControl, Button} from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import "./HomePage.css";
import english from '../img/america.jpg'
import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'
import Contact from '../Components/Contact';
import logo from '../img/logo.png'  
import tel from '../img/phone-call.svg'
import place from '../img/you-are-here.svg'
import hour from '../img/clock.svg'
import wilson from '../img/wilson.png'


function HomePage(){
    return(
    <div className="bodyH" style={{margin:0}}> 
    <Contact/>     
        <Row >
            <Col>
                <img
                    src={logo} className="logo-styles"/>
            </Col>
            <Col className="contato-style ">
                <img src={tel} className="icon-styles"/>
                <p className="d-inline">XX-XXXX-XXXX</p>
            </Col>
            <Col className="contato-style ">
                <img src={place} className="icon-styles"/>
                <p className="d-inline">Rua dos Bobos, n 0 </p>
            </Col>
            <Col className="contato-style ">
                <img src={hour} className="icon-styles"/>
                <p className="d-inline">Segunda-Sexta</p><br/>
                <p className="d-inline hour">8h-20h </p>
            </Col>
        </Row>

        <Row style={{margin:0}} >
            <Col className="nav-style" >
                <Link className="navega" to="aboutus"
                spy={true}
                smooth={true}
                duration={500}>Quem Somos</Link>
            </Col>
           
            <Col className="nav-style">
                <Link className="navega" to="clientes"
                spy={true}
                smooth={true}
                duration={500}>Clientes</Link>
            </Col>    
            <Col className="nav-style" >
                <Link className="navega" to="noticias"
                spy={true}
                smooth={true}
                duration={500}>Noticias</Link>
            </Col> 
            <Col className="nav-style" >
                <Link className="navega" to="contact"
                spy={true}
                smooth={true}
                duration={500}>Contato</Link>
            </Col>
            <Col className="nav-search" >
            <Form className="search">
                <FormControl type="text" placeholder="Pesquisa"/>
            </Form>
            </Col>    
         </Row>



         <Row >
            <Col>
             <Carousel>
                 <Carousel.Item>
                     <img 
                         className="d-block w-100"
                         src={slide1}
                         alt="slide"
                     />
                 </Carousel.Item>
                 <Carousel.Item>
                     <img 
                         className="d-block w-100"
                         src={slide2}
                         alt="slide"
                     />
                 </Carousel.Item>
                 <Carousel.Item>
                     <img 
                         className="d-block w-100"
                         src={slide3}
                         alt="slide"
                     />
                 </Carousel.Item>
             </Carousel>
             </Col>
         </Row>
         <Row style={{margin:0}} className="section2" id="aboutus">
            <Col className="aboutus-style ">
                <p className="text-center aboutus-title">Quem somos</p>
                <p className=" text-center aboutus-text"> A empresa Aune Educational, foi fundada por Camille Couto, Larissa Santos Azevedo,Nina Machado, Rafael e Wesley Oliveira da Silva. Nossa missão é torna acessivel a educação empresarial de forma didática e unica carregando os valores de usabilidade, disponibilidade, conexão de pessoas e educação</p>

            </Col>

        </Row>

        <Row style={{margin:0}} className="section" id="clientes">   
            <Card className="card-ready  ">
                    <Card.Body className="card-info">
                        <Card.Title className="card-title">Wilson Sons e Volume</Card.Title>
                        <img src={wilson}
                            className="logo-card"
                        />
                        <Card.Text className="card-description">A Wilson Sons é o maior operador integrado de logística portuária e marítima do Brasil. Com mais de 180 anos de história, temos soluções completas para diversas indústrias, como óleo e gás e comércio exterior.</Card.Text>
                    </Card.Body>
                </Card>
           
           
        </Row>
        <Row style={{margin:0}} className="section1" id="noticias">
            <Col className="card-styleA">
               <h4 className="text-center"> Empresa inova em educação</h4>
               
               <p className="text-justify">O desafio de hackathon revelou jovens inovadores que usaram o tema educação para a criação do ..., um app voltado para treinemento de nichos especificos de empresariais </p>
               <small>Fonte:  G1 13/07/2020</small>
            </Col>
            <Col className="card-styleB">
         
            </Col>
            <Col className="card-styleD">
            <h4 className="text-center"> Pedagogia Empresarial</h4>
               <p className="text-justify">A  pedagogia empresarial busca estratégias e metodologias que garantam uma melhor aprendizagem e  apropriação de conhecimentos.</p>
               <small>https://www.edools.com/pedagogia-empresarial/</small>
            </Col>
            <Col className="card-styleB">
            </Col>
           
        </Row>
        <Row style={{margin:0}} className="section1" id="noticias" >
            <Col className="card-styleC">
               
            </Col>
            <Col className="card-styleB">
            
            </Col>
            <Col className="card-styleB">
               
            </Col>
            <Col className="card-styleB">
                
            </Col>
           
        </Row>
        <Row style={{margin:0}} className="section2" id="contact">
        <div className="contact ">
          <h3 className="contact-call">Entre em contato com gente</h3>
          <Form className="contact-form">
          <Form.Group>
            <Form.Label className="d-flex justify-content-center">Nome</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="d-flex justify-content-center">Email</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="d-flex justify-content-center">Nome Empresa</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
          <div className="contact-button">
          <Button type="submit" variant="dark">
            Submit
          </Button>
          </div>

          </Form>
        </div>
        </Row>
       
      
     </div>
    )

}
export default HomePage;