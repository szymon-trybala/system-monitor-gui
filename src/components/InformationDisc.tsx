import * as React from 'react';
import { Component } from 'react';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router';
import LoadingIcon from './LoadingIcon'
import "../styles/chart.css"


    class InformationDisc extends Component
  {
    state = {
    
        freeSpace: '',
        usedSpace: '',
        typeOfDisk: '',
        letterOfDisk: '',
            
        }

        componentDidMount(){
        console.log('d')
        setInterval(this.func, 1000);
  
    }

     func = () => {


        const { exec } = require('child_process');
        let commend = "system_monitor_cli.exe -d"
   
       
         if(this.state.letterOfDisk !== '')
         {
            commend =  commend+' -'+  this.state.letterOfDisk;    
         }
         console.log(commend)

        exec(commend, (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            var value = stdout.toString().split("\n");
          
           let freeSpace;
           let usedSpace;

           freeSpace=value[0];
        usedSpace=value[1];
       
        this.setState({
           freeSpace, 
           usedSpace
        })
       
    });
      
        exec('system_monitor_cli.exe --disk-type', (error: any, stdout: string, stderr: any) => {
            if (error) {
                console.log(error);
                return;
            }
            this.state.typeOfDisk=stdout;
        });
        
    };

    handleChange = (e) => {
        e.preventDefault();
        var letterOfDisk = e.target.value;
        this.setState({
            letterOfDisk
         })
           
    }
    render() {
    return (

        <>
            <div className="rowinformation">
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
                    
                    <input type="text" name="letter" value={this.state.letterOfDisk} onChange={this.handleChange} className="rowinformation_input"/>
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
}}

export default InformationDisc;