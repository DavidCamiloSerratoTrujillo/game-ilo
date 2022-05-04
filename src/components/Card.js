import React from 'react'

export const Card = ({id,title,url,desc}) => {
  return (
    <div className="card p-0">
    <img
      src={url}
      className="card-img-top"
      alt="Sunset Over the Sea"
    />
    <div className="card-body">
      <h3 className="card-title">
        {title}{id}
      </h3>
      <p className="card-text">
        {desc}
      </p>
    </div>
    </div>
  )
}
