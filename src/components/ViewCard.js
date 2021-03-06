import React from "react";
import PropTypes  from "prop-types";
export const ViewCard = ({ info, mostrar, setMostrar }) => {
  const handleClick = () => {
    setMostrar(!mostrar);
  };//Funcion que sirve para mostrar la lista de cards o una en especifico
  return (
    <div className="input-group container pb-3 bor">
      <div className="container input-group ">
        <h2>{info.title}</h2>
        <div className="container input-group p-0">
          <img
            src={info.url}
            className="img-fluid"
            alt="Sunset Over the Sea"
            onClick={handleClick}
          />
        </div>
        <div className="container input-group p-0">
          <h4>Descripcion:</h4>
        </div>
        <div className="container input-group p-0">
          <p>{info.desc}</p>
        </div>
        <div className="container input-group p-0">
          <h6>Pataforma: </h6>
          <p> {`  ${info.platform}`}</p>
        </div>
        <div className="container input-group p-0">
          <h6>Categoria: </h6>
          <p>{`  ${info.category}`}</p>
        </div>
      </div>
      <div className="container input-group">
        <button
          className="btn btn-outline-primary  rounded"
          onClick={handleClick}
        >
          Back
        </button>
      </div>
    </div>
  );
};
ViewCard.popTypes = {
  info:PropTypes.object.isRequired,
  mostrar:PropTypes.bool.isRequired,
  setMostrar:PropTypes.func.isRequired
}