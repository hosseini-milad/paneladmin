function PricingTab(){
    return(
<div className="pricing-wrapper">
            <div className="price-input filter-input ">
              <input type="number" placeholder="Price"/>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="notif"/>
              <label for="notif">Notif Price</label>
              <input type="checkbox" id="sell"/>
              <label for="sell">Sell Price</label>
              <input type="checkbox" id="buy"/>
              <label for="buy">Buy Price</label>
            </div>
          </div>
    )
}
export default PricingTab