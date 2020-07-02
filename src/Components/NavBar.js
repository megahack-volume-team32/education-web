import React from "react";

import "./NavBar.scss";
/*
props:
    title: O título da navbar
    menuItems: Ex:
    [<a href="/login">Ir para o login</a>, <a href="/"...]
*/
function NavBar(props) {
  return (
    <div className="Header">
      <div className="Container">
        <div className="Navbar">
          <div className="Logo">
            <h1>{props.title}</h1>
          </div>

          <div className="Menu">
            <ul>
              {props.menuItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
