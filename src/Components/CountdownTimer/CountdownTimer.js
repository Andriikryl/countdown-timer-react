import { useEffect, useState } from 'react'
import './CountdownTimer.css'
import {getRemaning} from './Utils/CountdownTimerUtils'


const defaultRemainigTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}



const CoutdownTimer = ({CoutdownTimestampMs}) => {

    const [remaningTime, setRemainigTime] = useState(defaultRemainigTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemaningTime(CoutdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [CoutdownTimestampMs])

    function updateRemaningTime(countdown){
           setRemainigTime(getRemaning(countdown))
    }

    return(
        <div className='coundown-box'>
            <span>{remaningTime.days}</span>
            <span>days</span>
            <span>{remaningTime.hours}</span>
            <span>hours</span>
            <span>{remaningTime.minutes}</span>
            <span>minutes</span>
            <span>{remaningTime.seconds}</span>
            <span>secondes</span>
        </div>
    )
}

export default CoutdownTimer









