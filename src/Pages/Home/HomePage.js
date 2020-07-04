import React from "react";
import {Form, Button} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import NavBar from "../../Components/NavBar";
import Card from '../../Components/Cards/Card'
import "./HomePage.css";

import wilson from "../../img/unnamed.png"
import avergers from "../../img/Avengers.png"
import uber from "../../img/uber.png"


function HomePage() {
  
  return (
    <div>

    <NavBar
      title={"Education"}
      to={"section1"}
      menuItems={[
        <Link
        spy={true}
        smooth={true}
        duration={500} to="section2">Clientes Conhecidos</Link>,
        <Link 
        spy={true}
        smooth={true}
        duration={500} to="section3">Contato</Link>,
        <a to="http://localhost:3000/login">Login Empresas</a>
      
      ]}
    />

    <div id="section1" className="section1">
      <div className="education-title" >
        <p className="  education-name">Education Company</p>
        <p className="education-sub d-flex justify-content-center ">Cursos de melhor qualidade</p>
       </div>
    </div>


    <div id="section2" className="section2">
      <Card      
          imgUrl="https://www.wilsonsons.com.br/uploads/galerias/1502739977.jpg"
          title="Relax"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
          logo={wilson}       />
         <Card
          imgUrl="https://estradas.com.br/wp-content/uploads/2019/02/Rodovia_Raposo_Tavares_IMG-20190212-WA0090.jpg"
          title="Relax"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
            logo={avergers}  
        />
           <Card
          imgUrl="https://amvbrasil.com.br/wp-content/uploads/2019/05/requisitos-para-ser-motorista-Uber.jpg"
          title="Relax"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
            logo={uber}
        />


    </div>
    <div id="section3" className="section3">
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


    </div>



    </div>

  );
}
export default HomePage;
