import * as React from 'react';
import "../styles/information-system.css";

const SystemInformation = () => {
    const [systemVersion, setSystemVersion] = React.useState(":(((");
    const [hostName, setHostName] = React.useState(":)))");

    React.useEffect(() => {
        const {exec} = require('child_process');
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
        <div className="rowinformation">
        <div >

            <h3>Nazwa hosta:</h3>
            <p>{hostName}</p>
        </div>

        <div >
            <h3>Wersja systemu:</h3>
            <p>{systemVersion}</p>
        </div>
    </div>
    )
}

export default SystemInformation;