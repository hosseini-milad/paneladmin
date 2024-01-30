import { useState } from "react"
import StyleInput from "../../../components/Button/Input"

function TaskMainPart(props){
    const [showNote,setShowNote] = useState()
    const data = props.data
    return(
    <div className="nt-col-1">
        <div className="title-input center">
            <StyleInput label="Add Task title"
                style={{width:"100%"}}
                defaultValue={data?data.taskId:''}
                action={(e)=>props.setData(prevState => ({
                    ...prevState,
                    taskId:e
                }))}/>
        </div>
        <div className="note-input-task center">
        <label for="text-display" onClick={()=>setShowNote(showNote?0:1)}>
        {showNote?"Hide Task Notes":"Add Task Notes"}</label>
        {showNote?<textarea 
            onChange={(e)=>props.setData(prevState => ({
                    ...prevState,
                    content:e.target.value
                }))}>
            {data?data.content:''}</textarea>:<></>}
        </div>
        <div className="list-input center">
        <h6>Checklist</h6>
        <div className="list-wrapper">
            <div className="list-member">
            
            <div className="white-circle"></div>
            <p>list 1</p>
            <div className="member-btn-wrapper">
                <i className="fa-regular fa-calendar fa-sm" style={{color: "#c0c0c0"}}></i>
                <i className="fa-solid fa-user-plus fa-sm" style={{color: "#c0c0c0"}}></i>
                <i className="fa-solid fa-x fa-sm" style={{color: "#c0c0c0"}}></i>
            </div>
            </div>
        </div>
        <div className="add-list-wrapper">
            <div className="add-list-input">
                <div className="white-circle"></div>
                <input type="text"/>
            </div>
            <i className="fa-solid fa-x fa-xs"></i>
        </div>
        <div className="add-list-btn">
            <i className="fa-solid fa-circle-plus fa-lg" ></i>
            <p>Add Checklist</p>
        </div>
        </div>
        <div className="assign-input">
        <i className="fa-solid fa-user-plus avatar" style={{color: "#ffffff"}}></i>
        <div className="assign-wrapper">
            <p>Assigned to</p>
            <p>Unassigned <span><i className="fa-solid fa-angle-down fa-2xs"></i></span></p>
        </div>
        {/*<div className="assign-menu">
            <h6>Select Section</h6>
            <input type="search" name="" id="" placeholder="Search..."/>
            <p>To Do</p>
            <p>Doing</p>
            <p>QA</p>
            <p>Done</p>
        </div>*/}
        </div>
        {/*<div className="file-input">
        <input type="file" name="" id="file"/>
        <label for="file">
            <i className="fa-solid fa-paperclip" style={{color: "#c0c0c0"}}></i>
            <p>Add Attachment</p>
        </label>
    </div>*/}
        <div className="nt-btn-wrapper">
        <p>Clear</p>
        <div className="nt-btns center-task">
            <div className="cancel-btn-task center-task"
            onClick={()=>props.close()}>
            <p>Cancel</p>
            </div>
            <div className="create-btn-task center-task"
            onClick={()=>(props.action(data),props.close())}>
            <p>{props.btnText}</p>
            </div>
        </div>
        </div>
    </div>
    )
}
export default TaskMainPart