import React from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
//import annotationPlugin from 'chartjs-plugin-annotation';
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

// var ann = [];
// var ann_labels = ["Nå"];

// var annotations_array = ann.map(function (value, index) {
//     return {
//         type: 'line',
//         id: 'vline' + index,
//         mode: 'vertical',
//         scaleID: 'x',
//         value: value,
//         endValue: 200,
//         borderColor: 'red',
//         borderWidth: 2,
//         label: {
//             enabled: true,
//             position: "center",
//             content: ann_labels[index]
//         }
//     }
// });

const LineChart = (props) => {
    
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, TimeSeriesScale);
    
    function stringTo2dArray(string, d1, d2) {
        return string.split(d1).map(function (x) { return x.split(d2) });
    }

    var listOfPrices;
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
    
    if (props.device.status != null) {
        var stripped = props.device.status.replace(/\søre/g, ";").replace(/\s/g, "");
        var stripped = stripped.substring(0, stripped.length - 1);
        var listOfPrices = stringTo2dArray(stripped, ";", ":").sort();
        chartData.datasets[0].data = [];
        chartData.labels = [];
        listOfPrices.forEach(element => {
            const currentTime = new Date();
            currentTime.setHours(parseInt(element[0].substring(0, element[0].indexOf("."))));
            currentTime.setMinutes(0);
            currentTime.setSeconds(0);
            chartData.datasets[0].data.push({ x: currentTime, y: parseFloat(element[1].replace(/\,/g, ".")) });
            chartData.labels.push(currentTime);
        });
        
    }

    return (
        <div id={props.device.ref} className={props.className}>
            <Line
                type="line"
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Dagens strømpriser',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
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