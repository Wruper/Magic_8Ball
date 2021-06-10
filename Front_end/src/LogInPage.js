import React, {useState}  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LogInPage(){

    var username = "admin";
    var password = "admin";

    const[usernameValue,setUsernameValue] = useState("");
    const[passwordValue,setPasswordValue] = useState("");
    const[output,setOutput] = useState("");
    
    function setUsernameFormValue(Event)
    {
        setUsernameValue(Event.target.value);
    }

      function setPasswordFormValue(Event)
    {
        setPasswordValue(Event.target.value);
    }

    function goBackBttn()
    {
        window.location.href = "/";
    }

    function veriftBttn()
    {
        if(usernameValue === "" || passwordValue === ""){
            toast.dark("One or two fields are empty!",{
                position: "bottom-right",
              });
            }
        else{
            verifyAdmin();
        }
    }
    
    function verifyAdmin()
    {
        if(usernameValue !== username || passwordValue !== password)
        {
            toast.dark("The password or username is incorrect!",{
                position: "bottom-right",
              });
            
        }
        else
        {
            window.location.href = "/Admin";
        }
    }


  return(
    <div className = "background">
        <div>
            <button className = "button2HP" onClick = {goBackBttn} type="button" id = "goBackButton">Go Back</button>
        </div>
        <div>
            <h1 className = "header2">Please insert your credentials!</h1>
        </div>
        <div>
            <p className = "paragraph3">{output}</p>
        </div>
        <div className = "logInForm">
            <label className = "logInText" >Username</label>
            <br/>
            <input className = "logIn" type="text" id="username" name="asked_questoin" placeholder= "Username" 
            value = {usernameValue} onChange = {setUsernameFormValue}/>
            <br/>
            <label className = "logInText" >Password</label>
            <br/>
            <input className = "logIn" type="password" id="password" name="asked_questoin" placeholder= "Password" 
            value = {passwordValue} onChange = {setPasswordFormValue}/>
            <br/>
            <button className = "button3" type="button" id = "logInSubmit" onClick = {veriftBttn} >Submit</button>
        </div>
        <ToastContainer/>
    </div>
);
}
export default LogInPage;