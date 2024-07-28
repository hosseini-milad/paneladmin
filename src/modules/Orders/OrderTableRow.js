import React ,{ useState } from "react"
import Status from "../Components/Status"
import  { normalPriceCount, rxFindCount } from "../../env"
import OrderQuickDetail from "./OrderComponent/OrderQuickDetail"
import StockQuickDetail from "./OrderComponent/StockQuickDetail"
import tabletrans from "../../translate/tables";
import StyleSelect from "../../components/Button/AutoComplete";
import env from "../../env";



function OrderTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const [windowOpen,setWindowOpen] = useState('')
  const [OrderStatus,setOrderStatus] = useState("")
  const category = props.category==="Stock"?"stock":"rx"
  const activeAcc = props.index===props.detail
  const order=props.order
  const token = props.token
  const printGarantee = (status,orderNo)=>{
    var url =status?"/print-guaranteeRx/":"/print-guaranteeStock/"
    setWindowOpen(window.open(url+orderNo,'_blank'))
    setTimeout(()=>windowOpen&&windowOpen.close())
  }
  //console.log(order)
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
  
    return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion order-tr":"accordion order-tr"}>
              <td className="checkBoxStyle">
                {props.index+1}
              </td>
              <td>
              <small>
                {order.managerInfo&&order.managerInfo[0]?
                order.managerInfo[0].cName:''}
              </small>
              </td>
              <td>
                  <p onClick={()=>
                  window.location.href="/orders/"+(order.rxOrderNo?"detail/":"stock/")+
                    (order.rxOrderNo?order.rxOrderNo:order.stockOrderNo)}>
                    {category==="rx"?order.rxOrderNo:order.stockOrderNo}</p>
                
              </td>
              <td>
                <div className="listTd">{order.singleLens?
                order.singleLens.title:''}
                </div>
              </td>
              <td>
                <small></small>
              </td>
              <td>
                <div className="cu-avatar">
                  <img src={order.expressPrice?"/img/avatar/urgent.png":
                    order.moreInformation?"/img/avatar/comment.png":
                    "/img/avatar/defaultProduct.png"} alt="MGM"
                    title={order.moreInformation}/>
                  <div className="cu-name">
                    <p className="name">{order.userInfo[0]?
                    order.userInfo[0].cName:''}</p>
                    <p className="email">{order.consumer}</p>
                  </div>
                  {order.moreInformation?
                    <i className="fa fa-comment-o" title={order.moreInformation}></i>:<></>}
                </div>
              </td>
              <td>
                <div className="or-date">
                  <p className="date">{new Date(order.date)
                  .toLocaleDateString(props.lang==="persian"?'fa':'en')}</p>
                  <p className="time">{new Date(order.date)
                  .toLocaleTimeString(props.lang==="persian"?'fa':'en')}</p>
                </div>
              </td>
              
              <td>
                <Status status={order.status} class={"order-status"} 
                  lang={props.lang}/>
              </td>
              {/* <td>
                <Status status={order.status} class={"order-status"} 
                  lang={props.lang}/>
              </td> */}
            <td>
              <div className="more-btn">
              {/* <i className={`tableIcon fas ${activeAcc?"fa-chevron-up":"fa-chevron-down"}`} 
                onClick={()=>props.showDetail(activeAcc?"-1":props.index)} ></i> */}
                <i className="tableIcon fas fa-edit" onClick={()=>
                  window.location.href="/orders/"+(order.rxOrderNo?"detail/":"stock/")+
                    (order.rxOrderNo?order.rxOrderNo:order.stockOrderNo)}></i>
                {/* <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i> */}
                <i className="fas fa-tag" onClick={()=>window.open("/printLabel/"+(order.rxOrderNo?order.rxOrderNo:order.stockOrderNo),'_blank')}></i>
                {(order.orderType==="single"||order.rxOrderNo)?<i className="fa-solid fa-certificate" onClick={()=>
                  
                  order.rxOrderNo?printGarantee(order.rxOrderNo,order.rxOrderNo):printGarantee(order.rxOrderNo,order.stockOrderNo)}></i>:<></>}
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
          {activeAcc?<>
          <tr className="sub-order">
            <td colSpan="7">{category==="rx"?
              <OrderQuickDetail order={order}/>:
              <StockQuickDetail order={order}/>}
            </td>
            <td colSpan="3" className="status-td">
              {order.status!==("faktor"||"cancel")?<div className="status-wrapper">
                <h5>تعیین وضعیت</h5>
                <StyleSelect
                  title={tabletrans.status[props.lang]}
                  direction={props.lang.dir}
                  label="label"
                  action={(e)=>{setOrderStatus(e.value)}}
                  options={(order.status=="inproduction")?[{label:"اتمام",value:"faktor"}]:[{label:"تایید",value:"inproduction"},{label:"لغو",value:"cancel"}]}
                />  
                <button className="edit-btn" type="button" onClick={()=>{UpdateStatus(order.rxOrderNo,OrderStatus)}}>ثبت وضعیت</button>
              </div>:<></>}
              <div className="gurantee-status">
                <div className="title">
                  <h6>وضعیت گارانتی:</h6>
                  {order.stockGurantee?<span className="yes-g">دارد</span>:<span className="no-g">ندارد</span>}
                </div>
                <button className="add-gutantee edit-btn" onClick={()=>
                  window.location.href="/Garantee/"+(order.rxOrderNo?order.rxOrderNo:order.stockOrderNo)}>{order.stockGurantee?"بررسی گارانتی":"ثبت گارنتی +"}</button>
              </div>
              
            </td>
          </tr>
          
          </>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default OrderTableRow