import React from 'react'
import Home from '../Home';
import { Link } from 'react-router-dom';

const Result = ({count,setCount,data,users,setQuestionnumber,setUsers}) => {
  const percentage= count/data.length*100;

  const handleClick=()=>{
    setUsers(null);
    setQuestionnumber(1);
    setCount(0);
  };
  return (

    <div className='results'>
      <h3 className='resultheading'>{`welcome ${users} .Nice try..`}</h3>
      <div>
        <p className='para'>{`You have  attempted ${count} question correctley out of ${data.length}.`}</p>
        <h2>{`Your Score is ${percentage}%`}</h2>
      </div>
      <Link to={"/"}><button className='tryagain' onClick={handleClick}>TRY AGAIN</button></Link>
    
    </div>
  )
}

export default Result