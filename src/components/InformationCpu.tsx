import * as React from 'react';
import { Chart } from "react-google-charts";
import LoadingIcon from './LoadingIcon'
import "../styles/chart.css"

const InformationCpu = () => {

    const [CPUusage, setCPUusage] = React.useState("");
    const [procesorName, setProcesorName] = React.useState("");
    const [architecture, setArchitecture] = React.useState("");
    const [numberOfCores, setNumberOfCores] = React.useState("");
    const [numberOfThreads, setNumberOfThreads] = React.useState("");

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
            console.log(stdout);
            var value = stdout.toString().split("\n");

            setProcesorName(value[0]);
            setArchitecture(value[1]);
            setNumberOfCores(value[2]);
            setNumberOfThreads(value[3]);
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
                <div className="rowinformation_div">


                    <h3 className="rowinformation_title">Nazwa procesora:</h3>
                    <div className="rowinformation_title">{procesorName === "" ? <LoadingIcon /> : procesorName}</div>

                </div>

                <div className="rowinformation_div">
                    <h3 className="rowinformation_title">Architektura procesora:</h3>
                    <div className="rowinformation_title">{architecture === "" ? <LoadingIcon /> : architecture}</div>

                </div>

                <div className="rowinformation_div">
                    <h3 className="rowinformation_title">Liczba rdzeni:</h3>
                    <div className="rowinformation_title">{numberOfCores === "" ? <LoadingIcon /> : numberOfCores}</div>
                </div>
                <div className="rowinformation_div">
                    <h3 className="rowinformation_title">Liczba wątków:</h3>
                    <div className="rowinformation_title">{numberOfThreads === "" ? <LoadingIcon /> : numberOfThreads}</div>
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
                        ['Wolne CPU', 100 - parseInt(CPUusage)],
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