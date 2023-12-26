import formtrans from "../../translate/forms"
import MatrixHolder from "./StockModules/MatrixHolder"
import PricingTab from "./StockModules/PricingTab"

function StockMatrix(props){
    return(
      <div className="product-wrapper">
        <input checked type="radio" name="page" id="matrix"/>
        <input type="radio" name="page" id="price"/>
        <input type="radio" name="page" id="result"/>
        <div className="label-wrapper-matrix">
          <label id="matrix-label" className="page-label" for="matrix">existence</label>
          <label id="price-label" className="page-label" for="price">Pricing</label>
        </div>
        <div id="matrix-page" className="matrix-table">
          {props.content&&props.content.matrixData?<MatrixHolder lang={props.lang} 
            content={props.content}/>:<></>}

          <div className="submit-btn">{formtrans.submit[props.lang]}</div>
        </div>
        <div id="price-page" className="pricing">
          <div className="date-wrappper">
            <div className="date-input ">
              <input type="text" name="" id="start-date" placeholder="Start Date" onFocus="(this.type='date')"
                onBlur="(this.type='text')"/>
            </div>
            <div className="date-input ">
              <input type="text" name="" id="end-date" placeholder="End Date" onFocus="(this.type='date')"
                onBlur="(this.type='text')"/>
            </div>
          </div>
          <PricingTab />
          <div className="submit-btn">{formtrans.submit[props.lang]}</div>
        </div>
      </div>
    )
}
export default StockMatrix