import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'

const Chart = (props) => {

  const data = {
    labels: Object.keys(props.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(props.cases),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Deaths',
        data: Object.values(props.deaths),
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
      },
      {
        label: 'Recovered',
        data: Object.values(props.recovered),
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      }
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 18,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      {props.display  ? <div className='chart-header'>
        <h1 className='title-country'>{props.country}</h1>
        <div className="container">
          <Line data={data} options={options} />
        </div>
      </div>
        : <div></div>}
    </div>

  )

}

export default Chart;
