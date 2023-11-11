import React, { useRef ,useEffect, useState} from 'react';
import env from "../../../env"
import Status from "../../Components/Status"
import errortrans from "../../../translate/error"
import tabletrans from "../../../translate/tables"
import formtrans from "../../../translate/forms"
import ProductName from './ProductName';

function ProductDetailHolder(props){
  const url = window.location.pathname.split('/')[3]
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;
  const [error,setError] = useState({errorText:'',errorColor:"brown"})

  const [content,setContent] = useState('')
  const [brand,setBrand] = useState('')
  const [price,setPrice] = useState('')
  const [fCode,setFCode] = useState('')
  const [purchase,setPurchase] = useState('')
  const [productChange,setProductChange] = useState('')
  

  useEffect(()=>{
    if(url==="new")return
    var postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({serviceId:url})
    }
   
fetch(env.siteApi + "/panel/product/fetch-product",postOptions)
.then(res => res.json())
.then(
  (result) => {
    if(result.error){
      setError({errorText:result.error,
        errorColor:"brown"})
      setTimeout(()=>setError({errorText:'',
        errorColor:"brown"}),3000)
    }
      else{
        setError({errorText:"سرویس پیدا شد",
          errorColor:"green"})
          setContent(result.filter)
          setPrice(result.filter.servicePrice)
          setFCode(result.filter.factoryCode)
          setPurchase(result.filter.servicePurchase)
        setTimeout(()=>setError({errorText:'',errorColor:"brown"}),2000)
      }
      
  },
  (error) => {
    console.log(error);
  }
)
  },[])
  const saveService=()=>{
    //if(newCustomer) {
      var newPrice = price
      try{newPrice = JSON.parse(price)}catch{}
      
      var newPurchase = purchase
      try{newPurchase = JSON.parse(purchase)}catch{}
      var newFCode = fCode
      try{newFCode = JSON.parse(fCode)}catch{}
      var postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({serviceId:url,
            ...productChange,servicePrice:newPrice,
          servicePurchase:newPurchase,
          factoryCode:newFCode})
        }
       console.log(postOptions)
    fetch(env.siteApi + "/panel/product/editService",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.error){
          setError({errorText:result.error,
            errorColor:"brown"})
          setTimeout(()=>setError({errorText:'',
            errorColor:"brown"}),3000)
        }
          else{
            setError({errorText:result.success,
              errorColor:"green"})
            setTimeout(()=>window.location.href="/services",2000)
          }
          
      },
      (error) => {
        console.log(error);
      }
    )
  }
console.log(productChange)
return(
  <div className="new-item" style={{direction:direction}}>
      <div className="create-product">
      <h4>{tabletrans.createProduct[lang]}</h4>
      <div className="pages-wrapper">
        <ProductName direction={direction} lang={lang} content={content} 
          productChange={productChange} setProductChange={setProductChange}/>
        <div className="pd-row">
          <div className="row-title">
            <h4>Properties</h4>
            <p>Additional functions and attributes...</p>
          </div>
          <div className="row-box">
            <div className="probs-wrapper">
              <div className="input-wrapper">
                <div className="product-code info-input">
                  <label htmlFor="pd-code">Product Code</label>
                  <input type="text" name="" id="pd-code"/>
                </div>
                <div className="product-sku info-input">
                  <label htmlFor="pd-sku">Product SKU</label>
                  <input type="text" name="" id="pd-sku"/>
                </div>
                <div className="quantity info-input">
                  <label htmlFor="pd-num">Quantity</label>
                  <input type="text" name="" id="pd-num"/>
                </div>
                <div className="category info-input">
                  <label htmlFor="pd-category">Category</label>
                  
                </div>
                <div className="pd-color"><div>Color</div></div>
                <div className="pd-size"><div>Size</div></div>
                <div className="pd-tags info-input">
                  <label htmlFor="pd-tag">Tags</label>
                  <input type="text" name="" id="pd-tag"/>
                </div>

              </div>
              <div className="gender-wrapper">
                <h5>Gender</h5>
                <div className="gender-checkboxes">
                  <input type="checkbox" name="" id="men"/>
                  <label htmlFor="men">Men</label>
                  <input type="checkbox" name="" id="women"/>
                  <label htmlFor="women">Women</label>
                  <input type="checkbox" name="" id="kid"/>
                  <label htmlFor="kid">Kids</label>
                </div>
              </div>
              <div className="label-wrapper">
                <div className="sale-label">
                  <div className="dense-btn">
                    <input className="switch-input" type="checkbox" id="switch-1" />
                    <label className="switch-label" htmlFor="switch-1">Toggle</label>
                  </div>
                  <div className="sale-input info-input">
                    <label htmlFor="sale">Sale Label</label>
                    <input type="text" name="" id="sale"  disabled  />
                  </div>
                </div>
                <div className="new-label">
                  <div className="dense-btn">
                    <input className="switch-input" type="checkbox" id="switch-2"/>
                    <label className="switch-label" htmlFor="switch-2">Toggle</label>
                  </div>
                  <div className="sale-input info-input">
                    <label htmlFor="new">New Label</label>
                    <input type="text" name="" id="new"  disabled  />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="pd-row">
          <div className="row-title">
            <h4>Pricing</h4>
            <p>Price related inputs</p>
          </div>
          <div className="row-box">
            <div className="price-wrapper">
              <div className="regular-price info-input">
                <label htmlFor="reg-price">Regular Price</label>
                <i className="fa-solid fa-dollar-sign" style={{color: "#c0c0c0"}}></i>
                <input type="text" name="" id="reg-price"/>
              </div>
              <div className="sale-price info-input">
                <label htmlFor="sale-price">Sale Price</label>
                <i className="fa-solid fa-dollar-sign" style={{color: "#c0c0c0"}}></i>
                <input type="text" name="" id="sale-price"/>
              </div>
              <div className="tax-wrapper">
                <div className="dense-btn">
                  <input className="switch-input" type="checkbox" id="switch-4" />
                  <label className="switch-label" htmlFor="switch-4">Toggle</label>
                </div>
                <p>Price includes taxes</p>
              </div>
              <div className="tax-active-wrapper info-input">
                <label htmlFor="tax-prc">Tax(%)</label>
                <i className="fa-solid fa-percent" style={{color: "#c0c0c0"}}></i>
                <input type="text" name="" id="tax-prc"/>

              </div>
            </div>
          </div>
        </div>
        <div className="create-btn-wrapper">
          <div className="dense-btn">
            <input className="switch-input" type="checkbox" id="switch-3" />
          </div>
          <p>Publish</p>
          <div className="create-btn">Create Product</div>
        </div>
        
      </div>
    </div>
  </div>
  )
}
export default ProductDetailHolder