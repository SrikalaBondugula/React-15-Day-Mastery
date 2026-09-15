import { useState } from "react"
function TodoApplication(){
    const [activities,setActivity]=useState([])
    const [input_value,setInput]=useState("")
    const [count,setcount]=useState(0)
    const [checked_list,setChecked_list]=useState([])
    const [edit_id,setEditId]=useState(null)
    const[edit_activity,setEdit_activity]=useState("")


    function AddActivity(e){
        e.preventDefault()
        setcount(count+1)
        let obj={
            id:count,
            work:input_value
        }
        setActivity([...activities,obj])  
        setInput("") 
    }


    function AddToCheckedList(checked_id){
            setChecked_list([...checked_list,checked_id])
    }



    function DeleteActivity(activity_id){
        let new_activities=activities.filter((activity)=>activity.id !==activity_id)
        setActivity([...new_activities])
    }


    function AddEditId(Activity_id,activity_work){
        setEditId(Activity_id)
        setEdit_activity(activity_work)


    }


    function AddEditActivity(Edited_text){
        setEdit_activity(Edited_text)

    }

    function SaveEditedActivity(){
     let new_Activity=activities.map((activity)=>{
        if (activity.id===edit_id){
            activity.work=edit_activity
            return activity
        }
        return activity
         }) 
     setActivity([...new_Activity])
     setEditId(null)
     setEdit_activity("")  
    }


    return (<div>
        <div id="greet"> <h1>ToDo App</h1></div>
        <div id="quote"><h5>list your activities 📋</h5></div>
       <div id="form"> 
            <form id="form" onSubmit={AddActivity}>        
            <div id="input" ><input type="text" placeholder="Enter Activity" onChange={(e)=>setInput(e.target.value)}  value={input_value} required/></div>
            <div id="submit"><button type="submit">Add</button></div>
            </form>
        </div>
        <div id="list">
            <ul>
                {activities.length===0?(<h1>"No Activities"</h1>):
                activities.map((activity)=>(
                  <li key={activity.id}>
                    <div id="btn">
                        {checked_list.includes(activity.id)?
                        (<button  id="status-btn">☑️</button>):
                        ( <button id="status-btn" onClick={()=>AddToCheckedList(activity.id)}>⬜</button>)}
                    </div>
                      <div id="activity">
                        {activity.id!==edit_id?<p>{activity.work}</p>:(
                            <form id="form" onSubmit>        
                            <div id="input" onChange={(e)=>AddEditActivity(e.target.value)}><input type="text" placeholder="Enter Activity" value={edit_activity} required/></div>
                            <div id="submit"><button type="submit" onClick={SaveEditedActivity}>Save</button></div>
                            </form>
                        )}
                      </div>
                      <div id="edit-delete">
                        <button onClick={()=>AddEditId(activity.id,activity.work)}>✏️</button>
                        <button onClick={()=>DeleteActivity(activity.id)}>❌</button>
                      </div>

                  </li>))
                 
                }
            </ul>
            
        </div>
       
    
        



        

    </div>)
}
export default TodoApplication