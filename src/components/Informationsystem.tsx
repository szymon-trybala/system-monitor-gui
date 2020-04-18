import * as React from 'react';
import LoadingIcon from './LoadingIcon'
import "../styles/information-system.css";


const SystemInformation = () => {
    const [systemVersion, setSystemVersion] = React.useState("");
    const [hostName, setHostName] = React.useState("");

    React.useEffect(() => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe --name', (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
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
        </>

    )
}

export default SystemInformation;