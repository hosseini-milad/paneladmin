import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function OrderQuickDetail(props){
    const order = props.order
    const [sku,setSku]=useState()
    console.log(order)
    useEffect(() => {
        const body={
            sku:"manager"
        }
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({sku:order.rxLenz.split(',')[2]})
          }
        fetch(env.siteApi + "/order/manufacture/find",postOptions)
      .then(res => res.json())
      .then(
        (result) => {setSku(result)},
        (error) => {
          console.log(error);
        }
        
    )},[])
    return(
      <tr className="sub-order">
        <td colSpan="9">
            {sku?<div className="sub-order-table">
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <img src="/img/lenz01.jpg"
                        alt={sku.sku}/>
                        <div className="sub-info">
                        <p className="sub-name">{sku.title}</p>
                        <p className="sub-id">{order.rxLenz.split(',')[2]}</p>
                        </div>
                    </div>
                    </div>
                    <div className="sub-num">{rxFindCount(order)}x</div>
                    <div className="sub-price">{normalPriceCount(order.totalPrice)}</div>
                </div>
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <img src="/img/cover.png"
                        alt={order.coverCode}/>
                        <div className="sub-info">
                        <p className="sub-name">{order.coverCode}</p>
                        <p className="sub-id">{order.coverDesc}</p>
                        </div>
                    </div>
                    </div>
                    <div className="sub-num">{rxFindCount(order)}x</div>
                    <div className="sub-price">{normalPriceCount(order.coverPrice)}</div>
                </div>
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <div className="sub-info">
                        <p className="sub-name">{order.moreInformation}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>:env.loader}
        </td>
        </tr>
    )
}
export default OrderQuickDetail