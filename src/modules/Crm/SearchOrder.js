import { useState } from "react"
import StyleInput from "../../components/Button/Input"
import env from "../../env"
import OrderPopUp from "./orderPopUp"
import InlineOrder from "./Tasks/InlineOrder"

function SearchOrder(props){
    const direction= props.data.direction
    const token = props.data.token
    const [orderNo,setOrderNo] = useState()
    const [orderPop,setOrderPop] = useState(0)
    const [orderList,setOrderList] = useState('')
    const searchOrderNo=(orderNo)=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userId":token&&token.userId},
            body:JSON.stringify({search:orderNo})
          }
      fetch(env.siteApi + "/order/rxKharid/search",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            if(result.error){}
            else{
                var index =  orderList.length
                setOrderList(existingItems => {
                    return [
                      ...existingItems.slice(0, index),
                      result[0],
                      ...existingItems.slice(index + 1),
                    ]
                  })
            }
        },
        (error) => {
          console.log(error);
        }
      )
        
    }
    console.log(orderList)
    return(<>
        <div className="searchOrder">
            <StyleInput title="شماره سفارش" 
            action={(e)=>setOrderNo(e)}
            direction="rtl" class="miniText"/>
            <input type="button" value="جستجو" 
            className="miniBtn btn-crm btn-crm-edit"
            onClick={()=>searchOrderNo(orderNo)}/>
        </div>
            <div className="orderSample">
                {orderList?orderList.map((order,i)=>(
                    <InlineOrder order={order} key={i} />
                )):<></>}
            </div>
            <div className="subBtn">
                <input type="button" className="btn-crm btn-crm-accept" value="رسید خرید" />
            </div>
            {orderPop?<OrderPopUp title={"ویرایش سفارش"}
                btnText={"بروزرسانی"} action={()=>{}}
                token={token} crm={props.data.crm}
                customer={"customer"} creator={"creator"}
                direction={direction} access={props.data.access}
                setBoardArray={props.data.setBoardArray}
                store={true}
                data={{orderNo:orderNo,
                    taskStep:props.data.column.enTitle}} 
                close={()=>setOrderPop(0)}
                />:<></>}
        
        </>
    )
    
}
export default SearchOrder