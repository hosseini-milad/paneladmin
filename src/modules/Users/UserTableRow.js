import { useState } from "react"
import UserClassInTable from "./UserComponent/UserClassInTable"
import tabletrans from "../../translate/tables"
import Status from "../Components/Status"

function UserTableRow(props){ 
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const user=props.user
  console.log(user)
    return(
        <tr>
            <td className="checkBoxStyle">
              <input type="checkbox" name="" id="" checked={checkState}
              onChange={(e)=>setCheckState(checkState?false:true)}/></td>
            <td>
              <div className="cu-avatar">
              <img src="/img/avatar/avatar_1.jpg" alt="avatar"/>
                <div className="cu-name">
                  <p className="name">{user.cName}</p>
                  <p className="email">کد مشتری: {user.cCode}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="cu-company">
                <p>{user.credit}</p>
              </div>
            </td>
            <td>
              {user.class?<UserClassInTable classes={user.class}/>:
              <></>}
            </td>
            <td>
              <div className="cu-company">
                <p className="phone-num">{user.phone}</p>
              </div>
            </td>
            <td>
              <div className="cu-company">
                <p>{user.mobile}</p>
              </div>
            </td>
            <td>
              <div className="pen-status order-status">
                <Status text={user.lock!=="3"?"فعال":"قفل شده"} />
              </div>
            </td>
            <td>
              <div className="more-btn">
                <i className="tableIcon fas fa-edit" onClick={()=>
                  window.location.href="/users/detail/"+user._id}></i>
                <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i>
              </div>
              {openOption?<div className={props.direction==="rtl"?
                "sub-more-menu":"sub-more-menu sub-more-rtl"}>
                <div className="sub-option sub-delete">
                <i className="tableIcon fas fa-remove" style={{color: "#ff0000"}}></i>
                  <p>{tabletrans.delete[props.lang]}</p>
                </div>
                <div className="sub-option sub-edit">
                  <i className="tableIcon fas fa-edit"></i>
                  <p>{tabletrans.edit[props.lang]}</p>
                </div>
              </div>:<></>}
            </td>
          </tr>
    )
}
export default UserTableRow