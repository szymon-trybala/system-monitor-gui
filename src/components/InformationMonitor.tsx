import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import LoadingIcon from './LoadingIcon'
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

            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Liczba monitorów:</h3>
                <div className="rowinformation_title">{amountOfMonitors === "" ? <LoadingIcon /> : amountOfMonitors}</div>

            </div>
            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Nazwa głównego monitora:</h3>
                <div className="rowinformation_title">{nameOfMainMonitor === "" ? <LoadingIcon /> : nameOfMainMonitor}</div>


            </div>
            <div className="rowinformation_div">
                <h3 className="rowinformation_title">Częstotliwość odświeżania:</h3>
                <div className="rowinformation_title">{refreshRate === "" ? <LoadingIcon /> : refreshRate}</div>

            </div>
            <div className="rowinformation_div">

                <h3 className="rowinformation_title">Rozdzielczość:</h3>
                <div className="rowinformation_title">{horizontalResolution === "" ? <LoadingIcon /> : horizontalResolution + ' x ' + horizontalResolution}</div>

            </div>





        </>
    )
}

export default InformationMonitor;