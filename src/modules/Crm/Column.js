import Task from "./Task"
import {Droppable} from 'react-beautiful-dnd';
import TaskPopUp from "./TaskPopUp";
import { useState } from "react";
import env from "../../env";
function Column(props){
    const [taskPop,setTaskPop] = useState(0)
    const action =(data)=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({...data,crmId:props.crm?props.crm._id:''})
          }
          console.log(postOptions)
      fetch(env.siteApi + "/panel/crm/update-tasks",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
            if(result.error){}
            else{
                props.setBoardArray(result.taskData)
            }
        },
        (error) => {
          console.log(error);
        }
      )
    }
    return(
        <div className="board-item c">
            <h2 className="board-title">
                {props.column.title}
            
            <span className="count-lead">({props.tasks.length})</span>
            {(props.column.index=="1")?
            <i className="fa fa-plus addTask" 
                onClick={()=>setTaskPop(1)}></i>:<></>}
            </h2>
            
            <Droppable droppableId={props.column.enTitle}>
                {(provided,snapshot)=>(
                <ul className={snapshot.isDraggingOver?"board-list-item dragCol":"board-list-item"}
                    ref={provided.innerRef}
                    data-draggingover={snapshot.isDraggingOver}
                    {...provided.droppableProps}>
                    {props.tasks.map((task,i)=>(
                        <Task key={task._id} 
                            taskList={task}
                            action={action} 
                            index={i}/>
                    ))}
                {provided.placeholder}
                </ul>
                )}
            </Droppable>
            {taskPop?<TaskPopUp title={"Create New Task"}
            btnText={"Create"} action={action}
            taskStep={props.column.enTitle}
            close={()=>setTaskPop(0)}/>:<></>}
        </div>
    )
}
export default Column