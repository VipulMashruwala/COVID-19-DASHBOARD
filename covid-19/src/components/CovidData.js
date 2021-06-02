import React from 'react'
import { Link } from 'react-router-dom'
import './CovidData.css'
const CovidData=(props)=> {

    return (
        <div className="items">
            <p className="last-update">Last Update : {props.lastUpdate}</p>
           <h2 className="state-name">{props.state}</h2>
           <main className="covid-data-in">
                <p className="cond-active">Active : {props.active}</p>
                <p className="recovered">Recovered : {props.recovered}</p>
                <p className="confirmed">Confirmed : {props.confirmed}</p>
                <p className="death">Death : {props.death}</p>
           </main>
           <Link className="district-link" to={`/india/${props.id}`}>
               <p className="district-text">District cases</p>
            </Link>
        </div>
    )
}

export default CovidData;
