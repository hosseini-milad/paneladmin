import StyleSelect from "../../../components/Button/AutoComplete"
import StyleInput from "../../../components/Button/Input"
import StyleRadio from "../../../components/Button/Radio"
import formtrans from "../../../translate/forms"
import ServiceBrandHolder from "./ServiceBrandHolder"

function ServiceType(props){
  const content = props.content
    return(
        <div className="item-col">
          <div className="type-input">
            <StyleRadio options={['Color','Mirror','Coating','Extra']} title="Type"
            defaultValue={content?content.category:''}
            action={(e)=>props.setServiceChange(prevState => ({
              ...prevState,
              category:e
          }))} />
          </div>
          <div className="serviceItem">
            <StyleInput title={formtrans.title[props.lang]} direction={props.direction} 
                defaultValue={content?content.title:''} class={"formInput"}
                action={(e)=>props.setServiceChange(prevState => ({
                  ...prevState,
                  title:e
                }))}/>
                <StyleInput title={formtrans.sku[props.lang]} direction={props.direction} 
                defaultValue={content?content.serviceCode:''} class={"formInput"}
                action={(e)=>props.setServiceChange(prevState => ({
                  ...prevState,
                  serviceCode:e
                }))}/>
                {(props.serviceChange.category==="Coating")?
                  <StyleInput title={formtrans.description[props.lang]} direction={props.direction} 
                defaultValue={content?content.description:''} class={"formInput"}
                action={(e)=>props.setServiceChange(prevState => ({
                  ...prevState,
                  description:e
                }))}/>:<></>}
                <ServiceBrandHolder lang={props.lang} direction={props.direction} 
                setServiceChange={props.setServiceChange} setBrand={props.setBrand}
                brand={props.brand}/>
          </div>
          {/*<div className="return-input">
            <input type="checkbox" name="" id="return"/>
            <label htmlFor="return">Returnable Item</label>
              </div>*/}
        </div>
    )
}
export default ServiceType