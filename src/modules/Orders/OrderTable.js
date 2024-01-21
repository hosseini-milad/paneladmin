import { useState } from "react"
import OrderTableRow from "./OrderTableRow"
import tabletrans from "../../translate/tables"

function OrderTable(props){
  const orders = props.orders
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
    return(
    <table>
      <thead>
        <tr>
          <th>
            <p>{tabletrans.rowNumber[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.user[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.order[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.productName[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.invoice[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.customer[lang]}</p>
            <i></i>
          </th>
          <th>
            <p>{tabletrans.date[lang]}</p>
            <i></i>
          </th>
          <th>
          <p>{tabletrans.status[lang]}</p>
            <i></i>
          </th>
          <th>
          <p>{tabletrans.statusFactory[lang]}</p>
            <i></i>
          </th>
          <th>
          </th>
        </tr>
      </thead>
      <tbody>
        {orders&&orders.filter?orders.filter.map((order,i)=>(
          <OrderTableRow detail={detail} showDetail={showDetail} 
            order={order} index={i} key={i} lang={lang} category={props.category}/>
        )):''}
        
      </tbody>
    </table>

    )
}
export default OrderTable