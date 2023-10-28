import { useState } from "react"
import Tabs from "../../Components/Tabs"
import UserBill from "./UserBill"
import UserGeneral from "./UserGeneral"
import UserNotif from "./UserNotif"
import UserSecurity from "./UserSecurity"
import UserSocial from "./UserSocial"
import errortrans from "../../../translate/error"

function UserDetailHolder(props){
  const lang = props.lang
  const [tabIndex,setTabIndex] = useState(0)
  console.log(lang.color)
    return(
    <div className="account">
      <h4>Account</h4>
      <Tabs tabIndex={tabIndex} setTabIndex={setTabIndex} lang={lang}/>

      <div className="pages-wrapper">
        {tabIndex===0?<UserGeneral />:<></>}
        {tabIndex===1?<UserBill />:<></>}
        {tabIndex===2?<UserNotif />:<></>}
        {tabIndex===3?<UserSocial />:<></>}
        {tabIndex===4?<UserSecurity />:<></>}
      </div>
    </div>
    )
}
export default UserDetailHolder