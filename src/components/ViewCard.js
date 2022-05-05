import React from 'react'

export const ViewCard = ({info,mostrar,setMostrar}) => {
    const handleClick = ()=>{
        setMostrar(!mostrar);
    }
  return (
    <div className="input-group container pb-3">
      <div className='container input-group'><h1>Description</h1></div>
      
      <div className='container input-group'><h2>{info.title}</h2></div>
        <button  className="btn btn-outline-primary  rounded" onClick={handleClick}>
         Back
        </button>
    </div>
  )
}
