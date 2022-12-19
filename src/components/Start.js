import React from "react";
import {useRef} from "react";
const Start = ({setUsers}) => {
  const inputRef=useRef();

  const handleSubmit=()=>{
    inputRef.current.value && setUsers(inputRef.current.value);
   };
  return (
    <div>
      <h1>Hi There</h1>
      <h3>Enter Your Name Please To Play The Quize</h3>
  
        <input  
        type="text"
        className="startinput"
        placeholder="your full name"
        ref={inputRef}
        />
        <button className="startbtn"onClick={handleSubmit}>start</button>
      
        <h3><i>Developer: Mobarak Ansary</i></h3>
            <h5>Contact:mobarakansary42@gmail.com</h5>
        
    </div>
  )
}

export default Start