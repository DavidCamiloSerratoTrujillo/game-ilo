
import React, { useState } from "react";
export const Form = ({setSearch,setOrderby,setPlataform,setCategory}) => {
    const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };
  const handleChange = ({target}) =>{//Funcion para hacer el cambio, se puede hacer directamente en el onChange pero asi se ve mas organizado
    setInputValue(target.value);
    setSearch(inputValue);
}
const handleChangeSelect = ({target}) =>{
setOrderby(target.value);
}
const handleChangeSelectP = ({target}) =>{
  setPlataform(target.value);
  }
  const handleChangeSelectC = ({target}) =>{
    setCategory(target.value);
    }
  return (
    <form id = "inicio" onSubmit={handleSubmit} className="input-group container pb-3">
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
          <img src="https://lh3.googleusercontent.com/JnwVneQZOi47RNPys9ukLOyYQl9pJAoJvOeifWfVQc3on5hmjbh0bJjUH5-Y2yUKmsnMCtV15sdGfPtRnL52s2KTSiuKIcAGA9_YL-ptq7kT-RZkfp2L1CkRr4FzmPx4t5fuusR1pSCT8pE4-vg9Outt558FQuuZzfDN0jW_Gc-2iP5uGldVtSq-7uvwQtzreFr_34cXmUSFb3kt3HRy8tiZjdCAzCgdgBEHF8hll0pQT5sDAuQBFSM-UPdvyaTRoVxpJ2JZr0QX7HK-KL61Cq1oehvb9Lt7MMAmTwq1r7OpimQCB5PNDnQYk7UZ4bWjh11hXh3d-Nmioy7o8MvSzN4BiWB51xTpjZapQKdKmdxKnYot6yXGCRZ1v572HNCTTtjPMhO7rX-Nfz8UQWUMMtkobPpi-8wgVYebefRd3Cg1piv06sJahnx0Ugzs350yPy9Hf6CgQBIlaVKdtH0v4wJpK_BLitTsIYqTbjShMPp6T4At1H0zon9zw3H9DOipOYdguZUr3ap4h-i3XEZscloO6z0Pz39vrSANk98yyDMXS_zmUC_YfrW2eoUs5GTxbF-ao_6VtAuq_eYjPZtD16Nthxun2uq6IxX9UNUHwaNJnxmUk_n_zvMqHfzPTzRvjdt0weh_uWJ1rj4_6J_Poai95A7Ipu_uG9ScvLOWqcer83pjYCO85svkScc-DQ_9aWcVbGDyIZLpT5-LeXymTpfZ_FpnYOWzgBfEL3b69W1ZJrLQGHOlEBeA34o=s16-no" alt="Search"></img>
        </button>
        <div className="container p-0">
          
          <div className="row">
            <div className="col-sm-4 col-md-auto ">
              <select  name="category" className="form-select" onChange={handleChangeSelectC} >
                <option defaultValue="" value = "">Category</option>
                <option value = "shooter">SHOOTER</option>
                <option value = "morpg">MORPG</option>
                <option value = "moba">MOBA</option>
              </select>
            </div>
            <div className="col-sm-4  col-md-auto ">
            <select  name="plataform" className="form-select" onChange={handleChangeSelectP}>
                <option defaultValue="" value ="">Plataform</option>
                <option value = "pc">PC</option>
                <option value = "browser">Browser</option>
              </select>
            </div>
            <div className="col-sm-4  col-md-auto ">
            <select name ="orderby" className="form-select" onChange={handleChangeSelect}>
                <option defaultValue="" value ="">OrderBy</option>
                <option value="alphabetical">A-Z</option>
                <option value="release-date">release-date</option>
                
              </select>
            </div>
            
          </div>
          
        </div>
      </form>
  )
}
