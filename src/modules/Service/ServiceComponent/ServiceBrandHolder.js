import { useState } from "react"
import BrandList from "./BrandList"
import tabletrans from "../../../translate/tables"
import StyleSelect from "../../../components/Button/AutoComplete"
import brandtrans from "../../../translate/brands"

function ServiceBrandHolder(props){
  const [brands,showBrands] = useState(0)
  const options = props.all?[{english:"All",persian:"همه",value:'all'}]:
    brandtrans.map(item=>item)
    return(
        <div style={{position:"relative"}}>
          <StyleSelect title={tabletrans.brand[props.lang]} direction={props.direction} 
          options={options} label={props.lang} class={"formInput"}
          action={(e)=>(props.setBrand(''),setTimeout(()=>props.setBrand(e&&e.value),100))}/>
          <div className={props.direction==="rtl"?"manageIcon":"manageIcon manageIconLtr"}
            onClick={()=>showBrands(1)}>
            <i className="fa-solid fa-gear fa-sm open-modal" style={{color: "#0000ff"}}
                ></i>
          </div>
          {brands?<BrandList showBrands={showBrands}/>:<></>}
        </div>
    )
}
export default ServiceBrandHolder