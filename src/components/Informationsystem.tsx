import * as React from 'react';
import LoadingIcon from './LoadingIcon'
import "../styles/information-system.css";


const SystemInformation = () => {
    const [systemVersion, setSystemVersion] = React.useState("");
    const [hostName, setHostName] = React.useState("");
    const [workTimeHour, setWorkTimeHour] = React.useState("");
    const [workTimeMinutes, setWorkTimeMinutes] = React.useState("");
    const [workTimeSecounds, setWorkTimeSecounds] = React.useState("");



    React.useEffect(() => {
        setInterval(getTime, 1000);
    }, [])



    const getTime = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe -u', (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(stdout);
            var value = stdout.toString().split("\n");
            setWorkTimeHour(value[0]);

            if (value[1] < 10) {
                setWorkTimeMinutes('0' + value[1]);
            }
            else {
                setWorkTimeMinutes(value[1]);
            }
            if (value[2] < 10) {
                setWorkTimeSecounds('0' + value[2]);
            }
            else {
                setWorkTimeSecounds(value[2]);
            }

        })
    }




    React.useEffect(() => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --name', (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(stdout);
            setHostName(stdout);
        })
        exec('system_monitor_cli.exe --win', (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            setSystemVersion(stdout);
        })
    }, [hostName, systemVersion])

    return (
        <>
            <div className="rowinformation_div">

                <h3 className="rowinformation_title">Nazwa hosta:</h3>
                <div className="rowinformation_title">{hostName === "" ? <LoadingIcon /> : hostName}</div>

            </div>

            <div className="rowinformation_div">

                <h3 className="rowinformation_title">Wersja systemu:</h3>
                <div className="rowinformation_paragraph">{systemVersion === "" ? <LoadingIcon /> : systemVersion}</div>
            </div>


            <div className="rowinformation_div">

                <h3 className="rowinformation_title">Czas od uruchomienia:</h3>
                <div className="rowinformation_paragraph">{workTimeHour === "" ? <LoadingIcon /> : workTimeHour + ' : ' + workTimeMinutes + ' : ' + workTimeSecounds}</div>
            </div>


        </>

    )
}

export default SystemInformation;