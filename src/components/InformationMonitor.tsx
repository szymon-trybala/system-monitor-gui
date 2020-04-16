import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import "../styles/chart.css"

const InformationMonitor = () => {

    const [amountOfMonitors, setAmountOfMonitors] = React.useState("");
    const [nameOfMainMonitor, setNameOfMainMonitor] = React.useState("");
    const [refreshRate, setRefreshRate] = React.useState("");
    const [horizontalResolution, setHorizontalResolution] = React.useState("");
    const [verticalResolution, setVerticalResolution] = React.useState("");

    React.useEffect(() => {

        func();
    }, [])

    const func = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --monitor-info', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");
            setAmountOfMonitors(value[0]);
            setNameOfMainMonitor(value[1]);
            setRefreshRate(value[2]);
        });
        exec('system_monitor_cli.exe --monitor-res', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");
            setHorizontalResolution(value[0]);
            setVerticalResolution(value[1]);

        });

    };

    return (
        <>
            <div className="rowinformation">
                <div >
                    <h3>Liczba monitorów:</h3>
                    <p>{amountOfMonitors}</p>
                </div>
                <div >
                    <h3>Nazwa głownego monitoru:</h3>
                    <p>{nameOfMainMonitor}</p>
                </div>
                <div >
                    <h3>Częstotliwość odświeżania:</h3>
                    <p>{refreshRate} Hz</p>
                </div>
                <div >
                    <h3>Rozdzielczość:</h3>
                    <p>{horizontalResolution} x {verticalResolution}</p>
                </div>
    
            </div>



        </>
    )
}

export default InformationMonitor;