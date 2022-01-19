import React from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TimeSeriesScale
  } from "chart.js";
  
const chartData = {
    labels: [],
    datasets: [
        {
            label: 'øre/kWh',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
        }
    ]
}

const LineChart = (props) => {
    function stringTo2dArray(string, d1, d2) {
        return string.split(d1).map(function (x) { return x.split(d2) });
    }

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, TimeSeriesScale);
    var listOfPrices;
    if (props.device.status != null) {
        var stripped = props.device.status.replace(/\søre/g, ";").replace(/\s/g, "");
        var stripped = stripped.substring(0, stripped.length - 1);
        var listOfPrices = stringTo2dArray(stripped, ";", ":").sort();
        chartData.datasets[0].data = [];
        chartData.labels = [];
        listOfPrices.forEach(element => {
            const now = new Date();
            now.setHours(parseInt(element[0].substring(0, element[0].indexOf("."))));
            chartData.datasets[0].data.push({x: now, y: parseFloat(element[1].replace(/\,/g, "."))});
            chartData.labels.push(now);
        });
        
    }
    return (
        <div id={props.device.ref} className={props.className}>
            <Line
                type="line"
                data={chartData}
                options={{
                    title:{
                        display:true,
                        text:'Dagens strømpriser',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    scales:{
                        x: {
                            type: 'time',
                            time: {
                                displayFormats: {
                                    hour: 'HH'
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
};
export default LineChart;