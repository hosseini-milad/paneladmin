import { useEffect, useState } from "react";
// import ButtonLoader from "../../Components/BtnLoader";
import env, { normalPrice, normalPriceCount, purePrice, sumPrice, sumPriceNew } from "../../../env";

// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import PreviewRXTable from "./PreviewRXTable";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token=cookies.get(env.cookieName)

function PreViewRX(props){
    const url = window.location.pathname.split('/')[4]
    const [content,setContent] = useState('')
    const [user,setUser] = useState('')

    const [defData,setDefData] =useState('');
    const single = defData?(defData.odMain===",,,,"||defData.osMain===",,,,")?1:2:1
    const rawPrice=(defData&&defData.rxLenz)?defData.rxLenz.split(','):[0,0];
    const serPrice=0;

    const [data,setData] = useState(0)
    const [services,setServices] = useState(0)
    const [cylinder,setCylinder] = useState([])
    const [price,setPrice] = useState(["0","0"]);
    const [lenzDetail,setLenzDetail] = useState()
    const [color,setColor] = useState()
    const [moreService,setMoreService] = useState(0);
    const [offers,setOffers] = useState('')
    const [credit,setCredit] = useState('')
    const [repOrder,setRepOrder] = useState('')
    
    const [manager,setManager] = useState()
    const [selectedCustomer,setCustomer] = useState('')
    const [customerList,setCustomerList] = useState()

    useEffect(() => {
      var sku=''
      var postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
              "x-access-token":token&&token.token,"userid":token&&token.userId},
          body:JSON.stringify({rxOrderNo:url})
        }
    fetch(env.siteApi + "/panel/order/fetch-order",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
          setContent(result.data)
          setUser(result.user)
          console.log(content)
          }
        )
        
      },
      (error) => {
        console.log(error);
      }
    ,[])
  
    return(<>
        <PreviewRXTable lenzDetail={content} user={user}/>
        <div className="factor-view">
          <div className="factor-main">
            {content?<section className="sum-sec">
                <div className="sum-box">
                    <ul className="r-list">
                      <li>قیمت محصول</li>
                      <li>هزینه پوشش</li>
                      <li>هزینه رنگ</li>
                      {/* {moreService&&moreService.map((service,i)=>(
                        <li key={i}>
                          هزینه {service.title}
                        </li>
                      ))}
                      {cylinder&&cylinder.map((service,i)=>(
                        <li key={i}>
                          {service.title}
                        </li>
                      ))} */}
                      <li>تعداد: </li>
                      <li>جمع: </li>
                      <li>تخفیف: </li>
                      <li>جمع کل:</li>
                    </ul>
                    <ul className="l-list">
                      <li>-</li>
                      <li>{content.coverPrice?normalPriceCount(content.coverPrice,content.singleLens):"-"}</li>
                      <li>{content.colorPrice?normalPriceCount(content.colorPrice,content.singleLens):"-"}</li>
                      {/* {moreService&&moreService.map((service,i)=>(
                        <li key={i}>
                          {normalPriceCount(service.price?service.price:"0",data.singleLens)}
                        </li>
                      ))}
                      {cylinder&&cylinder.map((service,i)=>(
                        <li key={i}>
                          {service.price?normalPrice(service.price):'-'}
                        </li>
                      ))} */}
                      <li>{content.singleLens?content.singleLens:"-"}</li>
                      <li>{content?sumPriceNew(content.totalPrice,content.totalDiscount):'-'}</li>
                      <li>{content.totalDiscount?normalPrice(content.totalDiscount):'-'}</li>
                      <li>{content?normalPrice(content.totalPrice):'-'}</li>
                    
                    </ul>
                </div>
                <div className="sum-box">
                    <ul className="r-list">
                    <li>تاریخ ثبت:</li>
                    </ul>
                    <ul className="l-list">
                    <li>{new Date(content.date).toLocaleDateString('fa')}</li>
                    </ul>
                </div>
                
            
            </section> :<></>}
          </div>
        </div>
        
        </>
    )
}
export default PreViewRX