// https://www.youtube.com/watch?v=qwKh4pH7KAk ms코드 오류있음 

import React, {useState} from "react";
import DisplayComponent from "./Components/DisplayComponent.";
import BtnComponent from "./Components/BtnComponent";
import './App.css';

function App() {  
    const [ time, setTime ] = useState({tms:0, ms:0, s:0, m:0, h:0});
    const [ interv, setInterv] = useState();
    const [ status, setStatus] = useState(0);
    //Not started = 0
    // started = 1
    // pause = 2

    const start = () => {
      run();
      setStatus(1);
      setInterv(setInterval(run,100));
    }

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
   
    let save=time.tms
    

    const run = () => {
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if(updatedS === 60){
        updatedM++;
        updatedS = 0;
      }
      if(updatedMs === 10){
        updatedS++;
        updatedMs = 0;
      }
      updatedMs++;
      save++
      
      return setTime({tms:save, ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    }

    const stop = () => {
      clearInterval(interv);
      setStatus(2);
    }

    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      console.log(save);
      setTime({tms:0, ms:0, s:0, m:0, h:0});
      
      
    }

    const resume = () => start();   

    return (
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
        </div>
      </div>      
    )
}

export default App;
