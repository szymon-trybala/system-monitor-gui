import * as React from 'react';
import { Component } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';
import "../styles/chart.css"


const LoadingIcon = () => {

    return (

       <Preloader
            use={Oval}
            size={20}
            strokeWidth={8}
            strokeColor="#F0AD4E"
            duration={800}
        />
   
   
        );

}
export default LoadingIcon;