import React, { useEffect } from 'react'
import Result from './Result';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';

 
//using useTimer npm package for timmer...
const Counter = () => {
const { time } = useTimer({
  initialTime: 300,
  autostart:true,
  endTime: 0,
  timerType: 'DECREMENTAL',
}
); 
const navigate=useNavigate();
//this funtion is for redirecting to result page when the timer is zero
useEffect(()=>{
  {time===0 && navigate('/Result')}
},[time])
//const fn=(()=>{time===0 && navigate('/Result')});
//converting the second into minuits and seconds..

 const munites= Math.floor(time/60);
 const seconds= Math.floor(time % 60);
  return (
    <div className='counterclass' >
    <p>{`Remaining ${munites} M : ${seconds} S`}</p>
    </div>
  )
}

export default Counter