import * as React from 'react';
import { Component } from 'react';

export interface InformationCpuProps {

}

export interface InformationCpuState {

}

class InformationCpu extends React.Component<InformationCpuProps, InformationCpuState> {
    state = {}
    render() {
        return (<div><p>CPU</p></div>);
    }
}

export default InformationCpu;
