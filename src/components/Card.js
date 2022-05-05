import React from "react";

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
  };
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
