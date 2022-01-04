import * as React from 'react';
import { useState, useEffect } from 'react';

function Stopwatch({start}) {
    const[time, setTime] = useState(0);
    const running = start;

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval)
        } 
        return () => clearInterval(interval);
    }, [running]);
    

    return (
        <div>
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
        </div>
    )
}

export default Stopwatch;