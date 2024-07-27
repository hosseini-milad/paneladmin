import { useState ,useEffect } from "react";
import env, { normalPrice } from "../../env";
import Barcode from 'react-barcode';

function PrintLabel(props){
  const orderNo = document.location.pathname.split('/')[2];
  const [skuInfo, setSkuInfo] = useState('');
  
  useEffect(() => {
        const postOptions={
          method:'post',
          headers: { 
            'Content-Type': 'application/json'},
          body:JSON.stringify({'rxOrderNo':orderNo})
        }
        fetch(env.siteApi+"/order/fetch-order",postOptions)
          .then(res => res.json())
          .then(
            (result) => {
              setSkuInfo(result);
              //totalValues(result.data.Result.InvoiceItems)
            },
            (error) => {
              console.log({error:error});
            }
          )
          .catch((error)=>{
            console.log(error)
          })
    
        //window.scrollTo(0, 170);
    },[])
    if(skuInfo)  return(
        <div className="barcode-wrapper">
          <div class="barcode-new stock-label">
            <div class="barcodeNew flex-center">
              <Barcode value={orderNo} fontSize="12px"
                        width={2} textMargin={-2}
                        format="CODE128" height= {27}/>
            </div>
            <div className="title"><strong>:</strong>title</div>
            <div className="info-wrapper">
              <div className="info-item"><p>Sph:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Cyl:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Axis:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Add:</p>
              <p>2.00</p></div>
            </div>
            <div class="barcodeNew flex-center">
              <Barcode value={orderNo} fontSize="12px"
                        width={2} textMargin={-2}
                        format="CODE128" height= {27}/>
            </div>
          </div>
          <div class="barcode-new stock-label">
            <div class="barcodeNew flex-center">
              <Barcode value={orderNo} fontSize="12px"
                        width={2} textMargin={-2}
                        format="CODE128" height= {27}/>
            </div>
            <div className="title">title</div>
            <div className="info-wrapper">
              <div className="info-item"><p>Sph:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Cyl:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Axis:</p>
              <p>2.00</p></div>
              <div className="info-item"><p>Add:</p>
              <p>2.00</p></div>
            </div>
            <div class="barcodeNew flex-center">
              <Barcode value={orderNo} fontSize="12px"
                        width={2} textMargin={-2}
                        format="CODE128" height= {27}/>
            </div>
          </div>
        </div>
    )
}
export default PrintLabel