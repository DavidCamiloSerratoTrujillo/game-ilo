import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { Card } from "./Card";
import { Form } from "./Form";
import { useFetchGames } from "../hooks/useFetchGames";
import {Loading} from './Loading'
import { ViewCard } from "./ViewCard";
export const MainPage = () => {

  const [cant, setCant] = useState(10);//Variable que controla la cantidad de objetos que vamos a ver
  const [mostrar, setMostrar] = useState(false);//Variable que controla la visibilidad de la info en una pagina en especifico
  const [search, setSearch] = useState("");//Variable que controla el filtro de busqueda
  const [info, setInfo] = useState({});//Variable que controla la informacion que vamos a enviar cuando se seleccione un objeto en especifico
  const [plataform, setPlataform] = useState("");//Variable que controla el filtro por plataforma
  const [category, setCategory] = useState("");//Vareiable que controla el filtro por categoria
  const [orderby, setOrderby] = useState("");//Variable que controla el ordenado directamente a la peticion por el url

  const { data: games, loading } = useFetchGames(orderby);//Variable de un arreglo que trae los juegos a los que le hacemos la peticion con un ordeado

  const [pageNumber, setPageNumber] = useState(0);// Variable que controla el numero de pagina

  const pagesVisited = pageNumber * cant;//Variable la cual calcula la pagina apartir de la cantidad de objetos que mostramos por la pagina en la que nos encontramos
/*
Realicé el filtrado de los elementos por este medio ya que al hacerlo directamente por la peticion, si un valor se encontraba vacio se presentaba en el url
este directamente no traia ningun objeto por lo que resulta mas sencillo traer los elementos y filtrarlos directamente en codigo, 
por lo que hice un filtrado de cada opcion en un arreglo diferente para asi no tener problemas con falta de informacion y poder realizar varios filtros simultaneos
*/
  const objPlatform = games.filter((elemento) => {
    return JSON.stringify(elemento.platform)
      .toLowerCase()
      .includes(plataform.toLowerCase());
  });//Arreglo con el filtro de plataforma
  const objCategory = objPlatform.filter((elemento) => {
    return JSON.stringify(elemento.category)
      .toLowerCase()
      .includes(category.toLowerCase());
  });//Arreglo con el filtro de category
  const objFilter = objCategory.filter((elemento) => {
    return JSON.stringify(elemento.title)
      .toLowerCase()
      .includes(search.toLowerCase());
  });//Arreglo con el filtro de busqueda

  const displayObj = objFilter.slice(pagesVisited, pagesVisited + cant);//Arreglo limitado a la cantidad de objetos que queremos mostrar

  const countObj = Math.ceil(objFilter.length / cant);//Variable en la que calculamos cuantas paginas vamos a necesitar para el paginado

  return (
    <main>
      {mostrar === false ? (
        <>
          <Form
            setSearch={setSearch}
            setOrderby={setOrderby}
            setPlataform={setPlataform}
            setCategory={setCategory}
            setCant={setCant}
          />
          {loading === false ? (
            <>
              <div className="container input-group pb-3">
                <Pagination
                  setPageNumber={setPageNumber}
                  n={countObj}
                />
              </div>
              <div className="container">
                <div className="row col-md-auto">
                  {displayObj.map((g) => (
                    <Card
                      key={g.id}
                      {...g}
                      mostrar={mostrar}
                      setMostrar={setMostrar}
                      setInfo={setInfo}
                    />
                  ))}
                  <div className="col-sm-auto col-md-auto "></div>
                </div>
              </div>
            </>
          ) : (
            <div className="container input-group pb-3">
             <Loading/>
          </div>
              
          )}
        </>
      ) : (
        <ViewCard info={info} mostrar={mostrar} setMostrar={setMostrar} />
      )}
    </main>
  );
};
