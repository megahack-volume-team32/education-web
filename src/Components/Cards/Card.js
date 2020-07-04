import React from "react"; 


import "./Card.css";

function Card(props) {
    return(
      <div
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
      className="card"
    >
      <div className="card-info">
        <img src={props.logo} className="img-card"/>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
        <div className="card-waves" />
      </div>
    </div>
      
      
       
        )
}

export default Card;