import React,{useState} from "react";
import { Pagination } from "./Pagination";
import { Card } from "./Card";
import { useForm } from "../hooks/useForm";
import iconsearch from "../assets/images/search.svg";
import { useFetchGames } from "../hooks/useFetchGames";
import Loader from 'react-loaders'


export const MainPage = () => {
  const [formValues,handleInputChange,reset] = useForm({
    search: '',
    plataform: '',
    category: '',
    orderby:''
  })
  const {search,plataform,category,orderby} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
  };
  const {data:games,loading} = useFetchGames(search,plataform,category,orderby);
  const [pageNumber,setPageNumber] = useState(0);
  const objPerPage = 10;
  const pagesVisited = pageNumber*objPerPage;
  const displayObj = games.slice(pagesVisited,pagesVisited +objPerPage)
 const countObj = Math.ceil(games.length/objPerPage);
  return (
    <>
      <form id = "inicio" onSubmit={handleSubmit} className="input-group container pb-3">
        <input
          type="text"
          name="search"
          autoComplete="off"
          value={search}
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange = {handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary  rounded">
          <img src={iconsearch} alt="Search"></img>
        </button>
        <div className="container p-0">
          
          <div className="row">
            <div className="col-sm-4 col-md-auto ">
              <select  name="category" className="form-select" onChange={handleInputChange}>
                <option defaultValue="none" value = "none">Category</option>
                <option value = "shooter">SHOOTER</option>
                <option value = "morpg">MORPG</option>
                <option value = "moba">MOBA</option>
              </select>
            </div>
            <div className="col-sm-4  col-md-auto ">
            <select  name="plataform" className="form-select" onChange={handleInputChange}>
                <option defaultValue="none" value ="none">Plataform</option>
                <option value = "pc">PC</option>
                <option value = "xbox">XBOX</option>
                <option value = "nintendo">NINTENDO</option>
              </select>
            </div>
            <div className="col-sm-4  col-md-auto ">
            <select name ="orderby" className="form-select" onChange={handleInputChange}>
                <option defaultValue="none" value ="none">OrderBy</option>
                <option value="AZ">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      {loading===false?
      
      <div className="container">
        
        <div className="row col-md-auto">
        <Pagination pageNumber={pageNumber} setPageNumber = {setPageNumber} n = {countObj}/>
          {displayObj.map( (g) =>(
            <Card key={g.id}
            {...g}/>
          ))}
          <div className="col-sm-auto col-md-auto ">
          </div>
        </div>
      </div>:
      <Loader type="pacman" />
      }
      
    </>
  );
};
