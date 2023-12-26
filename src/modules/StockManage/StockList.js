import formtrans from "../../translate/forms"
import StockRow from "./StockRow"

function StockList(props){
  const content = props.content
    return(
      <div className="user-list">
      <table className="matrixTable">
        <thead>
          <tr>
            <th><i className="fa-regular fa-file-excel"></i></th>
            <th>{formtrans.brand[props.lang]}</th>
            <th>{formtrans.material[props.lang]}</th>
            <th>{formtrans.coating[props.lang]}</th>
            <th>{formtrans.lenzIndex[props.lang]}</th>
            <th>{formtrans.sph[props.lang]}</th>
            <th>{formtrans.cyl[props.lang]}</th>
            <th>{formtrans.sellingPrice[props.lang]}</th>
            <th>{formtrans.existance[props.lang]}</th>
            <th>{formtrans.count[props.lang]}</th>

          </tr>
        </thead>
        <tbody>
          {content&&content.stock&&content.stock.map(
          (stock,i)=>(
            <StockRow content={stock} key={i} />
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <td>
              <i className="fa-solid fa-bars"></i>
              <div className="sub-menu">
                <p>Edit</p>
                <p>Barcode</p>
              </div>

            </td>
    </div>
    )
}
export default StockList