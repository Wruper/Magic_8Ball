import React, {useState}  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminPage()
{

    const[answer,setAnswer] = useState("");
    const[answerToDelete,setanswerToDelete] = useState("");

    const onErrorAdd = () => toast.dark("The answer already exists!",{
        position: "bottom-right",
      });
    const onErrorDelete = () => toast.dark("The answer doesn't exist!",{
        position: "bottom-right",
    });
    const onSucc = () => toast.dark("Success!",{
        position: "bottom-right",
    });
 
    function returnToHP()
    {
        window.location.href = "/";
    }

    function setAnswerFormValue(Event)
    {
        Event.preventDefault();
        setAnswer(Event.target.value);
      }

    function setanswerToDeleteValue(Event){
        Event.preventDefault();
        setanswerToDelete(Event.target.value);
      }

    function deleteAnswer()
    {
        if(answerToDelete === ""){
            toast.dark("Input an answer to delete!",{
                position: "bottom-right",
              });
        }
        else{
            fetch("/api/deleteAnswer", {
            method: 'DELETE', 
            body: answerToDelete
            }).then(({ status }) => { // If returned status is 400-500, return a toast message
                if (status >= 400 && status <= 500) {
                    onErrorDelete();
                }
                else{
                    onSucc();
                }
            });
        }
        
        setanswerToDelete("");    
    }


    function addAnswer()
    {
        if(answer === ""){
            toast.dark("Input an answer to add!",{
                position: "bottom-right",
              });
        }
        else{
           fetch("/api/answer", {
            method: 'POST', 
            body: answer
        }).then(({ status }) => {  // If returned status is 400-500, return a toast message
            if (status >= 400 && status <= 500) {
                onErrorAdd();
            }
            else{
                onSucc();
            }
        });
    }
        setAnswer("")

        
    }

  
  return(
    <div className = "background">
        <div>
            <button className = "button2HP" onClick = {returnToHP} type="button" id = "goBackButton">Log out</button>
        </div>
        <div>
            <h1 className = "header3">Choose an action</h1>
        </div>
        <div>
        <p className = "paragraph4">Please choose to delete or add an answer</p>
        </div>
        <ToastContainer/>
        <div>
            <div className = "actionBox">
                <label className = "adminText" >Delete by Answer!</label>
                <br/>
                <input className = "adminInput" type="text" id="deletedQuestion" name="deletedQuestion" placeholder= "Answer to Delete"
                value = {answerToDelete} onChange = {setanswerToDeleteValue} />
                <br/>
                <button className = "adminButton" type="buttonDelete" id = "deleteButton" onClick = {deleteAnswer}>Delete</button>
                <br/>
                <label className = "adminText" >Add an answer!</label>
                <br/>
                <input className = "adminInput" type="text" id="AddQuestion" name="AddQuestion" placeholder= "New answer" 
                value = {answer} onChange = {setAnswerFormValue}/>    
                <br/> 
                <button className = "adminButton"  type="buttonAdd" id = "addButton" onClick = {addAnswer}>Add</button>
 
            </div>
        </div>

    </div>

   
);
}
export default AdminPage;