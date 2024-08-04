import { useEffect, useState } from "react"
import env from "../../../env"
import PreViewRX from "./PreViewRX"
function PreviewPopup(props){
    //console.log(data)
    return(
    <section className="delete-modal" style={{direction:"rtl"}}>
        <div className="modal-backdrop show-modal">
            <div className="task-popup fullPopUp">
                <i className="fa fa-remove closeModal" 
                    onClick={()=>props.close(0)}></i>
                <PreViewRX Rxnum={props.Rxnum} access={props.access}/>
            </div>
            
        </div>
    </section>
    )
}
export default PreviewPopup