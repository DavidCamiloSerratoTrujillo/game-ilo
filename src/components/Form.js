import React, { useState } from "react";
import PropTypes  from 'prop-types';
export const Form = ({
  setSearch,
  setOrderby,
  setPlataform,
  setCategory,
  setCant,
}) => {
  const [inputValue, setInputValue] = useState("");//Variable que controla el estado de lo que escribimos
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };//Funcion que previene que se recargue la pagina al hacer submit o al dar enter
  // o click en el boton de lupa, y asigna el valor a la busqueda para luego hacer el filtro con el cambio de estado
  const handleChange = ({ target }) => {
    setInputValue(target.value);
    setSearch(inputValue);
  };/*
  Funcion que asigna los valores cuando se cambia es decir lee los valores mientras estamos escribiendo y los asigna
  */
  const handleChangeSelect = ({ target }) => {
    setOrderby(target.value);
  };
  /*
  Funcion que asigna el cambio del componente selesct para el ordenado y renderiza deacuerdo a este
  */
  const handleChangeSelectP = ({ target }) => {
    setPlataform(target.value);
  };
   /*
  Funcion que asigna el cambio del componente selesct para la plataforma
  */
  const handleChangeSelectC = ({ target }) => {
    setCategory(target.value);
  };
   /*
  Funcion que asigna el cambio del componente selesct para la categoria 
  */
  const handleChangeSelectCant = ({ target }) => {
    setCant(target.value);
  };
   /*
  Funcion que asigna el cambio del componente selesct para la cantidad
  */
  return (
    <form
      id="inicio"
      onSubmit={handleSubmit}
      className="input-group container pb-3"
    >
      <input
        type="text"
        name="search"
        autoComplete="off"
        value={inputValue}
        onChange={handleChange}
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="submit" className="btn btn-outline-primary  rounded">
        <img src="https://i.postimg.cc/3wszczTW/search.png" alt="Search"></img>
      </button>
      <div className="container p-0">
        <div className="row">
          <div className="col-sm-4 col-md-auto ">
            <select
              name="category"
              className="form-select"
              onChange={handleChangeSelectC}
            >
              <option defaultValue="" value="">
                Category
              </option>
              <option value="shooter">SHOOTER</option>
              <option value="morpg">MORPG</option>
              <option value="moba">MOBA</option>
            </select>
          </div>
          <div className="col-sm-4  col-md-auto ">
            <select
              name="plataform"
              className="form-select"
              onChange={handleChangeSelectP}
            >
              <option defaultValue="" value="">
                Plataform
              </option>
              <option value="pc">PC</option>
              <option value="browser">Browser</option>
            </select>
          </div>
          <div className="col-sm-4  col-md-auto ">
            <select
              name="orderby"
              className="form-select"
              onChange={handleChangeSelect}
            >
              <option defaultValue="" value="">
                OrderBy
              </option>
              <option value="alphabetical">A-Z</option>
              <option value="release-date">release-date</option>
            </select>
          </div>
          <div className="col-sm-4  col-md-auto ">
            <select
              name="orderby"
              className="form-select"
              onChange={handleChangeSelectCant}
            >
              <option defaultValue={10} value={10}>
                Cantidad
              </option>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};
Form.popTypes = {
  setSearch: PropTypes.func.isRequired,
  setOrderby: PropTypes.func.isRequired,
  setPlataform: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setCant: PropTypes.func.isRequired,
}