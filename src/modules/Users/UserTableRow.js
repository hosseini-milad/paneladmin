import { useState } from "react"

function UserTableRow(){
  const [openOption,setOpenOption] = useState(0)
  console.log(openOption)
    return(
        <tr>
            <td><input type="checkbox" name="" id=""/></td>
            <td>
              <div className="cu-avatar">
              <i className="tableIcon fas fa-user"></i>
                <div className="cu-name">
                  <p className="name">Jayvion Simon</p>
                  <p className="email">benny89@yahoo.com</p>
                </div>
              </div>
            </td>
            <td>
              <div className="cu-phone">
                <p className="phone-num">955-439-2578</p>
              </div>
            </td>
            <td>
              <div className="cu-company">
                <p>Durgan - Murazik</p>
              </div>
            </td>
            <td>
              <div className="cu-role">
                <p>Account Manager</p>
              </div>
            </td>
            <td>
              <div className="pen-status order-status">
                Pending
              </div>
            </td>
            <td>
              <div className="more-btn">
                <i className="tableIcon fas fa-edit" onClick={()=>
                  window.location.href="/users/detail/123"}></i>
                <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i>
              </div>
              {openOption?<div className="sub-more-menu">
                <div className="sub-option sub-delete">
                <i className="tableIcon fas fa-remove" style={{color: "#ff0000"}}></i>
                  <p>Delete</p>
                </div>
                <div className="sub-option sub-edit">
                  <i className="tableIcon fas fa-edit"></i>
                  <p>Edit</p>
                </div>
              </div>:<></>}
            </td>
          </tr>
    )
}
export default UserTableRow