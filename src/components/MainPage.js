import React,{useState} from "react";
import { Pagination } from "./Pagination";
import { Card } from "./Card";
import { Form } from "./Form";
import { useFetchGames } from "../hooks/useFetchGames";
import Loader from 'react-loaders'
import {ViewCard} from "./ViewCard"
export const MainPage = () => {

  const [mostrar,setMostrar]= useState(false);
  const [search,setSearch] = useState("");
  const [info,setInfo]=useState({});
    // const [plataform,setPlataform] = useState("");
    // const [category,setCategory] = useState("");
    // const [orderby,setOrderby] = useState("");
  const {data:games,loading} = useFetchGames(search);
  const [pageNumber,setPageNumber] = useState(0);
  const objPerPage = 10;
  const pagesVisited = pageNumber*objPerPage;

  const objFilter = games.filter((elemento=> {
    return JSON.stringify(elemento).toLowerCase().includes(search.toLowerCase())
  }))
  const displayObj = objFilter.slice(pagesVisited,pagesVisited +objPerPage)

  const countObj = Math.ceil(objFilter.length/objPerPage);
  

 
  return (
    <>
    {mostrar===false?
    <>
     <Form setSearch={setSearch}/>
      {loading===false?
      <>
      <div className="container input-group pb-3">
      <Pagination pageNumber={pageNumber} setPageNumber = {setPageNumber} n = {countObj}/>
      </div>
      <div className="container">
        
        <div className="row col-md-auto">
      
          {
          displayObj.map( (g) =>(
            <Card key={g.id}
            {...g}
            mostrar = {mostrar}setMostrar={setMostrar} setInfo = {setInfo}
            />
          ))
          }
          <div className="col-sm-auto col-md-auto ">
          </div>
        </div>
      </div>
      </>:
      <Loader type="pacman" />
      }
    
    </>:
    <ViewCard info = {info} mostrar = {mostrar}setMostrar={setMostrar}/>
    }
    </>
  );
};
