import { useEffect } from "react"
import { useState } from "react"
import env from "../../../env"
import Status from "../../Components/Status"
import OrderDetails from "./OrderDetails"
import OrderHistory from "./OrderHistory"
import OrderUser from "./OrderUser"
import tabletrans from "../../../translate/tables"
import errortrans from "../../../translate/error"
import OrderOptions from "./OrderOptions"
import StyleSelect from "../../../components/Button/AutoComplete";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function OrderDetailHolder(props){
  const url = window.location.pathname.split('/')[3]
  const token=cookies.get(env.cookieName)
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;

  const [content,setContent] = useState('')
  const [user,setUser] = useState('')
  const [sku,setSku] = useState('')
  const [log,setLog] = useState('')
  const [OrderStatus,setOrderStatus] = useState("")

  useEffect(() => {
    var sku=''
    var postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userid":token&&token.userId},
        body:JSON.stringify({rxOrderNo:url})
      }
  fetch(env.siteApi + "/panel/order/fetch-order",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
        console.log(result)
        setContent(result.data)
        setUser(result.user)
        sku = result.data.rxLenz.split(',')[2]
        postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({sku:sku})
        }
      fetch(env.siteApi + "/order/manufacture/find",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
          setSku(result)
      },
      (error) => {
        console.log(error);
      }
        
    )
    },
    (error) => {
      console.log(error);
    }
  )
  var postOptions={
    method:'post',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({rxOrderNo:url})
  }
  fetch(env.siteApi + "/setting/orderlog",postOptions)
  .then(res => res.json())
  .then(
  (result) => {
    setLog(result.log)
  },
  (error) => {
    console.log(error);
  }
  )
},[])
const UpdateStatus = (rxOrderNo,status)=>{
  const body={
    rxOrderNo:rxOrderNo,
    status:status,
  }
  const postOptions={
    method:'post',
    headers: {'Content-Type': 'application/json',
    "x-access-token":token&&token.token,"userId":token&&token.userId},
    body:JSON.stringify(body)
  }
  
  fetch(env.siteApi + "/order/manage/addrx",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      window.location.reload()
    },
      (error) => {
        
        console.log(error);
      }
    );
  }

if(content)
return(
    <div class="order-detail" style={{direction:direction}}>
      <div class="od-header">
        <div class="od-header-info">
          <i class={`fa-solid fa-angle-${direction==="rtl"?"right":"left"}` }
          onClick={()=>window.location.href="/orders"}></i>
          <div class="od-header-name">
            <p>{tabletrans.order[lang]} {url}</p>
            <p>{new Date(content.date).toLocaleDateString('fa')} - 
               {new Date(content.date).toLocaleTimeString('fa')}
            </p>
          </div>
          <Status class={"od-status cmp-status"} status={content.status} 
          lang={props.lang.lang}/>
        </div>
        <div class="od-header-btn">
          
          {/* <div class="print-btn">
            <i class="fa-solid fa-print" onClick={()=>window.open("/print-guaranteeStock/"+OrderNum,'_blank')}></i>
            <p>{tabletrans.print[lang]}</p>
          </div> */}
          {content.status!==("faktor"||"cancel")?<div className="status-wrapper">
                <StyleSelect
                  title={tabletrans.status[props.lang]}
                  direction={props.lang.dir}
                  label="label"
                  action={(e)=>{setOrderStatus(e.value)}}
                  options={(content.status=="inproduction")?[{label:"اتمام",value:"faktor"}]:[{label:"تایید",value:"inproduction"},{label:"لغو",value:"cancel"}]}
                />  
                <button className="edit-btn" type="button" onClick={()=>{UpdateStatus(content.rxOrderNo,OrderStatus)}}>تغییر وضعیت</button>
              </div>:<></>}
        </div>
      </div>
      <div class="od-wrapper">
        <div class="od-col-1">
          <OrderDetails data={sku} content={content} lang={lang}/>
          <OrderHistory log={log} lang={lang}/>
        </div>
        <div class="od-col-2">
          {/* <OrderUser user={user} lang={lang} direction={direction} orderNo={content.rxOrderNo}/> */}
          <OrderOptions data={sku} content={content} lang={lang} direction={direction} />
        </div>
      </div>
    </div>
    )
  else  return(env.loader
  )
}
export default OrderDetailHolder