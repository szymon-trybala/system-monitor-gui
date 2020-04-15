import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import "../styles/chart.css"

const InformationRam = () => {

    const [percentageOfUse, setPercentageOfUse] = React.useState("");
    const [allMemory, setAllMemory] = React.useState("");
    const [freeMemory, setFreeMemory] = React.useState("");
    const [memoryOfUse, setMemoryOfUse] = React.useState("");

    React.useEffect(() => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --ram', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");
            setPercentageOfUse(value[0]);
            setAllMemory(value[1]);
            setFreeMemory(value[2]);
            setMemoryOfUse(value[3]);


        })
    }, [percentageOfUse, allMemory, freeMemory, memoryOfUse])


    return (

        <>
            <div className="rowinformation">
                <div >
                    <h3>Wykorzystania pamięci RAM:</h3>
                    <p>{percentageOfUse} %</p>
                </div>
                <div >
                    <h3>Całkowita ilość pamięci RAM:</h3>
                    <p>{allMemory} MB</p>
                </div>
                <div >
                    <h3>Ilość wolnej pamięci:</h3>
                    <p>{freeMemory} MB</p>
                </div>
                <div >
                    <h3>Ilość używanej pamięci:</h3>
                    <p>{memoryOfUse} MB</p>
                </div>
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
                    }}

                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </>
    )
}

export default InformationRam;