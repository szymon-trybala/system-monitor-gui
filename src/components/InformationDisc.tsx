import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import "../styles/chart.css"

const InformationDisc = () => {

    const [freeSpace, setFreeSpace] = React.useState("");
    const [usedSpace, setUsedSpace] = React.useState("");
    const [typeOfDisk, setTypeOfDisk] = React.useState("");

    React.useEffect(() => {

        setInterval(func, 1000);
    }, [])

    const func = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe -d', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");
            setFreeSpace(value[0]);
            setUsedSpace(value[1]);
        });
        exec('system_monitor_cli.exe --disk-type', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            setTypeOfDisk(stdout);
        });

    };

    return (

        <>
            <div className="rowinformation">
                <div >
                    <h3>Wolna pamieć:</h3>
                    <p>{freeSpace} MB</p>
                </div>
                <div >
                    <h3>Użyat:</h3>
                    <p>{usedSpace} MB</p>
                </div>
                <div >
                    <h3>Typ dysku:</h3>
                    <p>{typeOfDisk} MB</p>
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
                        ['Wolna pamięć', parseInt(freeSpace)],
                        ['Używana pamięć', parseInt(usedSpace)],
                    ]}
                    options={{
                        title: 'Twardy dysk',
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

export default InformationDisc;