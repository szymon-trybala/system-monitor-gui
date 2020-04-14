import * as React from 'react';
import { Component } from 'react';
import "../styles/information-system.css";
//InformationSystem

export interface InformationSystemProps {

}

export interface InformationSystemState {

}

class InformationSystem extends React.Component<InformationSystemProps, InformationSystemState> {

    state = {
        systemVersion: String,
        hostName: String
    }


    componentWillMount() {

        this.setState({
            hostName: "NutkaDanutak",
            systemVersion: "Ubunt"
        })
    }



    render() {



        return (
            <div className="rowinformation">
                <div >

                    <h3>Nazwa hosta:</h3>
                    <p>{this.state.hostName}</p>
                </div>

                <div >
                    <h3>Wersja systemu:</h3>
                    <p>{this.state.systemVersion}</p>
                </div>
            </div>
        );
    }
}

export default InformationSystem;
