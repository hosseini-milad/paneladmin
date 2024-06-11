import { useState } from "react"
import OrderTableRow from "./OrderTableRow"
import tabletrans from "../../translate/tables"

function CanOrderTable(props){
  const orders = props.orders
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
    return(
    <table>
      <thead>
        <tr>
          <th>
            <p>{tabletrans.rowNumber[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.user[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.order[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.productName[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.invoice[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.customer[lang]}</p>
          </th>
          <th>
            <p>{tabletrans.date[lang]}</p>
          </th>
          <th>
          <p>{tabletrans.status[lang]}</p>
          </th>
          <th>
          <p>{tabletrans.statusFactory[lang]}</p>
          </th>

        </tr>
      </thead>
      <tbody>
        {orders&&orders.cancelList?orders.cancelList.map((order,i)=>(
          <OrderTableRow detail={detail} showDetail={showDetail} 
            order={order} index={i} key={i} lang={lang} category={props.category}/>
        )):''}
        
      </tbody>
    </table>

    )
}
export default CanOrderTable