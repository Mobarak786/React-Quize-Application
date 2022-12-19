import React from 'react'
import Quize from "./components/Quize";


const Home = ({questionnumber,setQuestionnumber, correctanswer,setCorrectanswer,
    timeremaining,setTimeremaining,count,setCount,data}) => {
 
  return (
<div className="main">
 <div>
    <Quize
      data={data}
      questionnumber={questionnumber} 
      setQuestionnumber={setQuestionnumber}
      correctanswer={correctanswer}
      setCorrectanswer={setCorrectanswer} 
      count={count}
      setCount={setCount}
timeremaining={timeremaining}/>
    </div>
</div>
  )
};

export default Home