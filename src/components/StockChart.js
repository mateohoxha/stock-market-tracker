import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Spinner from './Spinner';
import env from 'react-dotenv';

const StockChart = props => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { stockSymbol } = props;

    useEffect(() => {
        getStockData();
    }, [stockSymbol]);

    const getStockData = () => {
        let xValues = [];
        let yValues = [];

        setIsLoading(true);
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${env.API_KEY}`)
            .then(data => data.json())
            .then(response => {
                for (let key in response['Time Series (Daily)']) {
                    xValues.push(key);
                    yValues.push(response['Time Series (Daily)'][key]['1. open']);
                };

                setStockChartXValues(xValues);
                setStockChartYValues(yValues);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    };

    const data = {
        labels: stockChartXValues,
        datasets: [
            {
                label: "Stock Market (Daily)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: stockChartYValues
            }
        ]
    };

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : <Line
                    data={data}
                />}
        </div>
    );
};

export default StockChart;