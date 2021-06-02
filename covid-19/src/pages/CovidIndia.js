import React, { Component } from 'react'
import CovidData from '../components/CovidData';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import './CovidIndia.css'
import './Search.css'

class CovidIndia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
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
                this.setState({
                    posts: Object.entries(response.data.state_wise)
                })

            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        const covidData = this.state.posts.filter((val) => {
            if (this.state.searchTerm === "") {
                return val
            }
            else if (val[1].state.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                return val
            }
            return null;

        }).map((data) => {
            // console.log(data[1])
            return(
                    <CovidData
                        key={data[1].statecode}
                        id={data[1].state}
                        state={data[1].state}
                        active={data[1].active}
                        confirmed={data[1].confirmed}
                        death={data[1].deaths}
                        recovered={data[1].recovered}
                        lastUpdate={data[1].lastupdatedtime}
                    />
            ) 
        })
        return (
            <>
                {this.state.posts.length ?
                    <div>
                        <div className="search-div">
                            <input type="text"
                                    className="search-data"
                                    placeholder="Search by state..."
                                    onChange={(event) => this.setState({ searchTerm: event.target.value })}
                            />
                        </div>
                            
                            <div className="covid-data">
                                            {covidData}
                            </div>
                    </div>:
                            <div className="loading-spinner">
                                    <LoadingSpinner />
                            </div>}
            </>
        )
    }
}

export default CovidIndia;
