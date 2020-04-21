import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import LoadingIcon from './LoadingIcon'
import "../styles/chart.css"

const InformationRam = () => {

    const [percentageOfUse, setPercentageOfUse] = React.useState("");
    const [allMemory, setAllMemory] = React.useState("");
    const [freeMemory, setFreeMemory] = React.useState("");
    const [memoryOfUse, setMemoryOfUse] = React.useState("");

    React.useEffect(() => {

        setInterval(func, 1000);
    }, [])

    const func = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --ram', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(stdout);
            var value = stdout.toString().split("\n");
            setPercentageOfUse(value[0]);
            setAllMemory(value[1]);
            setFreeMemory(value[2]);
            setMemoryOfUse(value[3]);
        });
    };

    return (

        <>
            <div className="rowinformation_div">

                <h3 className="rowinformation_title">Wykorzystania pamięci RAM:</h3>
                <div className="rowinformation_title">{percentageOfUse === "" ? <LoadingIcon /> : percentageOfUse + '%'}</div>
            </div>

            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Całkowita ilość pamięci RAM:</h3>
                <div className="rowinformation_title">{allMemory === "" ? <LoadingIcon /> : allMemory + 'MB'}</div>
            </div>

            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Ilość wolnej pamięci:</h3>
                <div className="rowinformation_title">{freeMemory === "" ? <LoadingIcon /> : freeMemory + 'MB'}</div>

            </div>
            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Ilość używanej pamięci:</h3>
                <div className="rowinformation_title">{memoryOfUse === "" ? <LoadingIcon /> : memoryOfUse + 'MB'}</div>
            </div>


            <div className="chart-position">
                <Chart
                    width={'600px'}
                    height={'400px'}

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Wolna pamięć', 100 - parseInt(percentageOfUse)],
                        ['Używana pamięć', parseInt(percentageOfUse)],
                    ]}
                    options={{
                        title: 'Zużycie pamięci RAM',
                        is3D: true,
                        backgroundColor: 'none',
                        legendTextStyle: { color: 'grey' },
                        titleTextStyle: { color: 'grey' },
                        slices: {
                            1: { offset: 0.2 }

                        },

                    }}

                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </>
    )
}

export default InformationRam;