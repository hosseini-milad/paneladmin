import { useState } from "react"
import ErrorAction from "../../../components/Modal/ErrorAction"
import env from "../../../env"

function TaskAction(props){
    const token = props.token
    const data = props.data
    
    const task = props.taskData
    const order = props.content
    const [changeData,setChangeData] = useState()
    const [error,showError] = useState()
    const updateTask=(action,factoryData)=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,
            "userId":token&&token.userId},
            body:JSON.stringify({orderNo:task&&task.orderNo, 
                crmCode:"orders",
                status:action?action:'',
                changeData:{...changeData,factory:factoryData}})
          }
        //console.log(postOptions)
      fetch(env.siteApi + "/panel/crmOrder/check-status",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){

            }
            else{

                setTimeout(()=>props.close(),3000)
                props.setBoard(result)
            }
        },
        (error) => {
          console.log(error);
        })
    }
    if(!data)
        return(<main>در حال بررسی</main>)
    else{
        if(data.taskStep==="inprogress"){
        return(
        <div className="taskAction">
            <div className="taskBtn">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>showError({state:'',data:'',color:"#0f5132",title:"ثبت در کارخانه",
                    text:"آیا از ثبت سفارش در کارخانه اطمینان دارید؟",buttonText:"ثبت سفارش"})}>
                تایید
                </button>
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>showError({state:'',data:'newFactory',color:"#8DA750",title:"ثبت در کارخانه",
                    text:`سفارش به کارخانه ارسال نمی شود <br/>
                    آیا از ثبت سفارش دستی اطمینان دارید؟`,buttonText:"ثبت دستی"})}>
                تایید دستی
                </button>
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                
                <button type="button" className="btn-crm btn-crm-cancel"
                onClick={()=>showError({state:'cancel',data:'',color:"#B40404",title:"ثبت در کارخانه",
                    text:`آیا از لغو سفارش اطمینان دارید؟`,buttonText:"لغو سفارش"})}>
                لغو سفارش
                </button>
            </div> 
            {error?<ErrorAction title={error.title} buttonText={error.buttonText}
                text={error.text} color={error.color} icon={error.icon}
                action={()=>updateTask(error.state,error.data)} close={(e)=>showError()}/>:<></>}
        </div> )}
        if(data.taskStep==="inVehicle"){
            return(
            <div className="taskAction">
                <div className="taskBtn">
                    <input type="input" placeholder="پلاک خودرو" 
                onChange={(e)=>setChangeData(prevState => ({
                    ...prevState,
                    carNo:e?e.target.value:''
                  }))}/>
                <input type="input" placeholder="توضیحات" />
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    تایید
                </button>
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                    </div>
            </div> )}
        if(data.taskStep==="saleControl"){
            return(
            <div className="taskAction">
                <div className="taskDetail">
                    <input type="input" placeholder="قبض دریافت" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        ghabzIn:e?e.target.value:''
                      }))}/>
                    <input type="input" placeholder="قبض پرداخت" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        ghabzOut:e?e.target.value:''
                      }))}/>
                    <input type="input" placeholder="شماره مجوز" 
                    onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        cert:e?e.target.value:''
                      }))}/>
                    <input className="taskComment" 
                        type="input" placeholder="توضیحات" />
                </div>
                <div className="taskBtn">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask("outVehicle")}>
                    تایید
                </button>
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                <button type="button" className="btn-crm btn-crm-cancel"
                onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                <p>لغو سفارش</p></button>
                </div>
            </div> )}
        if(props.store){
            return(
            <div className="taskAction">
                <button type="button" className="btn-crm btn-crm-accept"
                onClick={()=>updateTask()}>
                    رسید سفارش
                </button>
                
            </div> )}
        if(data.taskStep==="completed"){
            return(
            <div className="taskAction">
                <button type="button" className="btn-crm btn-crm-info"
                    onClick={()=>window.location.href="/orders/print/"+data.orderNo}>
                    <p>چاپ سفارش</p></button>
                
            </div> 
        )}
    }
}    
export default TaskAction