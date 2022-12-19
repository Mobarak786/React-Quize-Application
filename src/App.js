import React from 'react'
import { useState } from  'react'
import Result from './components/Result';
import { data } from './components/Data';
import Home from './Home';
import Start from './components/Start';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  const[questionnumber,setQuestionnumber] = useState(1);
  const[correctanswer,setCorrectanswer] = useState(false);
  const[count,setCount]=useState(0);
  const{timeremaining,setTimeremaining}= useState();
  const [users,setUsers]=useState();
  return (
    <div className="App">
       {users?
       <>
      <h2 className='heading'>React Quize Application</h2> 
      <hr/>
      <Router>
      <Routes>
  {/*i am sending arguments to Home component*/}

     <Route exact path='/' element={<Home
      data={data}
      questionnumber={questionnumber} 
      setQuestionnumber={setQuestionnumber}
      correctanswer={correctanswer}
      setCorrectanswer={setCorrectanswer} 
      count={count}
      setCount={setCount}
      timeremaining={timeremaining}
      setTimeremaining={setTimeremaining}/>}/>
      <Route exact path='/Result' element={<Result 
                 count={count} 
                 setCount={setCount}
                 data={data}
                 users={users}
                 setQuestionnumber={setQuestionnumber}
                 setUsers={setUsers}/>}/>
      </Routes>
     </Router>
     </> : 
     <Start setUsers={setUsers} />}
     </div>
   
  );
}

export default App;
