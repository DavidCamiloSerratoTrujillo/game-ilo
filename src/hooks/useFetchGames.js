import { useState,useEffect } from "react"
import { getGames } from "../helpers/getGames"
import PropTypes  from "prop-types";
export const useFetchGames = (orderby) => {
    const [state,setState] = useState({
        data:[],
        loading:true
    })
   
        useEffect(()=>{
            getGames(orderby).then(gm =>{
                setState({
                    data: gm,
                    loading: false
                });
            })
        },[orderby])
 
    

    return state;
}

useFetchGames.popTypes = {
    orderby:PropTypes.string.isRequired
}