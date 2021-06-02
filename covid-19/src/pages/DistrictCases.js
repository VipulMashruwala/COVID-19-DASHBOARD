import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DistrictData from '../components/DistrictData';
import './Search.css'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import './DistrictCases.css'

const DistrictCases=()=> {

const params = useParams();
// console.log(props.id)

const [state, setState] = useState([]) 
const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {                          
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
            headers: {
                'x-rapidapi-key': 'a3ccfdf31amshf245e61a3b29682p156972jsnc59ad2a3411e',
                'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
            }
        };

        axios.request(options)
        .then(response => {
                setState(Object.values(response.data.state_wise));
        })
        .catch(error => {
            console.error(error);
        });
    },[])
    
    let districtData=state.filter((districtData)=>districtData.state === params.stateName)
    
    const district_data=districtData.map(item=>{
        return(
            Object.entries(item.district).filter((val)=>{
                if(searchTerm === ""){
                    return val
                }
                else if(val[0].toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                return null;
            }).map(element=>{
                   return  <DistrictData
                        key={element[0]}
                        districtName={element[0]}
                        districtActive={element[1].active}
                        districtConfirmed={element[1].confirmed}
                        districtDeath={element[1].deceased}
                        districtRecovered={element[1].recovered}
                    />
                })
        )
    })
        
    return (
        <>
            {state.length ? 
                            <div>
                                <div className="search-div">
                                    <input type="text" 
                                            className="search-data"
                                            placeholder="Search by district..." 
                                            onChange={(event)=>setSearchTerm(event.target.value)} 
                                    />
                                </div>
                                    {district_data}
                            </div>
                         : 
                            <div className="loading-spinner">
                                     <LoadingSpinner />
                            </div>}   
        </>
    )
}

export default DistrictCases

   
  
