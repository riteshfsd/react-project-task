import React, { useState } from 'react';
import CountUp, {useCountUp} from 'react-countup';
function CounterUp() {
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration:5, 
        end: 10000,
        startOnMount: false
    })
    return(
        <div>
            <div>
                <h1>
                    {countUp}
                </h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={()=> update(2000)}>Update to 2000</button>
            </div>
            <CountUp end = {200}/>
            <br/>
            <CountUp end = {200} duration = {5}/>
            <br/>
            <CountUp start = {500} end = {1000} duration = {5}/>
            <br/>
            {/* <CountUp prefix = '$' end = {1000} duration = {5} decimals = {2}/> */}
            <CountUp prefix = 'USD' end = {1000} duration = {5} decimals = {2}/>
        </div>
    )
}
export default CounterUp;
