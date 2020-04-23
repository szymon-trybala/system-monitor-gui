import * as React from "react";
import '../styles/home.css'
const { shell } = window.require('electron');

export const Home = () => {
  

  const openGithubPage = () => {
    shell.openExternal("https://github.com/szymon-trybala/system-monitor-gui");   
  }

  return (
     <>
      <div id="home">
        <p className="size-60 medium title">System Monitor</p>
        <p className="size-20">
        Twój system nie ma przed nami żadnych tajemnic!
        </p>
      </div>
  
      <div id="lowerleft" onClick={openGithubPage}>Odwiedź nas na Github.com</div>
      <div id="lowerright"> 
      <div>
      Szymon Trybała
      </div>
      <div> Jakub Borys</div>
      <div>Adrian Treffon</div>
      <div>IPpp30s3</div>
      </div>
   </>
  );
};
