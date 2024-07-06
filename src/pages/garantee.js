import React ,{ useState }from 'react'
import { useEffect } from "react";
import Cookies from "universal-cookie";

import errortrans from "../translate/error";
import tabletrans from "../translate/tables";
import env from "../env";
import StyleInput from "../components/Button/Input";
import StyleSelect from "../components/Button/AutoComplete";
const cookies = new Cookies();


const Garantee = (props) => {
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;
  const [RxStock,setRxStock] = useState("")
  const [OrderID,setOrderID] = useState("")
  const [loading,setLoading] = useState(0)
  const [search,setSearch] = useState('')
  const [content,setContent] = useState("")

  const token=cookies.get(env.cookieName)


  useEffect(() => {
    setLoading(1)
    const body={
      orderNo:OrderID,
  }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json',
        "x-access-token":token&&token.token,"userId":token&&token.userId},
        body:JSON.stringify(body)
      }

      fetch(env.siteApi + "/panel/order/getGuranteeOrder",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
        setLoading(0)
        setContent('')
        setTimeout(()=> setContent(result),200)
        setTimeout(()=> setRxStock(result.status),200)
        
      },
        (error) => {
        setLoading(0);
        console.log(error);
      }
      );
}, [OrderID]);
console.log(RxStock)
if(!content)
  return(
      <div >Waiting</div>
    )
  return (
    <div className="user lathe-page" style={{ direction: direction }}>
      <h4>{tabletrans.garantee[lang]}</h4>
      <div className="list-container">
        
        <div className="lathe-container">
          
          <div className="container">
            <div className="search-container">
              <StyleInput
                title={tabletrans.barcode[lang]}
                direction={lang.dir}
                className="search-input"
                action={(e)=>{setSearch(e)}}
                doAction={(e)=>e.keyCode===13?setOrderID(search):console.log("common")}
              />
              <button onClick={()=>{setOrderID(search)}}  className="search-btn">جستجو<i class="fa-solid fa-magnifying-glass" ></i></button>
            </div>
            <div className="rx-stock">
              <div className={`tab-btn ${RxStock=="stock"?"active-tab":""} `} >Stock</div>
              <div className={`tab-btn ${RxStock=="rx"?"active-tab":""} `} >Rx</div>
            </div>
            <div className="brand-container">
              <StyleInput
              title={tabletrans.brand[lang]}
              direction={lang.dir}
              defaultValue={content.lData&&content.lData.brandName}
              />
              {RxStock=="stock"?<StyleSelect
              title={tabletrans.material[lang]}
              direction={lang.dir}
              />:
              <StyleInput
                title={tabletrans.material[lang]}
                direction={lang.dir}
                defaultValue={content.lData&&content.lData.material}
              />
              }
            </div>
          </div>
          <div className="image-wrapper">
            <img src="../lathe-sample.jpeg" alt="Lenz" />
          </div>
        </div>
        <div className="lathe-container">
          <div className="input-index-wrapper">
            <p className="title">OD</p>
            <StyleInput
              title="Sphere"
              direction={lang.dir}
              defaultValue={content.lData&&content.lData.sph}
            />
            <StyleInput
              title="Cylinder"
              direction={lang.dir}
              defaultValue={content.lData&&content.lData.cyl}
            />
            <StyleInput
              title="Axis"
              direction={lang.dir}
            />
            <StyleInput
              title="PD"
              direction={lang.dir}
            />
            {RxStock=="rx"?<StyleInput
              title="Addition"
              direction={lang.dir}
            />:<></>}
          </div>
          <div className="input-index-wrapper">
          <p className="title">OS</p>
            <StyleInput
              title="Sphere"
              direction={lang.dir}
              defaultValue={content.rData&&content.rData.sph}
            />
            <StyleInput
              title="Cylinder"
              direction={lang.dir}
              defaultValue={content.rData&&content.rData.cyl}
            />
            <StyleInput
              title="Axis"
              direction={lang.dir}
            />
            <StyleInput
              title="PD"
              direction={lang.dir}
            />
            {RxStock=="rx"?<StyleInput
              title="Addition"
              direction={lang.dir}
            />:<></>}
          </div>
        </div>
        <div className="info-container">
          <div className="container">
            <StyleInput
                title="نام بیمار"
                direction={lang.dir}
                defaultValue={content.userData&&content.userData.cName}
            />
            <StyleInput
                title="شماره قبض مشتری"
                direction={lang.dir}
            />
            <StyleInput
                title="هزینه تراش به تومان"
                direction={lang.dir}
                defaultValue={content.price&&content.price}
            />
          </div>
          <StyleInput
              title="توضیحات"
              direction={lang.dir}
          />
          <div className="dense-btn">
            <input className="switch-input" type="checkbox" id="switch" />
            <label className="switch-label" htmlFor="switch"></label>
            <p>فوری</p>
          </div>
          <button className="submit">ثبت<i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Garantee
