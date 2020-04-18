import * as React from 'react';
import LoadingIcon from './LoadingIcon'



const NetworkAdapter = () => {

    const [maxSpeed, setMaxSpeed] = React.useState("");
    const [nameOfNetworkAdapter, setNameOfNetworkAdapter] = React.useState("");


    React.useEffect(() => {

        setInterval(func, 1000);
    }, [])

    const func = () => {
        const { exec } = require('child_process');
        exec('system_monitor_cli.exe -n', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");

            setMaxSpeed(value[0]);
            setNameOfNetworkAdapter(value[1]);
        });


    };

    return (

        <>
            <div className="rowinformation">
                <div className="rowinformation_div">
                    <h3 className="rowinformation_title">Maksymalna prędkość:</h3>
                    <div className="rowinformation_title">{maxSpeed === "" ? <LoadingIcon /> : maxSpeed + 'KB/s'}</div>

                </div>
                <div className="rowinformation_div">
                    <h3 className="rowinformation_title">Nazwa karty sieciowej:</h3>
                    <div className="rowinformation_title">{nameOfNetworkAdapter === "" ? <LoadingIcon /> : nameOfNetworkAdapter}</div>
                </div>
            </div>

        </>
    )
}

export default NetworkAdapter;