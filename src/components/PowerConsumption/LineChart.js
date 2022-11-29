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
                lineTension: 0,
                data: []
            }
        ]
    }
    
    if (props.device.status != null) {
        var stripped = props.device.status.replace(/øre/g, ";");
        stripped = stripped.substring(0, stripped.length - 1);
        listOfPrices = stringTo2dArray(stripped, ";", ":").sort();
        chartData.datasets[0].data = [];
        chartData.labels = [];
        listOfPrices.forEach(element => {
            const currentTime = new Date();
            currentTime.setHours(parseInt(element[0]));
            currentTime.setMinutes(0);
            currentTime.setSeconds(0);
            chartData.datasets[0].data.push({ x: currentTime, y: parseFloat(element[1].replace(/,/g, ".")) });
            chartData.labels.push(currentTime);
        });
    }

    return (
        <div id={props.device.ref} className={props.className}>
            <Line
                type="line"
                data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Dagens strømpriser',
                        fontSize: 20
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            boxWidth: 3,
                            boxHeight: 3,
                            caretPadding: 10,
                            callbacks: {
                                label: function(context) {
                                    return context.parsed.y + ' øre';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title:{
                                display: true,
                                text: 'kl',
                                align: 'end'
                            },
                            type: 'time',
                            time: {
                                tooltipFormat: 'DD.MM. HH:mm',
                                displayFormats: {
                                    hour: 'HH'
                                }
                            }
                        },
                        y: {
                            title:{
                                display: true,
                                text: 'øre/kWh',
                                align: 'end'
                            }
                        }
                    },
                    elements: {
                        point: {
                            radius: 1,
                            backgroundColor: '#f00',
                            borderColor: '#f00'
                        },
                        line: {
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.5)'
                        }
                    }
                }}
            />
        </div>
    )
};
export default LineChart;