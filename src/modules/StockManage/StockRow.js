import { normalPriceCount } from "../../env"

function StockRow(props){
  const content = props.content
    return(
            <tr>
              <td>
                <i className="fa-solid fa-bars"></i>
              </td>
              <td>{content.brandName}</td>
              <td>{content.material}</td>
              <td>{content.coating}</td>
              <td>{content.lenzIndex}</td>
              <td>{content.sph}</td>
              <td>{content.cyl}</td>
              <td>{normalPriceCount(content.price)}</td>
              <td>
                <div className="act-status order-status">
                  available
                </div>
              </td>
              <td>
                25
              </td>

            </tr>
    )
}
export default StockRow