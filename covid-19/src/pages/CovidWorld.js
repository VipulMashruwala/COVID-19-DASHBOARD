import React, { Component } from 'react'
import Chart from '../components/Chart';
import CovidWorldData from '../components/CovidWorldData';
import './CovidWorld.css'

class CovidWorld extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: false,
            worldPost: [],
            country: "",
            cases: {},
            deaths: {},
            recovered: {},
            chartCountry: "",
            message: '',
            displayErrorMessage: false
        };
    };

    nameChangeHandler = (event) => {
        this.setState({
            country: event.target.value,
            display: false,
            displayErrorMessage: false,
        }, () => {
            this.setState({
                worldPost: []
            })
        })
    }

    fetchResultHandler = () => {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country',
            params: {
                name: this.state.country
            },
            headers: {
                'x-rapidapi-key': 'a3ccfdf31amshf245e61a3b29682p156972jsnc59ad2a3411e',
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(response => {
                this.setState({
                    worldPost: response.data,
                    displayWorldPost: true
                }, () => {
                    if (this.state.worldPost.length) {
                        this.setState({
                            displayErrorMessage: false,
                            display: true,
                            message: ""
                        })
                    }
                    else {
                        this.setState({
                            displayErrorMessage: true,
                            display: false,
                            message: "No Result Found!"
                        })
                    }
                })

            })
            .catch(error => {
                console.log(error)
            });

        axios.get(`https://disease.sh/v3/covid-19/historical/${this.state.country}?lastdays=${this.state.country}`)
            .then(res => {

                this.setState({
                    cases: res.data.timeline.cases,
                    deaths: res.data.timeline.deaths,
                    recovered: res.data.timeline.recovered,
                    display: true,
                    chartCountry: res.data.country

                })
                // console.log(res.data.timeline.cases)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const worldData = this.state.worldPost.map(post => {
            return <CovidWorldData
                key={post.code}
                country={post.country}
                confirmed={post.confirmed}
                critical={post.critical}
                recovered={post.recovered}
                death={post.deaths}
                lastUpdate={post.lastUpdate}
            />
        })

        return (
            <div className="covid-items">
                <input type="text"
                    value={this.state.country}
                    className="input-data"
                    placeholder="Country Name..."
                    onChange={this.nameChangeHandler.bind(this)}/>


                <button className="search-country"
                    type="submit"
                    onClick={this.fetchResultHandler.bind(this)}>
                    <i className="fas fa-search"></i>
                </button>

                <div>
                    {this.state.displayErrorMessage ?
                        <div className="message-content">
                            {this.state.message}
                        </div> :
                        <div>
                            {worldData}

                            <Chart cases={this.state.cases}
                                deaths={this.state.deaths}
                                recovered={this.state.recovered}
                                country={this.state.chartCountry}
                                display={this.state.display} />
                        </div>}
                </div>
            </div>
        )
    }
}

export default CovidWorld;

