import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import "../styles/chart.css"

const InformationCpu = () => {

    const [CPUusage, setCPUusage] = React.useState("");
    const [procesorName, setProcesorName] = React.useState("");
    const [architecture, setArchitecture] = React.useState("");
    const [numberOfCores, setNumberOfCores] = React.useState("");


    React.useEffect(() => {
        setInterval(func, 1000);
    }, [])

    React.useEffect(() => {
        funcStaticData();
    }, [])

    const funcStaticData = () => {

        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --cn', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");

            setProcesorName(value[0]);
            setArchitecture(value[1]);
            setNumberOfCores(value[2]);
        });

    }

    const func = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --cpu', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            setCPUusage(stdout);
        });
    };

    return (
        <>

            <div className="rowinformation">
                <div >
                    <h3>Nazwa procesora:</h3>
                    <p>{procesorName} </p>
                </div>
           
                <div >
                    <h3>Architektura procesora:</h3>
                    <p>{architecture}</p>
                </div>

                <div >
                    <h3>Liczba rdzeni:</h3>
                    <p>{numberOfCores}</p>
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
                        [ 'Wolne CPU',100 - parseInt(CPUusage)],
                        ['Użycie CPU', parseInt(CPUusage)],
                    ]}
                    options={{
                        title: 'Użycie CPU',
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

export default InformationCpu;