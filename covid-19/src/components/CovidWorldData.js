import React from 'react'
import './CovidWorldData.css'

const CovidWorldData=(props)=> {
    return (
        <div className="covid-world-data">
            <p className="lst-update">Last Update : {props.lastUpdate}</p>
            <h1 className="country">{props.country}</h1>
            <main className="covid-details">
                <p className="cond-critical">Critical : {props.critical}</p>
                <p className="cond-recovered">Recovered : {props.recovered}</p>
                <p className="cond-confirmed">Confirmed : {props.confirmed}</p>
                <p className="cond-death">Death : {props.death}</p>
            </main>
            
        </div>
    )
}

export default CovidWorldData
