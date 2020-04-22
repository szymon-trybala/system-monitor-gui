import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import LoadingIcon from './LoadingIcon'
import "../styles/chart.css"




export const SelectDiscLetter = (props) => {

    const list = props.letterOfDisk.map(letterOfDisk => <option key={letterOfDisk} value={letterOfDisk}>{letterOfDisk}</option>)

    return (

        <select name={props.name} value={props.allLetterOfDisk} onChange={props.handleChange} className="rowinformation_list">
            {list}
        </select>
    )
}



class InformationDisc extends Component {
    state = {

        freeSpace: '',
        usedSpace: '',
        allSpace: '',
        typeOfDisk: '',
        letterOfDisk: '',
        allLetterOfDisk: [],

    }

    handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({

            [name]: value,

        })
    }

    componentDidMount() {
        setInterval(this.func, 1000);
        this.getLetter();

    }

    getLetter = () => {

        const { exec } = require('child_process');
        let commend = "system_monitor_cli.exe -p"
        exec(commend, (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var allLetterOfDisk = stdout.toString().split(":\\");
            allLetterOfDisk.splice(-1, 1)

            this.setState({
                allLetterOfDisk
            })


            console.log(this.state.allLetterOfDisk)

        });
    }

    func = () => {


        const { exec } = require('child_process');
        let commend = "system_monitor_cli.exe -d"


        if (this.state.letterOfDisk !== '') {
            commend = commend + ' -' + this.state.letterOfDisk;
        }


        exec(commend, (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");

            const usedSpace = value[0];
            const freeSpace = value[1];
            const allSpace = value[2];

            this.setState({
                freeSpace,
                usedSpace,
                allSpace
            })
            console.log(this.state.letterOfDisk)
        });

        exec('system_monitor_cli.exe --disk-type', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(stdout);
            this.state.typeOfDisk = stdout;
        });

    };


    render() {
        return (
            <>
                <div className="rowinformation">
                    <div className="rowinformation_div">
                        <h3 className="rowinformation_title">Całe miejsce:</h3>
                        <div className="rowinformation_title">{this.state.allSpace === "" ? <LoadingIcon /> : this.state.allSpace + 'MB'}</div>
                    </div>
                    <div className="rowinformation_div">
                        <h3 className="rowinformation_title">Wolna pamieć:</h3>
                        <div className="rowinformation_title">{this.state.freeSpace === "" ? <LoadingIcon /> : this.state.freeSpace + 'MB'}</div>
                    </div>
                    <div className="rowinformation_div">
                        <h3 className="rowinformation_title">Użycie:</h3>
                        <div className="rowinformation_title">{this.state.usedSpace === "" ? <LoadingIcon /> : this.state.usedSpace + 'MB'}</div>

                    </div>
                    <div className="rowinformation_div">
                        <h3 className="rowinformation_title">Typ dysku:</h3>
                        <div className="rowinformation_title">{this.state.typeOfDisk === "" ? <LoadingIcon /> : this.state.typeOfDisk}</div>
                    </div>



                    <div className="rowinformation_div">
                        <h3 className="rowinformation_title">Dysk:</h3>
                        <SelectDiscLetter name="letterOfDisk" letterOfDisk={this.state.allLetterOfDisk} handleChange={this.handleChange} />
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
                            ['Wolna pamięć', parseInt(this.state.freeSpace)],
                            ['Używana pamięć', parseInt(this.state.usedSpace)],
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
}

export default InformationDisc;