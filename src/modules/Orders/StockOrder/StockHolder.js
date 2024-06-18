import { useEffect, useState } from "react"
import env from "../../../env"
import StyleInput from "../../../components/Button/Input"

function StockHolder(){
    const url = window.location.pathname.split('/')[3]
    const [editRow , setEditRow] = useState(-1)
    const [newCount , setCount] = useState(0)
    const [content ,setContent ] = useState()
    useEffect(() => {
        var postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({stockOrderNo:url})
          }
      fetch(env.siteApi + "/order/fetch-stock",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setContent(result)
        },
        (error) => {
          console.log(error);
        }
      )
    },[])
    const updateValue=(sku,count)=>{
        var postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({stockOrderNo:url,sku:sku,count:count?count:newCount})
          }
      fetch(env.siteApi + "/panel/order/editStockOrder",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setEditRow(-1)
        },
        (error) => {
          console.log(error);
        }
      )
    }
    return(
    <div className="user-list" style={{direction:"rtl"}}>
        <table>
            <thead>
                <tr>
                    <th>آیتم 1</th>
                    <th>آیتم 1</th>
                    <th>آیتم 1</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
        </table>
        <table>
            <tbody>
                <tr>
                    <th>شناسه</th>
                    <th>نام محصول</th>
                    <th>sph</th>
                    <th>cyl</th>
                    <th>تعداد</th>
                    <th>عملیات</th>

                </tr>
                {content&&content.stockFaktor&&content.stockFaktor.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.sku}</td>
                        <td  className="countEditStock"><strong>{item.brand}</strong><br/>
                            <small>{item.material} - {item.index}</small>
                        </td>
                        <td>{item.sph}</td>
                        <td>{item.cyl}</td>
                        <td className="countEditStock">
                            <StyleInput label="تعداد" class={"countEdit"}
                            defaultValue={item.count} 
                            action={(e)=>(setCount(e),setEditRow(i))}/>
                            {i==editRow?
                            <i className="fa fa-check" onClick={()=>updateValue(item.sku)}></i>:<></>}
                        </td>
                        <td><i className="fa fa-trash" onClick={()=>updateValue(item.sku,0)}></i></td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    )
}
export default StockHolder