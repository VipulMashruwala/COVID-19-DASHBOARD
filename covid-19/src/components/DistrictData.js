import React from 'react'
import './DistrictData.css'

const DistrictData=(props)=> {

    return (
        <div className="district-data">
            <h2 className="district-name">{props.districtName}</h2>
           <main className="district-content">
                <p className="district-active">Active : {props.districtActive}</p>
                <p className="district-recovered">Recovered : {props.districtRecovered}</p>
                <p className="district-confirmed">Confirmed : {props.districtConfirmed}</p>
                <p className="district-death">Death : {props.districtDeath}</p>
            </main> 
            
        </div>
    )
}

export default DistrictData;
