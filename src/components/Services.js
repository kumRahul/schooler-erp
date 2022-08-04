import React from "react";
import "./Services.css";

function Services(props) {
  return (
    <div className="services">
      <img className="img-full" src={props.source} alt={props.title}></img>
      <h4 className="services__text">{props.description}</h4>
    </div>
  );
}

export default Services;
