"use client"
import Countdown from "react-countdown";

const endingDate = new Date("2023-08-27");
const CountDown = () => {
    
    return (
        <Countdown date={endingDate} className="text-yellow-500 font-bold text-5xl"/>
    );
}

export default CountDown;