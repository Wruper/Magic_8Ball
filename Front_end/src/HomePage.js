import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function HomePage(){


const[answer,setAnswer] = useState("");
const[inputValue,setinputValue] = useState("");

  function onbttnClick1(){
    window.location.href = "/logIn";
}

  function onbttnClick(){
    setFormValue();
    
    if(inputValue !== ""){
      fetch("/api/getAnswer").then(res =>{
      return res.text()
    }).then(answerz =>{
      setAnswer(answerz);
    });
  }
    else{
      toast.dark("The field is empty!",{
        position: "bottom-right",
      });
    }
  }
  
  function setFormValue(){
    setinputValue("");
  }
  
  function helpPutValue(Event){
    Event.preventDefault();
    setinputValue(Event.target.value);
  }
  
  return(
   <div className = "background">
    <div>
      <button className = "button2HP" onClick = {onbttnClick1} type="button" id = "adminButton">Admin?!</button>
    </div>
    <div>
      <h1 className = "headerHP">Welcome to the MAGIC eight ball!</h1>
    </div>
    <div>
      <p className = "paragraphHP">The eight ball shall respond to your desired questions!</p>
      <p className = "paragraphHP">Give it a go!</p>
    </div>
    <div className = "answer_div">
      <p className = "answer" id = "answer">{answer}</p>
    </div>
    <div className = "form_div">
      <label className = "questionText" >Insert your question here!</label>
      <br/>
      <input className = "questionInput" type="text" id="question" name="asked_question" value = {inputValue} onChange = {helpPutValue} placeholder= "Ask me anything" />
      <br/>
      <button className = "button1HP" type="button" id = "askButton"
      onClick = {onbttnClick}>Ask the ball!</button>
    </div>
    <ToastContainer/>
 </div>
)
}
export default HomePage;