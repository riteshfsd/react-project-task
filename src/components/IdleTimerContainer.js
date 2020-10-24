import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';
function IdleTimerContainer() {
    const IdleTimerRef = useRef(null);
    const onIdle = () => {
        console.log("user is idle");
    }
    return(
        <div>
           <IdleTimer ref = {IdleTimerRef} timeout = { 5*1000 } onIdle = {onIdle}></IdleTimer>
        </div>
    )
}
export default IdleTimerContainer;
