import React from "react";
import PropTypes  from 'prop-types';
export const Card = ({
  setInfo,
  mostrar,
  setMostrar,
  id,
  title,
  url,
  desc,
  category,
  platform,
}) => {
  const handleClick = () => {
    setMostrar(!mostrar);
    setInfo({
      id: id,
      title: title,
      url: url,
      desc: desc,
      platform: platform,
      category: category,
    });
  };//funcion en la que muestro o no en una pantalla la informacion de un card o la lista de todos los cards, asignando la informacion que quiero mostrar dado sea el caso
  return (
    <div className="card p-0">
      <img
        src={url}
        className="card-img-top"
        alt="Sunset Over the Sea"
        onClick={handleClick}
      />
      <div className="card-body">
        <h4 className="card-title">
          {title} <br /> {platform}
        </h4>
        <p className="card-text">{desc}</p>
        <p className="card-text">{category}</p>
      </div>
    </div>
  );
};
Card.propTypes = {//Exige que se envie el setcategories
  setInfo : PropTypes.func.isRequired,
  setMostrar : PropTypes.func.isRequired,
  mostrar:PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  platform:PropTypes.string.isRequired,
}