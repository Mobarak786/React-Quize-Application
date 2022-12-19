
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Counter from './Counter';
 
const Quize = ({count,setCount,questionnumber,data,setQuestionnumber,correctanswer,setCorrectanswer,timeremaining}) => {

  const[question,setQuestion]= useState();
  const[buttonclass,setButtonclass]= useState(false);
  const[selectedanswer,setSelectedanswer]=useState();

   useEffect(()=>{
    setQuestion(data[questionnumber-1]);
  }, [data , questionnumber]);
  

  const prevClick = ()=>{
   if(questionnumber>1){
    setQuestionnumber(prev =>prev-1);
   } 
  };
  const nextClick= ()=>{
    if(questionnumber<data.length){
      setQuestionnumber(prev =>prev+1);

    }
    if(correctanswer===true){
      setCount(count+=1);
      setCorrectanswer(false);
    
    }
    if(questionnumber===data.length){
      setButtonclass(true);
    } 
    
  };
//checking each answer is correct or not
  const checkCorrect=(a)=>{
     { a.isCorrect? setCorrectanswer(true): setCorrectanswer(false)};
      setSelectedanswer(a);
      
    };


  return(
    
    <div className='quiz'>
      <Counter/>
      <div className='qsection'>
         <h3>Q.{questionnumber} {question?.questionText}</h3>
      </div>
      <div className='options'>
        {/*maping through option and rendering them*/}
         {question?.answerOptions.map((a , index)=>{
          return (<div className={selectedanswer===a?"answers active":"answers"} key={index} onClick={()=>checkCorrect(a)}>{a.answerText}</div>
          )
         })}
          
     </div>
        <div className='controlers'> 
          <button className='btn1' onClick={prevClick}>Pevious</button>
          <button className='btn2' onClick={nextClick}>Next</button>
          <Link to={"/Result"}><button className={buttonclass===true?'btn':'btn3'}>Submit</button></Link>
        </div>
    </div>
  )
      };
export default Quize