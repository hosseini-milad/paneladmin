import React, { useEffect, useState } from "react"
import env from "../../env"
import statustrans from "../../translate/status"
import Status from "./Status"

function StatusBar(props){
  const lang = props.lang
  const [content,setContent] = useState('')
  const token=props.token
  useEffect(() => {
    const body={
    }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json',
        "x-access-token":token&&token.token,"userId":token&&token.userId},
        body:JSON.stringify(body)
      }
    fetch(env.siteApi + "/panel/order/rxStatus",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
        setContent('')
        setTimeout(()=> setContent(result),200)
    },
    (error) => {
      console.log(error);
    }
    
)},[])
  
    return(
        <div className="user-statue">
          {content&&content.status.map((status,i)=>(status.count?
            <div className="statue-all statue-div" key={i}>
              <p>{statustrans[status.status][lang]}</p>
              <Status status={status.status} text={status.count} lang={lang}/>
            </div>:<React.Fragment key={i}></React.Fragment>
          ))}
        </div>
    )
}
export default StatusBar